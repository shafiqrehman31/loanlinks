'use client';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';

interface FormData {
  loanAmount: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  zipCode: string;
  streetAddress: string;
  dateOfBirth: string;
  ssn: string;
  isMilitary: string;
  incomeSource: string;
  employerName: string;
  monthlyIncomeRange: string;
  payFrequency: string;
  nextPayDate: string;
  accountType: string;
  isDirectDeposit: string;
  creditRating: string;
  loanPurpose: string;
  hasUnsecuredDebt: string;
  ownsVehicleFree: string;
  bankName: string;
  bankState: string;
  routingNumber: string;
  accountNumber: string;
}

interface Option {
  value: string;
  label: string;
  color?: string;
}

export default function LoanQuote() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 17;

  const [formData, setFormData] = useState<FormData>({
    loanAmount: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    zipCode: '',
    streetAddress: '',
    dateOfBirth: '',
    ssn: '',
    isMilitary: '',
    incomeSource: '',
    employerName: '',
    monthlyIncomeRange: '',
    payFrequency: '',
    nextPayDate: '',
    accountType: '',
    isDirectDeposit: '',
    creditRating: '',
    loanPurpose: '',
    hasUnsecuredDebt: '',
    ownsVehicleFree: '',
    bankName: '',
    bankState: '',
    routingNumber: '',
    accountNumber: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Zero Parallel API endpoint
  const API_ENDPOINT = 'https://cp.zeroparallel.com/short?link=wYMmd';

  const loanAmountOptions: Option[] = [
    { value: '1000', label: '$1,000' },
    { value: '2500', label: '$2,500' },
    { value: '5000', label: '$5,000' },
    { value: '7500', label: '$7,500' },
    { value: '10000', label: '$10,000' },
    { value: '15000', label: '$15,000' },
    { value: '20000', label: '$20,000' },
    { value: '25000', label: '$25,000' },
    { value: '35000', label: '$35,000' }
  ];

  const monthlyIncomeRanges: Option[] = [
    { value: '1000-1500', label: '$1,000 - $1,500' },
    { value: '1501-2000', label: '$1,501 - $2,000' },
    { value: '2001-2500', label: '$2,001 - $2,500' },
    { value: '2501-3000', label: '$2,501 - $3,000' },
    { value: '3001-3500', label: '$3,001 - $3,500' },
    { value: '3501-4000', label: '$3,501 - $4,000' },
    { value: '4001-5000', label: '$4,001 - $5,000' },
    { value: '5000+', label: '$5000+' }
  ];

  const payFrequencyOptions: Option[] = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-weekly (e.g. Every other Friday)' },
    { value: 'semimonthly', label: 'Semi-monthly (e.g. 15th & last day)' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const creditRatingOptions: Option[] = [
    { value: 'great', label: 'Great (700+)', color: '#28a745' },
    { value: 'good', label: 'Good (600 - 699)', color: '#17a2b8' },
    { value: 'fair', label: 'Fair (500 - 599)', color: '#ffc107' },
    { value: 'poor', label: 'Poor (500 and below)', color: '#dc3545' }
  ];

  const loanPurposeOptions: string[] = [
    'Auto Repair',
    'Credit Card Consolidation',
    'Debt Consolidation',
    'Emergency Situation',
    'Home Improvement',
    'Major Purchase',
    'Medical Expenses',
    'Moving',
    'Other'
  ];

  const bankStateOptions: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const bankOptions: string[] = [
    'Bank of America',
    'Chase',
    'Wells Fargo',
    'Citibank',
    'U.S. Bank',
    'PNC Bank',
    'TD Bank',
    'Capital One',
    'SunTrust',
    'Regions Bank',
    'BB&T',
    'Fifth Third Bank',
    'HSBC',
    'Ally Bank',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.loanAmount) {
        newErrors.loanAmount = 'Please select a loan amount';
      }
    }

    if (step === 2) {
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (step === 3) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
    }

    if (step === 4) {
      const phone = formData.phone.replace(/\D/g, '');
      if (!phone.match(/^\d{10}$/)) {
        newErrors.phone = 'Number must be 10 digits including area code';
      } else if (phone[0] === '0' || phone[0] === '1') {
        newErrors.phone = 'Number should not start with 0 or 1';
      } else if (parseInt(phone.substr(0, 3)) < 200) {
        newErrors.phone = 'Area code is not valid';
      }
    }

    if (step === 5) {
      if (!formData.zipCode.match(/^\d{5}$/)) {
        newErrors.zipCode = 'ZIP code must be 5 digits';
      }
      if (!formData.streetAddress.trim()) {
        newErrors.streetAddress = 'Street address is required';
      }
    }

    if (step === 6) {
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Date of birth is required';
      } else {
        const dob = new Date(formData.dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        if (age < 18) {
          newErrors.dateOfBirth = 'You must be at least 18 years old';
        }
      }
    }

    if (step === 7) {
      const ssnNumbers = formData.ssn.replace(/\D/g, '');
      if (!ssnNumbers.match(/^\d{9}$/)) {
        newErrors.ssn = 'SSN must be 9 digits';
      }
    }

    if (step === 8) {
      if (!formData.isMilitary) {
        newErrors.isMilitary = 'Please select an option';
      }
    }

    if (step === 9) {
      if (!formData.incomeSource) {
        newErrors.incomeSource = 'Please select an income source';
      }
    }

    if (step === 10) {
      if (formData.incomeSource === 'job') {
        if (!formData.employerName.trim()) {
          newErrors.employerName = 'Employer name is required';
        }
      } else if (formData.incomeSource === 'benefits') {
        if (!formData.monthlyIncomeRange) {
          newErrors.monthlyIncomeRange = 'Please select your monthly income range';
        }
      }
    }

    if (step === 11) {
      if (!formData.payFrequency) {
        newErrors.payFrequency = 'Please select how often you are paid';
      }
    }

    if (step === 12) {
      if (!formData.nextPayDate) {
        newErrors.nextPayDate = 'Please select your next pay date';
      }
    }

    if (step === 13) {
      if (!formData.accountType) {
        newErrors.accountType = 'Please select your account type';
      }
    }

    if (step === 14) {
      if (!formData.isDirectDeposit) {
        newErrors.isDirectDeposit = 'Please select an option';
      }
    }

    if (step === 15) {
      if (!formData.creditRating) {
        newErrors.creditRating = 'Please select your credit rating';
      }
    }

    if (step === 16) {
      if (!formData.loanPurpose) {
        newErrors.loanPurpose = 'Please select a loan purpose';
      }
      if (!formData.hasUnsecuredDebt) {
        newErrors.hasUnsecuredDebt = 'Please select an option';
      }
      if (!formData.ownsVehicleFree) {
        newErrors.ownsVehicleFree = 'Please select an option';
      }
    }

    if (step === 17) {
      if (!formData.bankName) {
        newErrors.bankName = 'Please select your bank';
      }
      if (!formData.bankState) {
        newErrors.bankState = 'Please select your bank state';
      }
      if (!formData.routingNumber.match(/^\d{9}$/)) {
        newErrors.routingNumber = 'Routing number must be 9 digits';
      }
      if (!formData.accountNumber.match(/^\d+$/) || formData.accountNumber.length < 5) {
        newErrors.accountNumber = 'Please enter a valid account number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }

    // If we're on the last step, submit the form
    if (currentStep === totalSteps) {
      setIsSubmitting(true);

      try {
        // Prepare form data for Zero Parallel API
        const apiFormData = new FormData();
        
        // Add all form fields to FormData
        Object.entries(formData).forEach(([key, value]) => {
          apiFormData.append(key, value);
        });

        // Add additional required fields for Zero Parallel
        apiFormData.append('source', 'speedyloancenter');
        apiFormData.append('country', 'US');
        apiFormData.append('ip_address', '');
        apiFormData.append('sub_id', 'wYMmd');

        // Submit to Zero Parallel API
        await fetch(API_ENDPOINT, {
          method: 'POST',
          body: apiFormData,
          mode: 'no-cors'
        });

        setSubmitted(true);

      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Format phone number
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0,3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6,10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  // Format SSN
  const formatSSN = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0,3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0,3)}-${numbers.slice(3,5)}-${numbers.slice(5,9)}`;
  };

  const handleSSNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatSSN(e.target.value);
    setFormData(prev => ({ ...prev, ssn: formatted }));
  };

  // Calculate progress percentage
  const progressPercentage = ((currentStep - 1) / totalSteps) * 100;

  // Step titles for display
  const stepTitles = [
    "How much Cash do you need?",
    "What's your email address?",
    "What's your full legal name?",
    "What's your mobile number?",
    "Your current address is...",
    "What's your Date Of Birth?",
    "My Social Security Number is",
    "Are you in the military?",
    "What's your Income Source?",
    formData.incomeSource === 'job' ? "What's your Employer's Name?" : "What's your Monthly Net Income?",
    "How often are you paid?",
    "My next paydate is...",
    "Account Type",
    "Is your pay a Direct Deposit?",
    "What's your approximate Credit Rating?",
    "Loan Details",
    "Bank Information"
  ];

  return (
    <div className="loan-quote-page">
      <PageHeader title="Loan Quote" />
      
      {/* Hero Section */}
      <section className="loan-quote-hero section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  Get Your <span className="gradient-text">Loan Quote</span> Now
                </h1>
                <p className="hero-description">
                  Complete this simple application to get matched with the best loan offers. 
                  It only takes a few minutes and won't affect your credit score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Quote Form with Multi-step */}
      <section className="loan-quote-form-section section-space">
        <div className="container">
          {submitted ? (
            <div className="submission-success">
              <div className="success-icon">✅</div>
              <h2 className="success-title">Application Submitted Successfully!</h2>
              <p className="success-message">
                Thank you for submitting your loan application. You will be redirected to our 
                partner network where you can review multiple loan offers from top lenders.
              </p>
              <div className="success-actions">
                <a href={API_ENDPOINT} className="continue-btn">
                  Continue to Lender Network →
                </a>
                <p className="redirect-note">
                  If you are not redirected automatically, please click the button above.
                </p>
              </div>
            </div>
          ) : (
            <div className="form-wrapper">
              {/* Progress Bar - Hidden Labels */}
              <div className="progress-section">
                <div className="progress-info">
                  <span className="progress-text">Step {currentStep} of {totalSteps}</span>
                  <span className="progress-percentage">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="form-header">
                <h2 className="form-title">{stepTitles[currentStep - 1]}</h2>
                <p className="form-subtitle">
                  Complete this step to continue to the next part of your application
                </p>
              </div>

              <form onSubmit={handleSubmit} className="loan-quote-form">
                {/* Step 1: Loan Amount */}
                {currentStep === 1 && (
                  <div className="form-step">
                    <div className="option-grid">
                      {loanAmountOptions.map(option => (
                        <label key={option.value} className="option-card">
                          <input
                            type="radio"
                            name="loanAmount"
                            value={option.value}
                            checked={formData.loanAmount === option.value}
                            onChange={handleChange}
                            className="option-input"
                          />
                          <div className="option-content">
                            <div className="option-label">{option.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.loanAmount && (
                      <div className="error-message">{errors.loanAmount}</div>
                    )}
                  </div>
                )}

                {/* Step 2: Email */}
                {currentStep === 2 && (
                  <div className="form-step">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? 'error' : ''}`}
                        placeholder="Enter your email address"
                        required
                      />
                      {errors.email && (
                        <div className="error-message">{errors.email}</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Full Name */}
                {currentStep === 3 && (
                  <div className="form-step">
                    <div className="row gutter-y-20">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`form-control ${errors.firstName ? 'error' : ''}`}
                            placeholder="First Name"
                            required
                          />
                          {errors.firstName && (
                            <div className="error-message">{errors.firstName}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`form-control ${errors.lastName ? 'error' : ''}`}
                            placeholder="Last Name"
                            required
                          />
                          {errors.lastName && (
                            <div className="error-message">{errors.lastName}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Mobile Number */}
                {currentStep === 4 && (
                  <div className="form-step">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`form-control ${errors.phone ? 'error' : ''}`}
                        placeholder="(555) 123-4567"
                        maxLength={14}
                        required
                      />
                      {errors.phone && (
                        <div className="error-message">{errors.phone}</div>
                      )}
                      <div className="form-hints">
                        <div>• Must only contain numeric values</div>
                        <div>• Number must be 10 digits including area code</div>
                        <div>• Should not start with 0 or 1</div>
                        <div>• Area code must be valid</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Address */}
                {currentStep === 5 && (
                  <div className="form-step">
                    <div className="row gutter-y-20">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="field-label">ZIP CODE</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            className={`form-control ${errors.zipCode ? 'error' : ''}`}
                            placeholder="12345"
                            maxLength={5}
                            required
                          />
                          {errors.zipCode && (
                            <div className="error-message">{errors.zipCode}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="field-label">STREET ADDRESS</label>
                          <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            className={`form-control ${errors.streetAddress ? 'error' : ''}`}
                            placeholder="123 Main Street"
                            required
                          />
                          {errors.streetAddress && (
                            <div className="error-message">{errors.streetAddress}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 6: Date of Birth */}
                {currentStep === 6 && (
                  <div className="form-step">
                    <div className="form-group">
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={`form-control ${errors.dateOfBirth ? 'error' : ''}`}
                        required
                      />
                      {errors.dateOfBirth && (
                        <div className="error-message">{errors.dateOfBirth}</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 7: SSN */}
                {currentStep === 7 && (
                  <div className="form-step">
                    <div className="form-group">
                      <input
                        type="text"
                        name="ssn"
                        value={formData.ssn}
                        onChange={handleSSNChange}
                        className={`form-control ${errors.ssn ? 'error' : ''}`}
                        placeholder="123-45-6789"
                        maxLength={11}
                        required
                      />
                      {errors.ssn && (
                        <div className="error-message">{errors.ssn}</div>
                      )}
                      <div className="form-note">
                        Social Security is used by lenders to qualify you for your loan request.
                        This will NOT affect your credit score.
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 8: Military Status */}
                {currentStep === 8 && (
                  <div className="form-step">
                    <div className="option-grid">
                      <label className="option-card">
                        <input
                          type="radio"
                          name="isMilitary"
                          value="yes"
                          checked={formData.isMilitary === 'yes'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-icon">🇺🇸</div>
                          <div className="option-label">Yes</div>
                        </div>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="isMilitary"
                          value="no"
                          checked={formData.isMilitary === 'no'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-icon">🏠</div>
                          <div className="option-label">No</div>
                        </div>
                      </label>
                    </div>
                    {errors.isMilitary && (
                      <div className="error-message">{errors.isMilitary}</div>
                    )}
                  </div>
                )}

                {/* Step 9: Income Source */}
                {currentStep === 9 && (
                  <div className="form-step">
                    <div className="option-grid">
                      <label className="option-card">
                        <input
                          type="radio"
                          name="incomeSource"
                          value="job"
                          checked={formData.incomeSource === 'job'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-icon">💼</div>
                          <div className="option-label">Job Income</div>
                        </div>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="incomeSource"
                          value="benefits"
                          checked={formData.incomeSource === 'benefits'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-icon">🏛️</div>
                          <div className="option-label">Benefits</div>
                        </div>
                      </label>
                    </div>
                    {errors.incomeSource && (
                      <div className="error-message">{errors.incomeSource}</div>
                    )}
                  </div>
                )}

                {/* Step 10: Conditional based on income source */}
                {currentStep === 10 && (
                  <div className="form-step">
                    {formData.incomeSource === 'job' ? (
                      <div className="form-group">
                        <input
                          type="text"
                          name="employerName"
                          value={formData.employerName}
                          onChange={handleChange}
                          className={`form-control ${errors.employerName ? 'error' : ''}`}
                          placeholder="Enter your employer's name"
                          required
                        />
                        {errors.employerName && (
                          <div className="error-message">{errors.employerName}</div>
                        )}
                      </div>
                    ) : (
                      <div className="option-grid">
                        {monthlyIncomeRanges.map(option => (
                          <label key={option.value} className="option-card">
                            <input
                              type="radio"
                              name="monthlyIncomeRange"
                              value={option.value}
                              checked={formData.monthlyIncomeRange === option.value}
                              onChange={handleChange}
                              className="option-input"
                            />
                            <div className="option-content">
                              <div className="option-label">{option.label}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                    {errors.monthlyIncomeRange && (
                      <div className="error-message">{errors.monthlyIncomeRange}</div>
                    )}
                  </div>
                )}

                {/* Step 11: Pay Frequency */}
                {currentStep === 11 && (
                  <div className="form-step">
                    <div className="option-grid">
                      {payFrequencyOptions.map(option => (
                        <label key={option.value} className="option-card">
                          <input
                            type="radio"
                            name="payFrequency"
                            value={option.value}
                            checked={formData.payFrequency === option.value}
                            onChange={handleChange}
                            className="option-input"
                          />
                          <div className="option-content">
                            <div className="option-label">{option.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.payFrequency && (
                      <div className="error-message">{errors.payFrequency}</div>
                    )}
                  </div>
                )}

                {/* Step 12: Next Pay Date */}
                {currentStep === 12 && (
                  <div className="form-step">
                    <div className="form-group">
                      <input
                        type="date"
                        name="nextPayDate"
                        value={formData.nextPayDate}
                        onChange={handleChange}
                        className={`form-control ${errors.nextPayDate ? 'error' : ''}`}
                        required
                      />
                      {errors.nextPayDate && (
                        <div className="error-message">{errors.nextPayDate}</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 13: Account Type */}
                {currentStep === 13 && (
                  <div className="form-step">
                    <div className="option-grid">
                      <label className="option-card">
                        <input
                          type="radio"
                          name="accountType"
                          value="checking"
                          checked={formData.accountType === 'checking'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-icon">🏦</div>
                          <div className="option-label">Checking</div>
                        </div>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="accountType"
                          value="savings"
                          checked={formData.accountType === 'savings'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-icon">💰</div>
                          <div className="option-label">Savings</div>
                        </div>
                      </label>
                    </div>
                    {errors.accountType && (
                      <div className="error-message">{errors.accountType}</div>
                    )}
                  </div>
                )}

                {/* Step 14: Direct Deposit */}
                {currentStep === 14 && (
                  <div className="form-step">
                    <div className="option-grid">
                      <label className="option-card">
                        <input
                          type="radio"
                          name="isDirectDeposit"
                          value="yes"
                          checked={formData.isDirectDeposit === 'yes'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-label">Yes</div>
                        </div>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          name="isDirectDeposit"
                          value="no"
                          checked={formData.isDirectDeposit === 'no'}
                          onChange={handleChange}
                          className="option-input"
                        />
                        <div className="option-content">
                          <div className="option-label">No</div>
                        </div>
                      </label>
                    </div>
                    {errors.isDirectDeposit && (
                      <div className="error-message">{errors.isDirectDeposit}</div>
                    )}
                  </div>
                )}

                {/* Step 15: Credit Rating */}
                {currentStep === 15 && (
                  <div className="form-step">
                    <div className="option-grid">
                      {creditRatingOptions.map(option => (
                        <label key={option.value} className="option-card">
                          <input
                            type="radio"
                            name="creditRating"
                            value={option.value}
                            checked={formData.creditRating === option.value}
                            onChange={handleChange}
                            className="option-input"
                          />
                          <div className="option-content">
                            <div className="option-label">{option.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.creditRating && (
                      <div className="error-message">{errors.creditRating}</div>
                    )}
                  </div>
                )}

                {/* Step 16: Loan Details */}
                {currentStep === 16 && (
                  <div className="form-step">
                    <div className="form-group">
                      <select
                        name="loanPurpose"
                        value={formData.loanPurpose}
                        onChange={handleChange}
                        className={`form-control ${errors.loanPurpose ? 'error' : ''}`}
                        required
                      >
                        <option value="">Select Loan Purpose</option>
                        {loanPurposeOptions.map(purpose => (
                          <option key={purpose} value={purpose.toLowerCase().replace(/\s+/g, '_')}>
                            {purpose}
                          </option>
                        ))}
                      </select>
                      {errors.loanPurpose && (
                        <div className="error-message">{errors.loanPurpose}</div>
                      )}
                    </div>

                    <div className="question-group">
                      <h4 className="question-title">
                        Select 'Yes' if you have $10,000+ in unsecured debt and would like one of our partners to contact you?
                      </h4>
                      <div className="option-row">
                        <label className="option-button">
                          <input
                            type="radio"
                            name="hasUnsecuredDebt"
                            value="yes"
                            checked={formData.hasUnsecuredDebt === 'yes'}
                            onChange={handleChange}
                            className="option-input"
                          />
                          <span className="button-label">Yes</span>
                        </label>
                        <label className="option-button">
                          <input
                            type="radio"
                            name="hasUnsecuredDebt"
                            value="no"
                            checked={formData.hasUnsecuredDebt === 'no'}
                            onChange={handleChange}
                            className="option-input"
                          />
                          <span className="button-label">No</span>
                        </label>
                      </div>
                      {errors.hasUnsecuredDebt && (
                        <div className="error-message">{errors.hasUnsecuredDebt}</div>
                      )}
                    </div>

                    <div className="question-group">
                      <h4 className="question-title">
                        Do you own your vehicle free and clear?
                      </h4>
                      <div className="option-row">
                        <label className="option-button">
                          <input
                            type="radio"
                            name="ownsVehicleFree"
                            value="yes"
                            checked={formData.ownsVehicleFree === 'yes'}
                            onChange={handleChange}
                            className="option-input"
                          />
                          <span className="button-label">Yes</span>
                        </label>
                        <label className="option-button">
                          <input
                            type="radio"
                            name="ownsVehicleFree"
                            value="no"
                            checked={formData.ownsVehicleFree === 'no'}
                            onChange={handleChange}
                            className="option-input"
                          />
                          <span className="button-label">No</span>
                        </label>
                      </div>
                      {errors.ownsVehicleFree && (
                        <div className="error-message">{errors.ownsVehicleFree}</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 17: Bank Information */}
                {currentStep === 17 && (
                  <div className="form-step">
                    <h3 className="step-subtitle">
                      Upon approval, where do you want your loan deposited?
                    </h3>
                    
                    <div className="row gutter-y-20">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="field-label">BANK</label>
                          <select
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleChange}
                            className={`form-control ${errors.bankName ? 'error' : ''}`}
                            required
                          >
                            <option value="">Please select</option>
                            {bankOptions.map(bank => (
                              <option key={bank} value={bank}>{bank}</option>
                            ))}
                          </select>
                          {errors.bankName && (
                            <div className="error-message">{errors.bankName}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="field-label">BANK STATE</label>
                          <select
                            name="bankState"
                            value={formData.bankState}
                            onChange={handleChange}
                            className={`form-control ${errors.bankState ? 'error' : ''}`}
                            required
                          >
                            <option value="">Please select</option>
                            {bankStateOptions.map(state => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                          {errors.bankState && (
                            <div className="error-message">{errors.bankState}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="field-label">ABA ROUTING NO.</label>
                          <input
                            type="text"
                            name="routingNumber"
                            value={formData.routingNumber}
                            onChange={handleChange}
                            className={`form-control ${errors.routingNumber ? 'error' : ''}`}
                            placeholder="e.g. 2341536435"
                            maxLength={9}
                            required
                          />
                          {errors.routingNumber && (
                            <div className="error-message">{errors.routingNumber}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="field-label">ACCOUNT NO.</label>
                          <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            className={`form-control ${errors.accountNumber ? 'error' : ''}`}
                            placeholder="e.g. 2341536435"
                            required
                          />
                          {errors.accountNumber && (
                            <div className="error-message">{errors.accountNumber}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="legal-agreement">
                      <label className="checkbox-label">
                        <input type="checkbox" required />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">
                          By clicking "AGREE AND SUBMIT" I acknowledge that I have read and agree to the terms of the 
                          Privacy Policy and Terms of Use, which contain a mandatory arbitration clause.
                          I also consent to receive marketing and other texts or calls from Lendyou and/or its 
                          marketing partners at the number previously provided, by any means or technology, including 
                          an automatic dialing system, to the phone number I have provided, even if that number is on 
                          a national or state Do-Not-Call registry. Carrier and data rates may apply. I understand 
                          that my consent to such calls and text messages is not required to purchase products from 
                          or use the services of lendyou and/or its marketing partners.
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="form-navigation">
                  {currentStep > 1 && (
                    <button 
                      type="button" 
                      className="nav-btn prev-btn"
                      onClick={prevStep}
                    >
                      ← Back
                    </button>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <button 
                      type="button" 
                      className="nav-btn next-btn"
                      onClick={nextStep}
                    >
                      Continue →
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Agree and Submit'}
                    </button>
                  )}
                </div>

                {/* Security Notice */}
                <div className="security-notice">
                  <div className="security-icon">🔒</div>
                  <div className="security-text">
                    Your information is protected with 256-bit SSL encryption. By submitting, 
                    you authorize us to share your information with our lending partners.
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Add CSS Styles */}
      <style>{` 
        /* ============================================
           LOAN QUOTE PAGE STYLES
        ============================================= */

        /* Hero Section */
        .loan-quote-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          padding: 100px 0 60px 0;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #333;
          font-family: 'Poppins', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(45deg, #E45551, #ff7a75);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        /* Form Section */
        .loan-quote-form-section {
          padding: 60px 0 100px 0;
        }

        .form-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Progress Bar */
        .progress-section {
          margin-bottom: 40px;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .progress-text {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .progress-percentage {
          font-size: 16px;
          font-weight: 700;
          color: #E45551;
        }

        .progress-bar {
          height: 6px;
          background: #eef2f7;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #333;
          font-family: 'Poppins', sans-serif;
          line-height: 1.3;
        }

        .form-subtitle {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .loan-quote-form {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .form-step {
          margin-bottom: 40px;
          min-height: 300px;
        }

        .step-subtitle {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 30px;
          color: #333;
          text-align: center;
        }

        /* Form Controls */
        .form-group {
          margin-bottom: 25px;
        }

        .field-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-control {
          width: 100%;
          padding: 18px 20px;
          border: 2px solid #eef2f7;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #fff;
          font-family: inherit;
        }

        .form-control:focus {
          outline: none;
          border-color: #E45551;
          box-shadow: 0 0 0 3px rgba(228, 85, 81, 0.1);
        }

        .form-control.error {
          border-color: #dc3545;
        }

        .error-message {
          color: #dc3545;
          font-size: 14px;
          margin-top: 8px;
          font-weight: 500;
        }

        .form-hints {
          margin-top: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }

        .form-hints div {
          margin-bottom: 5px;
        }

        .form-hints div:last-child {
          margin-bottom: 0;
        }

        .form-note {
          margin-top: 15px;
          padding: 15px;
          background: #e8f4fd;
          border-radius: 8px;
          font-size: 14px;
          color: #0c5460;
          line-height: 1.5;
          border-left: 4px solid #17a2b8;
        }

        /* Option Cards */
        .option-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .option-grid {
            grid-template-columns: 1fr;
          }
        }

        .option-card {
          display: block;
          position: relative;
          cursor: pointer;
        }

        .option-input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .option-content {
          padding: 25px 20px;
          background: white;
          border: 2px solid #eef2f7;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .option-input:checked + .option-content {
          border-color: #E45551;
          background: linear-gradient(135deg, rgba(228, 85, 81, 0.05) 0%, rgba(255, 122, 117, 0.05) 100%);
          box-shadow: 0 5px 15px rgba(228, 85, 81, 0.1);
          transform: translateY(-2px);
        }

        .option-label {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .option-icon {
          font-size: 32px;
          line-height: 1;
        }

        /* Option Buttons */
        .option-row {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .option-button {
          flex: 1;
          position: relative;
          cursor: pointer;
        }

        .option-button .option-input {
          position: absolute;
          opacity: 0;
        }

        .button-label {
          display: block;
          padding: 18px 20px;
          background: white;
          border: 2px solid #eef2f7;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          color: #333;
          transition: all 0.3s ease;
        }

        .option-button .option-input:checked + .button-label {
          background: #E45551;
          border-color: #E45551;
          color: white;
        }

        /* Question Groups */
        .question-group {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid #eef2f7;
        }

        .question-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        /* Legal Agreement */
        .legal-agreement {
          margin: 40px 0;
          padding: 25px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #eef2f7;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          cursor: pointer;
          font-size: 14px;
        }

        .checkbox-label input[type="checkbox"] {
          margin-top: 3px;
          min-width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .checkbox-text {
          line-height: 1.6;
          color: #666;
        }

        /* Navigation Buttons */
        .form-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 40px 0 30px 0;
          gap: 20px;
        }

        .nav-btn {
          padding: 16px 35px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #E45551;
          min-width: 140px;
          font-family: inherit;
        }

        .prev-btn {
          background: white;
          color: #E45551;
        }

        .prev-btn:hover {
          background: #f8f9fa;
        }

        .next-btn {
          background: #E45551;
          color: white;
          margin-left: auto;
        }

        .next-btn:hover {
          background: #d6423e;
          transform: translateX(3px);
        }

        .submit-btn {
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
          color: white;
          border: none;
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
          width: 100%;
          max-width: 300px;
          margin-left: auto;
          font-family: inherit;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(228, 85, 81, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Security Notice */
        .security-notice {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: #f0f9ff;
          border-radius: 12px;
          border-left: 4px solid #E45551;
          margin-top: 30px;
        }

        .security-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .security-text {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        /* Success Message */
        .submission-success {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .success-icon {
          font-size: 80px;
          color: #28a745;
          margin-bottom: 30px;
        }

        .success-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #333;
        }

        .success-message {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .continue-btn {
          display: inline-block;
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
          color: white;
          text-decoration: none;
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(228, 85, 81, 0.2);
          margin-bottom: 20px;
        }

        .continue-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(228, 85, 81, 0.3);
        }

        .redirect-note {
          font-size: 14px;
          color: #666;
          font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .hero-title {
            font-size: 36px;
          }
          
          .loan-quote-hero {
            padding: 80px 0 40px 0;
          }
          
          .form-title {
            font-size: 28px;
          }
          
          .loan-quote-form {
            padding: 30px;
          }
          
          .option-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 28px;
          }
          
          .hero-description {
            font-size: 16px;
          }
          
          .form-title {
            font-size: 24px;
          }
          
          .loan-quote-form {
            padding: 20px;
          }
          
          .option-grid {
            grid-template-columns: 1fr;
          }
          
          .option-row {
            flex-direction: column;
          }
          
          .form-navigation {
            flex-direction: column;
          }
          
          .nav-btn, .submit-btn {
            width: 100%;
            max-width: none;
            margin-left: 0;
          }
          
          .security-notice {
            flex-direction: column;
            text-align: center;
          }
          
          .submission-success {
            padding: 40px 20px;
          }
          
          .success-title {
            font-size: 24px;
          }
          
          .continue-btn {
            width: 100%;
            text-align: center;
          }
        }

        /* Utility Classes */
        .gutter-y-20 {
          row-gap: 20px;
        }

        /* Container & Grid */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }

        @media (max-width: 768px) {
          .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        /* Section Spacing */
        .section-space {
          padding: 60px 0;
        }
      `}</style>
    </div>
  );
}