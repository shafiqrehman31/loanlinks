// app/apply-loan/page.tsx
'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Link from 'next/link';

export default function ApplyLoan() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Loan Details
    loanType: '',
    loanAmount: '',
    loanPurpose: '',
    loanTenure: '12',
    
    // Step 2: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    panNumber: '',
    aadhaarNumber: '',
    
    // Step 3: Employment & Income
    employmentType: '',
    monthlyIncome: '',
    companyName: '',
    designation: '',
    workExperience: '',
    
    // Step 4: Address Details
    address: '',
    city: '',
    state: '',
    pincode: '',
    residenceType: '',
    yearsAtCurrentAddress: '',
    
    // Step 5: Documents
    documents: {
      panCard: null as File | null,
      aadhaarCard: null as File | null,
      bankStatement: null as File | null,
      salarySlips: null as File | null,
      addressProof: null as File | null
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [loanCalculations, setLoanCalculations] = useState({
    emi: 0,
    totalInterest: 0,
    totalAmount: 0
  });

  // Loan types with icons
  const loanTypes = [
    { id: 'personal', name: 'Personal Loan', icon: '👤', min: 50000, max: 2000000 },
    { id: 'business', name: 'Business Loan', icon: '🏢', min: 100000, max: 5000000 },
    { id: 'home', name: 'Home Loan', icon: '🏠', min: 500000, max: 10000000 },
    { id: 'education', name: 'Education Loan', icon: '🎓', min: 50000, max: 1000000 },
    { id: 'car', name: 'Car Loan', icon: '🚗', min: 100000, max: 5000000 },
    { id: 'medical', name: 'Medical Loan', icon: '🏥', min: 50000, max: 2000000 }
  ];

  const employmentTypes = [
    'Salaried',
    'Self-Employed',
    'Business Owner',
    'Freelancer',
    'Professional',
    'Retired',
    'Student'
  ];

  const states = [
    'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh',
    'Gujarat', 'West Bengal', 'Rajasthan', 'Madhya Pradesh', 'Punjab',
    'Haryana', 'Kerala', 'Odisha', 'Telangana', 'Andhra Pradesh'
  ];

  // Calculate EMI when loan details change
  useEffect(() => {
    if (formData.loanAmount && formData.loanTenure) {
      calculateEMI();
    }
  }, [formData.loanAmount, formData.loanTenure]);

  const calculateEMI = () => {
    const principal = parseFloat(formData.loanAmount) || 0;
    const tenure = parseInt(formData.loanTenure) || 12;
    const interestRate = 10.5; // Annual interest rate
    
    // Monthly interest rate
    const monthlyRate = interestRate / 12 / 100;
    
    // EMI calculation formula
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenure) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;
    
    setLoanCalculations({
      emi: isNaN(emi) ? 0 : Math.round(emi),
      totalInterest: isNaN(totalInterest) ? 0 : Math.round(totalInterest),
      totalAmount: isNaN(totalAmount) ? 0 : Math.round(totalAmount)
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle nested documents object
    if (name.startsWith('documents.')) {
      const docField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [name]: files[0]
        }
      }));
    }
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const validateStep = (stepNumber: number) => {
    switch(stepNumber) {
      case 1:
        return formData.loanType && formData.loanAmount && formData.loanPurpose;
      case 2:
        return formData.firstName && formData.lastName && formData.email && 
               formData.phone && formData.dob && formData.panNumber;
      case 3:
        return formData.employmentType && formData.monthlyIncome && 
               formData.companyName;
      case 4:
        return formData.address && formData.city && formData.state && 
               formData.pincode;
      default:
        return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError('');

    try {
      // In a real application, you would make an API call here
      // For now, we'll simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful submission
      console.log('Form data submitted:', formData);
      
      // Show success message
      alert('Application submitted successfully! Our representative will contact you within 24 hours.');
      
      // Reset form or redirect
      setFormData({
        loanType: '',
        loanAmount: '',
        loanPurpose: '',
        loanTenure: '12',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        panNumber: '',
        aadhaarNumber: '',
        employmentType: '',
        monthlyIncome: '',
        companyName: '',
        designation: '',
        workExperience: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        residenceType: '',
        yearsAtCurrentAddress: '',
        documents: {
          panCard: null,
          aadhaarCard: null,
          bankStatement: null,
          salarySlips: null,
          addressProof: null
        }
      });
      setStep(1);
      
    } catch (error) {
      setSubmissionError('Failed to submit application. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="apply-loan-page">
      <PageHeader title="Apply for Loan" />
      
      {/* Application Progress */}
      <section className="application-progress section-space">
        <div className="container">
          <div className="progress-steps">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="progress-step">
                <div className={`step-number ${step >= stepNum ? 'active' : ''}`}>
                  {stepNum}
                </div>
                <div className="step-label">
                  {stepNum === 1 && 'Loan Details'}
                  {stepNum === 2 && 'Personal Info'}
                  {stepNum === 3 && 'Income Details'}
                  {stepNum === 4 && 'Address'}
                  {stepNum === 5 && 'Documents'}
                </div>
                {stepNum < 5 && (
                  <div className={`step-connector ${step > stepNum ? 'active' : ''}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="loan-application section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="application-form-wrapper">
                <div className="form-header">
                  <h3 className="form-title">
                    {step === 1 && 'Loan Details'}
                    {step === 2 && 'Personal Information'}
                    {step === 3 && 'Employment & Income Details'}
                    {step === 4 && 'Address Details'}
                    {step === 5 && 'Document Upload'}
                  </h3>
                  <p className="form-subtitle">
                    Step {step} of 5 - {step === 5 ? 'Final Step' : 'Please fill all required fields'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="loan-application-form">
                  {/* Step 1: Loan Details */}
                  {step === 1 && (
                    <div className="form-step">
                      <div className="form-section">
                        <h4 className="section-title">Select Loan Type</h4>
                        <div className="loan-types-grid">
                          {loanTypes.map((loan) => (
                            <div 
                              key={loan.id}
                              className={`loan-type-card ${formData.loanType === loan.id ? 'selected' : ''}`}
                              onClick={() => setFormData(prev => ({ ...prev, loanType: loan.id }))}
                            >
                              <div className="loan-type-icon">{loan.icon}</div>
                              <h5 className="loan-type-name">{loan.name}</h5>
                              <p className="loan-amount-range">
                                ${loan.min.toLocaleString()} - ${loan.max.toLocaleString()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="form-section">
                        <h4 className="section-title">Loan Details</h4>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="loanAmount" className="form-label">
                              Loan Amount ($) *
                            </label>
                            <div className="input-with-prefix">
                              <span className="input-prefix">$</span>
                              <input
                                type="number"
                                id="loanAmount"
                                name="loanAmount"
                                value={formData.loanAmount}
                                onChange={handleChange}
                                required
                                min="50000"
                                max="10000000"
                                step="10000"
                                className="form-control"
                                placeholder="Enter desired loan amount"
                              />
                            </div>
                            <div className="input-hint">
                              Minimum: $50,000 | Maximum: $1,00,00,000
                            </div>
                          </div>

                          <div className="form-group">
                            <label htmlFor="loanTenure" className="form-label">
                              Loan Tenure (Months) *
                            </label>
                            <select
                              id="loanTenure"
                              name="loanTenure"
                              value={formData.loanTenure}
                              onChange={handleChange}
                              required
                              className="form-control"
                            >
                              <option value="12">12 Months (1 Year)</option>
                              <option value="24">24 Months (2 Years)</option>
                              <option value="36">36 Months (3 Years)</option>
                              <option value="48">48 Months (4 Years)</option>
                              <option value="60">60 Months (5 Years)</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="loanPurpose" className="form-label">
                            Purpose of Loan *
                          </label>
                          <textarea
                            id="loanPurpose"
                            name="loanPurpose"
                            value={formData.loanPurpose}
                            onChange={handleChange}
                            required
                            rows={3}
                            className="form-control"
                            placeholder="Please describe what you need the loan for..."
                          />
                        </div>
                      </div>

                      {/* EMI Calculator */}
                      {formData.loanAmount && (
                        <div className="emi-calculator">
                          <h4 className="section-title">Estimated EMI Calculation</h4>
                          <div className="emi-details">
                            <div className="emi-item">
                              <span className="emi-label">Monthly EMI</span>
                              <span className="emi-value">${loanCalculations.emi.toLocaleString()}</span>
                            </div>
                            <div className="emi-item">
                              <span className="emi-label">Total Interest</span>
                              <span className="emi-value">${loanCalculations.totalInterest.toLocaleString()}</span>
                            </div>
                            <div className="emi-item">
                              <span className="emi-label">Total Payment</span>
                              <span className="emi-value">${loanCalculations.totalAmount.toLocaleString()}</span>
                            </div>
                          </div>
                          <p className="emi-note">
                            * EMI calculated at 10.5% annual interest rate
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Personal Information */}
                  {step === 2 && (
                    <div className="form-step">
                      <div className="form-section">
                        <h4 className="section-title">Basic Information</h4>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter first name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter email address"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter 10-digit mobile number"
                              pattern="[0-9]{10}"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="dob" className="form-label">
                              Date of Birth *
                            </label>
                            <input
                              type="date"
                              id="dob"
                              name="dob"
                              value={formData.dob}
                              onChange={handleChange}
                              required
                              className="form-control"
                              max={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="gender" className="form-label">
                              Gender
                            </label>
                            <select
                              id="gender"
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              className="form-control"
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-section">
                        <h4 className="section-title">Identity Details</h4>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="panNumber" className="form-label">
                              PAN Number *
                            </label>
                            <input
                              type="text"
                              id="panNumber"
                              name="panNumber"
                              value={formData.panNumber}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter PAN number"
                              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                              maxLength={10}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="aadhaarNumber" className="form-label">
                              Aadhaar Number
                            </label>
                            <input
                              type="text"
                              id="aadhaarNumber"
                              name="aadhaarNumber"
                              value={formData.aadhaarNumber}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter 12-digit Aadhaar"
                              pattern="[0-9]{12}"
                              maxLength={12}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Employment & Income */}
                  {step === 3 && (
                    <div className="form-step">
                      <div className="form-section">
                        <h4 className="section-title">Employment Details</h4>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="employmentType" className="form-label">
                              Employment Type *
                            </label>
                            <select
                              id="employmentType"
                              name="employmentType"
                              value={formData.employmentType}
                              onChange={handleChange}
                              required
                              className="form-control"
                            >
                              <option value="">Select Employment Type</option>
                              {employmentTypes.map((type) => (
                                <option key={type} value={type.toLowerCase()}>
                                  {type}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="monthlyIncome" className="form-label">
                              Monthly Income ($) *
                            </label>
                            <div className="input-with-prefix">
                              <span className="input-prefix">$</span>
                              <input
                                type="number"
                                id="monthlyIncome"
                                name="monthlyIncome"
                                value={formData.monthlyIncome}
                                onChange={handleChange}
                                required
                                min="15000"
                                step="5000"
                                className="form-control"
                                placeholder="Enter monthly income"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="companyName" className="form-label">
                              Company/Business Name *
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter company name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="designation" className="form-label">
                              Designation/Profession
                            </label>
                            <input
                              type="text"
                              id="designation"
                              name="designation"
                              value={formData.designation}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter your designation"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="workExperience" className="form-label">
                            Total Work Experience (Years)
                          </label>
                          <input
                            type="number"
                            id="workExperience"
                            name="workExperience"
                            value={formData.workExperience}
                            onChange={handleChange}
                            min="0"
                            max="50"
                            className="form-control"
                            placeholder="Enter years of experience"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Address Details */}
                  {step === 4 && (
                    <div className="form-step">
                      <div className="form-section">
                        <h4 className="section-title">Current Address</h4>
                        <div className="form-group">
                          <label htmlFor="address" className="form-label">
                            Complete Address *
                          </label>
                          <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            rows={3}
                            className="form-control"
                            placeholder="Enter your complete address"
                          />
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="city" className="form-label">
                              City *
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter city"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="state" className="form-label">
                              State *
                            </label>
                            <select
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              required
                              className="form-control"
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="pincode" className="form-label">
                              PIN Code *
                            </label>
                            <input
                              type="text"
                              id="pincode"
                              name="pincode"
                              value={formData.pincode}
                              onChange={handleChange}
                              required
                              className="form-control"
                              placeholder="Enter 6-digit PIN code"
                              pattern="[0-9]{6}"
                              maxLength={6}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="residenceType" className="form-label">
                              Residence Type
                            </label>
                            <select
                              id="residenceType"
                              name="residenceType"
                              value={formData.residenceType}
                              onChange={handleChange}
                              className="form-control"
                            >
                              <option value="">Select Residence Type</option>
                              <option value="owned">Owned</option>
                              <option value="rented">Rented</option>
                              <option value="parents">Living with Parents</option>
                              <option value="company">Company Provided</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="yearsAtCurrentAddress" className="form-label">
                            Years at Current Address
                          </label>
                          <input
                            type="number"
                            id="yearsAtCurrentAddress"
                            name="yearsAtCurrentAddress"
                            value={formData.yearsAtCurrentAddress}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="form-control"
                            placeholder="Enter number of years"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Document Upload */}
                  {step === 5 && (
                    <div className="form-step">
                      <div className="form-section">
                        <h4 className="section-title">Upload Required Documents</h4>
                        <p className="section-subtitle">
                          Please upload clear scanned copies of the following documents
                        </p>

                        <div className="document-upload-grid">
                          <div className="document-upload">
                            <div className="document-info">
                              <div className="document-icon">📄</div>
                              <div className="document-details">
                                <h5>PAN Card</h5>
                                <p>Clear scanned copy (PDF/JPEG/PNG)</p>
                              </div>
                            </div>
                            <input
                              type="file"
                              id="panCard"
                              name="panCard"
                              onChange={handleFileChange}
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="document-input"
                            />
                            <label htmlFor="panCard" className="upload-btn">
                              Choose File
                            </label>
                          </div>

                          <div className="document-upload">
                            <div className="document-info">
                              <div className="document-icon">🪪</div>
                              <div className="document-details">
                                <h5>Aadhaar Card</h5>
                                <p>Front & Back (PDF/JPEG/PNG)</p>
                              </div>
                            </div>
                            <input
                              type="file"
                              id="aadhaarCard"
                              name="aadhaarCard"
                              onChange={handleFileChange}
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="document-input"
                            />
                            <label htmlFor="aadhaarCard" className="upload-btn">
                              Choose File
                            </label>
                          </div>

                          <div className="document-upload">
                            <div className="document-info">
                              <div className="document-icon">🏦</div>
                              <div className="document-details">
                                <h5>Bank Statement</h5>
                                <p>Last 6 months (PDF)</p>
                              </div>
                            </div>
                            <input
                              type="file"
                              id="bankStatement"
                              name="bankStatement"
                              onChange={handleFileChange}
                              accept=".pdf"
                              className="document-input"
                            />
                            <label htmlFor="bankStatement" className="upload-btn">
                              Choose File
                            </label>
                          </div>

                          <div className="document-upload">
                            <div className="document-info">
                              <div className="document-icon">💰</div>
                              <div className="document-details">
                                <h5>Salary Slips</h5>
                                <p>Last 3 months (PDF/JPEG/PNG)</p>
                              </div>
                            </div>
                            <input
                              type="file"
                              id="salarySlips"
                              name="salarySlips"
                              onChange={handleFileChange}
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="document-input"
                            />
                            <label htmlFor="salarySlips" className="upload-btn">
                              Choose File
                            </label>
                          </div>

                          <div className="document-upload">
                            <div className="document-info">
                              <div className="document-icon">🏠</div>
                              <div className="document-details">
                                <h5>Address Proof</h5>
                                <p>Utility bill/Passport (PDF/JPEG/PNG)</p>
                              </div>
                            </div>
                            <input
                              type="file"
                              id="addressProof"
                              name="addressProof"
                              onChange={handleFileChange}
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="document-input"
                            />
                            <label htmlFor="addressProof" className="upload-btn">
                              Choose File
                            </label>
                          </div>
                        </div>

                        <div className="document-note">
                          <p>💡 <strong>Note:</strong> Maximum file size: 5MB per document. Supported formats: PDF, JPEG, PNG</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submissionError && (
                    <div className="error-message">
                      {submissionError}
                    </div>
                  )}

                  {/* Form Navigation */}
                  <div className="form-navigation">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="nav-btn nav-btn--prev"
                      >
                        ← Previous Step
                      </button>
                    )}
                    
                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="nav-btn nav-btn--next"
                        disabled={!validateStep(step)}
                      >
                        Next Step →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    )}
                  </div>
                </form>

                {/* Application Tips */}
                <div className="application-tips">
                  <h4 className="tips-title">📋 Application Tips</h4>
                  <ul className="tips-list">
                    <li>Ensure all information matches your official documents</li>
                    <li>Keep your PAN card, Aadhaar card, and bank statements ready</li>
                    <li>Double-check your contact details for accurate communication</li>
                    <li>Upload clear, readable copies of all documents</li>
                    <li>Our representative will contact you within 24 hours of submission</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Features */}
      <section className="loan-features section-space" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sec-title">
                <h3 className="sec-title__title">Why Apply With Us?</h3>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { icon: '⚡', title: 'Quick Approval', desc: 'Get loan approval within 24 hours' },
              { icon: '💰', title: 'Low Interest Rates', desc: 'Competitive rates starting from 10.5%' },
              { icon: '📄', title: 'Minimal Paperwork', desc: 'Simple online process with e-signature' },
              { icon: '🔄', title: 'Flexible Repayment', desc: 'Choose tenure from 1 to 5 years' },
              { icon: '🛡️', title: 'Safe & Secure', desc: 'Bank-level encryption for your data' },
              { icon: '📞', title: 'Dedicated Support', desc: '24/7 customer support available' }
            ].map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="help-section section-space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="help-content">
                <h3 className="help-title">Need Help With Your Application?</h3>
                <p className="help-text">
                  Our loan experts are available to guide you through the application process.
                  Get personalized assistance and answers to all your questions.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="help-buttons">
                <a href="tel:+9156980036420" className="easilon-btn easilon-btn--border">
                  <span>Call Now</span>
                  <span className="easilon-btn__icon">📞</span>
                </a>
                <Link href="/contact" className="easilon-btn">
                  <span>Contact Us</span>
                  <span className="easilon-btn__icon">✉️</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS Styles */}
      <style jsx global>{`
        /* ============================================
           APPLY LOAN PAGE STYLES
        ============================================= */

        /* Application Progress */
        .application-progress {
          padding: 50px 0;
          background: #f8f9fa;
          border-bottom: 1px solid #eee;
        }

        .progress-steps {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .progress-steps {
            gap: 10px;
          }
        }

        .progress-step {
          display: flex;
          align-items: center;
          position: relative;
        }

        .step-number {
          width: 40px;
          height: 40px;
          border: 2px solid #ddd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #999;
          background: white;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .step-number.active {
          border-color: #E45551;
          background: #E45551;
          color: white;
        }

        .step-label {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-size: 12px;
          color: #666;
          font-weight: 500;
        }

        .step-connector {
          width: 80px;
          height: 2px;
          background: #ddd;
          margin: 0 10px;
        }

        @media (max-width: 768px) {
          .step-connector {
            width: 40px;
          }
        }

        .step-connector.active {
          background: #E45551;
        }

        /* Application Form */
        .application-form-wrapper {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .form-header {
          padding: 40px 40px 20px;
          border-bottom: 1px solid #eee;
        }

        .form-title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
        }

        .form-subtitle {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        .loan-application-form {
          padding: 40px;
        }

        @media (max-width: 768px) {
          .loan-application-form {
            padding: 20px;
          }
        }

        .form-step {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .form-section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }

        .section-subtitle {
          color: #666;
          font-size: 14px;
          margin-bottom: 20px;
        }

        /* Loan Types Grid */
        .loan-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }

        @media (max-width: 480px) {
          .loan-types-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .loan-type-card {
          background: white;
          border: 2px solid #eee;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .loan-type-card:hover {
          border-color: #E45551;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(228, 85, 81, 0.1);
        }

        .loan-type-card.selected {
          border-color: #E45551;
          background: linear-gradient(135deg, #E45551 0%, #ff7a7a 100%);
          color: white;
        }

        .loan-type-card.selected .loan-type-name,
        .loan-type-card.selected .loan-amount-range {
          color: white;
        }

        .loan-type-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .loan-type-name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
          transition: color 0.3s ease;
        }

        .loan-amount-range {
          font-size: 12px;
          color: #666;
          margin: 0;
          transition: color 0.3s ease;
        }

        /* Form Elements */
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .form-control {
          width: 100%;
          padding: 12px 16px;
          font-size: 14px;
          color: #333;
          background: #fff;
          border: 2px solid #eee;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: #E45551;
          box-shadow: 0 0 0 3px rgba(228, 85, 81, 0.1);
        }

        .form-control::placeholder {
          color: #999;
        }

        .input-with-prefix {
          position: relative;
        }

        .input-prefix {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          font-weight: 600;
          color: #666;
        }

        .input-with-prefix .form-control {
          padding-left: 40px;
        }

        .input-hint {
          font-size: 12px;
          color: #666;
          margin-top: 5px;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
        }

        /* EMI Calculator */
        .emi-calculator {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 25px;
          margin-top: 30px;
        }

        .emi-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .emi-item {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .emi-label {
          display: block;
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .emi-value {
          font-size: 24px;
          font-weight: 700;
          color: #E45551;
          font-family: 'Poppins', sans-serif;
        }

        .emi-note {
          font-size: 12px;
          color: #999;
          text-align: center;
          margin: 10px 0 0;
          font-style: italic;
        }

        /* Document Upload */
        .document-upload-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        @media (max-width: 480px) {
          .document-upload-grid {
            grid-template-columns: 1fr;
          }
        }

        .document-upload {
          background: #f8f9fa;
          border: 2px dashed #ddd;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .document-upload:hover {
          border-color: #E45551;
          background: #fff5f5;
        }

        .document-info {
          display: flex;
          align-items: center;
          gap: 15px;
          width: 100%;
        }

        .document-icon {
          font-size: 24px;
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .document-details h5 {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
        }

        .document-details p {
          font-size: 12px;
          color: #666;
          margin: 0;
        }

        .document-input {
          display: none;
        }

        .upload-btn {
          background: #E45551;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          width: 100%;
          border: none;
        }

        .upload-btn:hover {
          background: #d44c48;
          transform: translateY(-2px);
        }

        .document-note {
          background: #e3f2fd;
          border-left: 4px solid #2196f3;
          padding: 15px;
          border-radius: 0 8px 8px 0;
          margin-top: 20px;
        }

        .document-note p {
          margin: 0;
          font-size: 14px;
          color: #1565c0;
        }

        /* Form Navigation */
        .form-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .nav-btn {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-btn--prev {
          background: #f8f9fa;
          color: #666;
        }

        .nav-btn--prev:hover {
          background: #e9ecef;
          color: #333;
        }

        .nav-btn--next {
          background: #E45551;
          color: white;
        }

        .nav-btn--next:hover:not(:disabled) {
          background: #d44c48;
          transform: translateY(-2px);
        }

        .nav-btn--next:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .submit-btn {
          background: linear-gradient(135deg, #E45551 0%, #ff7a7a 100%);
          color: white;
          padding: 15px 40px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: auto;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(228, 85, 81, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Error Message */
        .error-message {
          background: #ffebee;
          color: #c62828;
          padding: 15px;
          border-radius: 8px;
          margin: 20px 0;
          font-size: 14px;
          text-align: center;
          border-left: 4px solid #c62828;
        }

        /* Application Tips */
        .application-tips {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border-radius: 15px;
          padding: 30px;
          margin-top: 40px;
        }

        .tips-title {
          font-size: 18px;
          font-weight: 700;
          color: #1565c0;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .tips-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tips-list li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
          font-size: 14px;
          color: #333;
        }

        .tips-list li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #E45551;
          font-weight: bold;
        }

        /* Loan Features */
        .loan-features {
          padding: 80px 0;
        }

        .sec-title {
          margin-bottom: 50px;
        }

        .sec-title__title {
          font-size: 32px;
          font-weight: 700;
          color: #333;
          font-family: 'Poppins', sans-serif;
        }

        .feature-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .feature-title {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
        }

        .feature-desc {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        /* Help Section */
        .help-section {
          background: linear-gradient(135deg, #333 0%, #555 100%);
          color: white;
          padding: 60px 0;
        }

        .help-content {
          margin-bottom: 20px;
        }

        @media (min-width: 992px) {
          .help-content {
            margin-bottom: 0;
          }
        }

        .help-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .help-text {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .help-buttons {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .help-buttons {
            justify-content: flex-start;
          }
        }

        .easilon-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: #E45551;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid #E45551;
        }

        .easilon-btn:hover {
          background: transparent;
          color: white;
          transform: translateY(-2px);
        }

        .easilon-btn--border {
          background: transparent;
          border: 2px solid white;
        }

        .easilon-btn--border:hover {
          background: white;
          color: #333;
        }

        .easilon-btn__icon {
          font-size: 16px;
        }

        /* Utility Classes */
        .section-space {
          padding: 60px 0;
        }

        @media (max-width: 768px) {
          .section-space {
            padding: 40px 0;
          }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .form-header {
            padding: 30px 20px 15px;
          }
          
          .form-title {
            font-size: 24px;
          }
          
          .loan-types-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .emi-details {
            grid-template-columns: 1fr;
          }
          
          .feature-card {
            padding: 20px;
          }
          
          .sec-title__title {
            font-size: 28px;
          }
          
          .help-buttons {
            flex-direction: column;
          }
          
          .easilon-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .loan-types-grid {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .nav-btn {
            width: 100%;
            justify-content: center;
          }
          
          .form-navigation {
            flex-direction: column;
            gap: 10px;
          }
          
          .form-navigation > * {
            width: 100%;
          }
        }

        /* Form Validation Styles */
        .form-control:invalid {
          border-color: #ff6b6b;
        }

        .form-control:valid {
          border-color: #51cf66;
        }

        /* Loading Animation */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .submit-btn:disabled:after {
          content: '';
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}