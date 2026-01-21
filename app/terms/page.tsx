'use client';

import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function TermsConditionsPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    arbitration: true,
    service: true,
    sharing: true,
    credit: true,
    disclaimers: true,
    liability: true,
    arbitrationDetail: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="terms-page">
      <PageHeader 
        title="Terms and Conditions"
        subtitle="Please read these terms carefully before using our services"
      />
      
      <div className="page-content">
        {/* Important Notice Section */}
        <section className="notice-section">
          <div className="container">
            <div className="notice-card">
              <div className="notice-header">
                <div className="notice-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 9V11M12 15H12.01M5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="notice-title">
                  <h3>IMPORTANT NOTICE REGARDING ARBITRATION</h3>
                  <p className="notice-subtitle">
                    PLEASE READ THESE TERMS CAREFULLY
                  </p>
                </div>
              </div>
              <div className="notice-content">
                <p>
                  They include a binding arbitration agreement, a class-action waiver, and limitations on your legal 
                  rights. By using the Service, you agree that disputes will be resolved individually through 
                  arbitration, not in court, and not as part of a class action.
                </p>
                <button 
                  className="read-more-btn"
                  onClick={() => toggleSection('arbitration')}
                >
                  Read Arbitration Details
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className={expandedSections.arbitration ? 'expanded' : ''}
                  >
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {expandedSections.arbitration && (
                  <div className="expanded-content">
                    <div className="content-card">
                      <h4>Binding Arbitration Agreement</h4>
                      <ul>
                        <li>Disputes resolved through arbitration, not court</li>
                        <li>No class action lawsuits</li>
                        <li>Individual claims only</li>
                        <li>Administered by American Arbitration Association (AAA)</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Header Info */}
        <section className="header-section">
          <div className="container">
            <div className="header-info">
              <div className="effective-date">
                <div className="date-card">
                  <span className="date-label">Effective Date</span>
                  <span className="date-value">January 06, 2026</span>
                </div>
                <div className="date-card">
                  <span className="date-label">Last Updated</span>
                  <span className="date-value">January 06, 2026</span>
                </div>
              </div>
              
              <div className="company-info">
                <h2>Speed Loan Center</h2>
                <p className="website">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  www.speedloancenter.com
                </p>
                <p className="description">
                  Speed Loan Center provides loan referral and lead-generation services through our website and related applications.
                </p>
              </div>
            </div>

            <div className="acceptance-box">
              <div className="acceptance-content">
                <div className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Acceptance of Terms</h4>
                  <p>
                    By accessing, browsing, or using any part of the Service, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms and Conditions of Use. If you do not agree to 
                    these Terms, you must not use the Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="terms-content">
          <div className="container">
            <div className="terms-grid">
              {/* Term 1 */}
              <div className="term-card">
                <div className="term-number">1</div>
                <div className="term-content">
                  <h3>Loan Referral & Lead Generation Service</h3>
                  <p>
                    Speed Loan Center operates an online loan referral and lead-distribution platform that connects 
                    consumers with third-party lenders, lender networks, and financial service providers ("Lender Partners").
                  </p>
                  
                  <div className="info-box">
                    <h4>Required Information:</h4>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="info-icon">👤</span>
                        <span>Name & Contact Info</span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">🏠</span>
                        <span>Address</span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">💼</span>
                        <span>Employment Details</span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">💰</span>
                        <span>Income Information</span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">🏦</span>
                        <span>Banking Details</span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">🔒</span>
                        <span>Social Security Number*</span>
                      </div>
                    </div>
                    <p className="note">*Where required by lenders</p>
                  </div>
                </div>
              </div>

              {/* Term 2 */}
              <div className="term-card">
                <div className="term-number">2</div>
                <div className="term-content">
                  <h3>No Lending or Credit Decisions</h3>
                  <p>
                    Speed Loan Center is not a lender, does not issue loans, and does not make credit decisions.
                  </p>
                  
                  <div className="disclaimer-box">
                    <div className="disclaimer-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4>We do not guarantee:</h4>
                      <ul>
                        <li>That you will receive a loan offer</li>
                        <li>That you will be matched with a lender</li>
                        <li>Any specific loan amount, rate, fee, or term</li>
                      </ul>
                      <p className="emphasis">
                        All lending decisions are made solely by Lender Partners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Term 3 */}
              <div className="term-card">
                <div className="term-number">3</div>
                <div className="term-content">
                  <h3>Information Sharing & Contact Consent</h3>
                  <p>
                    By submitting a Request Form, you authorize Speed Loan Center to share your information 
                    with multiple Lender Partners.
                  </p>
                  
                  <div className="consent-box">
                    <h4>You acknowledge that:</h4>
                    <ul>
                      <li>You are requesting loan offers from third parties</li>
                      <li>Speed Loan Center and Lender Partners may contact you via:</li>
                    </ul>
                    
                    <div className="contact-methods">
                      <div className="method">
                        <span className="method-icon">📞</span>
                        <span>Phone calls</span>
                      </div>
                      <div className="method">
                        <span className="method-icon">💬</span>
                        <span>Text messages (SMS)</span>
                      </div>
                      <div className="method">
                        <span className="method-icon">📧</span>
                        <span>Emails</span>
                      </div>
                      <div className="method">
                        <span className="method-icon">🤖</span>
                        <span>Automated systems*</span>
                      </div>
                    </div>
                    <p className="note">*Where permitted by law</p>
                    <p className="consent-note">
                      Consent is not required to purchase goods or services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Term 4 */}
              <div className="term-card">
                <div className="term-number">4</div>
                <div className="term-content">
                  <h3>Credit Checks</h3>
                  <p>
                    Lender Partners may review your information in real time and may perform credit checks.
                  </p>
                  
                  <div className="credit-check-types">
                    <div className="credit-type soft">
                      <div className="type-header">
                        <div className="type-icon">🔍</div>
                        <h4>Soft Credit Check</h4>
                      </div>
                      <p>Does not affect your credit score</p>
                    </div>
                    
                    <div className="credit-type hard">
                      <div className="type-header">
                        <div className="type-icon">📊</div>
                        <h4>Hard Credit Inquiry</h4>
                      </div>
                      <p>May affect your credit score</p>
                    </div>
                  </div>
                  
                  <div className="credit-bureaus">
                    <h4>Credit checks may be conducted through:</h4>
                    <div className="bureau-grid">
                      <div className="bureau">Experian</div>
                      <div className="bureau">Equifax</div>
                      <div className="bureau">TransUnion</div>
                    </div>
                    <p className="note">Alternative credit bureaus or data providers may also be used.</p>
                  </div>
                  
                  <div className="authorization-box">
                    <div className="auth-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15V17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <p>
                      By submitting a Request Form, you authorize such credit reviews.
                    </p>
                  </div>
                </div>
              </div>

              {/* Term 5 */}
              <div className="term-card">
                <div className="term-number">5</div>
                <div className="term-content">
                  <h3>Redirection to Lender Websites</h3>
                  <p>
                    If a Lender Partner determines that your information meets its criteria, you may be redirected 
                    to the lender's website.
                  </p>
                  
                  <div className="redirect-flow">
                    <div className="flow-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>You Get Redirected</h4>
                        <p>To the lender's website for further processing</p>
                      </div>
                    </div>
                    
                    <div className="flow-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Speed Loan Center Steps Back</h4>
                        <p>We are no longer involved in the process</p>
                      </div>
                    </div>
                    
                    <div className="flow-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Lender's Terms Apply</h4>
                        <p>Their terms and privacy policies govern your interaction</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="responsibility-note">
                    <p>
                      <strong>Note:</strong> Speed Loan Center is not responsible for lender actions or decisions once you are redirected.
                    </p>
                  </div>
                </div>
              </div>

              {/* Term 6 */}
              <div className="term-card">
                <div className="term-number">6</div>
                <div className="term-content">
                  <h3>Electronic Disclosures & E-Sign Consent</h3>
                  <p>
                    By using the Service, you consent to receive electronic communications.
                  </p>
                  
                  <div className="e-consent-box">
                    <div className="e-consent-item">
                      <div className="e-icon">📄</div>
                      <div>
                        <h4>Electronic Documents</h4>
                        <p>Disclosures, notices, agreements, and communications</p>
                      </div>
                    </div>
                    
                    <div className="e-consent-item">
                      <div className="e-icon">✍️</div>
                      <div>
                        <h4>Electronic Signatures</h4>
                        <p>Legally binding and equivalent to handwritten signatures</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="withdrawal-note">
                    <div className="warning-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 9V11M12 15H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p>
                        You may withdraw electronic consent directly with the lender, though doing so may 
                        affect your ability to obtain a loan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Term 7 */}
              <div className="term-card">
                <div className="term-number">7</div>
                <div className="term-content">
                  <h3>Accuracy of Information</h3>
                  <p>
                    You represent that all information you submit is accurate, current, and truthful.
                  </p>
                  
                  <div className="consequences-box">
                    <h4>Providing false or misleading information may result in:</h4>
                    <div className="consequences-list">
                      <div className="consequence-item negative">
                        <div className="consequence-icon">❌</div>
                        <span>Rejection of your request</span>
                      </div>
                      <div className="consequence-item negative">
                        <div className="consequence-icon">⛔</div>
                        <span>Suspension of access to the Service</span>
                      </div>
                      <div className="consequence-item negative">
                        <div className="consequence-icon">🚫</div>
                        <span>Termination of your account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Term 8-16 Container */}
              <div className="terms-container">
                {/* Term 8 */}
                <div className="term-compact">
                  <div className="compact-number">8</div>
                  <div className="compact-content">
                    <h4>Changes to the Service</h4>
                    <p>
                      Speed Loan Center may modify, suspend, or discontinue any part of the Service at any time 
                      without notice. We are not responsible for delays or failures caused by incorrect user 
                      information or system issues beyond our control.
                    </p>
                  </div>
                </div>

                {/* Term 9 */}
                <div className="term-compact">
                  <div className="compact-number">9</div>
                  <div className="compact-content">
                    <h4>Disclaimers</h4>
                    <p>
                      THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." Speed Loan Center DISCLAIMS ALL 
                      WARRANTIES, EXPRESS OR IMPLIED. USE OF THE SERVICE IS AT YOUR OWN RISK.
                    </p>
                  </div>
                </div>

                {/* Term 10 */}
                <div className="term-compact">
                  <div className="compact-number">10</div>
                  <div className="compact-content">
                    <h4>Limitation of Liability</h4>
                    <p>
                      To the maximum extent permitted by law, Speed Loan Center is not liable for indirect or 
                      consequential damages, credit decisions, loss of data, or unauthorized access beyond 
                      reasonable security measures.
                    </p>
                  </div>
                </div>

                {/* Term 11 */}
                <div className="term-compact">
                  <div className="compact-number">11</div>
                  <div className="compact-content">
                    <h4>Indemnification</h4>
                    <p>
                      You agree to indemnify and hold harmless Speed Loan Center from any claims arising from 
                      your use of the Service or violation of these Terms.
                    </p>
                  </div>
                </div>

                {/* Term 12 */}
                <div className="term-compact">
                  <div className="compact-number">12</div>
                  <div className="compact-content">
                    <h4>Third-Party Links</h4>
                    <p>
                      The Service may include links to third-party websites. Speed Loan Center does not control 
                      or endorse third-party content or services.
                    </p>
                  </div>
                </div>

                {/* Term 13 */}
                <div className="term-compact">
                  <div className="compact-number">13</div>
                  <div className="compact-content">
                    <h4>Binding Arbitration & Class Action Waiver</h4>
                    <p>
                      Any dispute shall be resolved exclusively through binding arbitration, governed by the 
                      Federal Arbitration Act, administered by AAA. No class actions or representative claims.
                    </p>
                  </div>
                </div>

                {/* Term 14 */}
                <div className="term-compact">
                  <div className="compact-number">14</div>
                  <div className="compact-content">
                    <h4>Governing Law</h4>
                    <p>
                      These Terms are governed by the laws of the United States and the applicable state, 
                      without regard to conflict-of-law principles.
                    </p>
                  </div>
                </div>

                {/* Term 15 */}
                <div className="term-compact">
                  <div className="compact-number">15</div>
                  <div className="compact-content">
                    <h4>Changes to These Terms</h4>
                    <p>
                      We may update these Terms at any time by posting changes on the Site. Continued use of 
                      the Service constitutes acceptance of the revised Terms.
                    </p>
                  </div>
                </div>

                {/* Term 16 */}
                <div className="term-compact">
                  <div className="compact-number">16</div>
                  <div className="compact-content">
                    <h4>Contact Information</h4>
                    <div className="contact-details">
                      <div className="contact-item">
                        <span className="contact-label">Website:</span>
                        <span className="contact-value">www.speedloancenter.com</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Email:</span>
                        <span className="contact-value">contact@speedloancenter.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="footer-section">
          <div className="container">
            <div className="footer-content">
              <div className="footer-text">
                <h3>Need Help Understanding Our Terms?</h3>
                <p>
                  If you have questions about these Terms and Conditions, please contact us before using our services.
                </p>
              </div>
              <div className="footer-actions">
                <a href="/contact" className="footer-btn">
                  Contact Us
                </a>
                <a href="/faq" className="footer-btn outline">
                  Read FAQ
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .terms-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .page-content {
          padding-bottom: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Notice Section */
        .notice-section {
          padding: 40px 0;
        }

        .notice-card {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border: 2px solid #fecaca;
          border-radius: 16px;
          padding: 30px;
          position: relative;
          overflow: hidden;
        }

        .notice-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #dc2626;
        }

        .notice-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
        }

        .notice-icon {
          color: #dc2626;
          flex-shrink: 0;
        }

        .notice-title h3 {
          margin: 0 0 8px 0;
          color: #7f1d1d;
          font-size: 20px;
          font-weight: 700;
        }

        .notice-subtitle {
          margin: 0;
          color: #991b1b;
          font-weight: 600;
          font-size: 16px;
        }

        .notice-content p {
          color: #7f1d1d;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #dc2626;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-size: 15px;
          transition: gap 0.3s ease;
        }

        .read-more-btn:hover {
          gap: 12px;
        }

        .read-more-btn svg.expanded {
          transform: rotate(180deg);
        }

        .expanded-content {
          margin-top: 20px;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .content-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #fecaca;
        }

        .content-card h4 {
          margin: 0 0 12px 0;
          color: #7f1d1d;
        }

        .content-card ul {
          margin: 0;
          padding-left: 20px;
          color: #7f1d1d;
        }

        .content-card li {
          margin-bottom: 8px;
        }

        /* Header Section */
        .header-section {
          padding: 40px 0;
        }

        .header-info {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .effective-date {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .date-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          border: 2px solid #e2e8f0;
          text-align: center;
        }

        .date-label {
          display: block;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .date-value {
          display: block;
          color: #1e293b;
          font-size: 18px;
          font-weight: 700;
        }

        .company-info h2 {
          margin: 0 0 12px 0;
          color: #1e293b;
          font-size: 32px;
          font-weight: 700;
        }

        .website {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0ea5e9;
          font-weight: 600;
          margin: 0 0 16px 0;
        }

        .description {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .acceptance-box {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 2px solid #bae6fd;
          border-radius: 16px;
          padding: 30px;
        }

        .acceptance-content {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .check-icon {
          color: #0ea5e9;
          flex-shrink: 0;
        }

        .acceptance-content h4 {
          margin: 0 0 12px 0;
          color: #0369a1;
          font-size: 18px;
        }

        .acceptance-content p {
          margin: 0;
          color: #0c4a6e;
          line-height: 1.6;
        }

        /* Terms Content */
        .terms-content {
          padding: 40px 0;
        }

        .terms-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .term-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .term-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .term-number {
          position: absolute;
          top: -20px;
          left: 40px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
        }

        .term-content h3 {
          margin: 0 0 20px 0;
          color: #1e293b;
          font-size: 24px;
          font-weight: 700;
        }

        .term-content > p {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* Info Box */
        .info-box {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .info-box h4 {
          margin: 0 0 16px 0;
          color: #1e293b;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 12px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #475569;
        }

        .info-icon {
          font-size: 20px;
        }

        .note {
          margin: 0;
          font-size: 14px;
          color: #64748b;
          font-style: italic;
        }

        /* Disclaimer Box */
        .disclaimer-box {
          background: #fef3c7;
          border: 1px solid #fde047;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .disclaimer-icon {
          color: #d97706;
          flex-shrink: 0;
        }

        .disclaimer-box h4 {
          margin: 0 0 12px 0;
          color: #92400e;
        }

        .disclaimer-box ul {
          margin: 0 0 12px 0;
          padding-left: 20px;
          color: #92400e;
        }

        .disclaimer-box li {
          margin-bottom: 8px;
        }

        .emphasis {
          margin: 0;
          color: #92400e;
          font-weight: 600;
        }

        /* Consent Box */
        .consent-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 12px;
          padding: 24px;
        }

        .consent-box h4 {
          margin: 0 0 16px 0;
          color: #166534;
        }

        .consent-box ul {
          margin: 0 0 20px 0;
          padding-left: 20px;
          color: #166534;
        }

        .consent-box li {
          margin-bottom: 8px;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 16px;
          margin: 20px 0;
        }

        .method {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #166534;
        }

        .method-icon {
          font-size: 20px;
        }

        .consent-note {
          margin: 16px 0 0 0;
          color: #166534;
          font-size: 14px;
          font-style: italic;
        }

        /* Credit Check Types */
        .credit-check-types {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin: 24px 0;
        }

        .credit-type {
          padding: 20px;
          border-radius: 12px;
          border: 2px solid;
        }

        .credit-type.soft {
          border-color: #bae6fd;
          background: #f0f9ff;
        }

        .credit-type.hard {
          border-color: #fecaca;
          background: #fef2f2;
        }

        .type-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .type-icon {
          font-size: 24px;
        }

        .credit-type h4 {
          margin: 0;
          font-size: 16px;
        }

        .credit-type p {
          margin: 0;
          font-size: 14px;
          color: #475569;
        }

        .credit-bureaus {
          margin: 24px 0;
        }

        .credit-bureaus h4 {
          margin: 0 0 16px 0;
          color: #1e293b;
        }

        .bureau-grid {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .bureau {
          padding: 8px 16px;
          background: #f1f5f9;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
        }

        .authorization-box {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          border: 1px solid #e2e8f0;
        }

        .auth-icon {
          color: #475569;
          flex-shrink: 0;
        }

        .authorization-box p {
          margin: 0;
          color: #475569;
        }

        /* Redirect Flow */
        .redirect-flow {
          margin: 24px 0;
        }

        .flow-step {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          align-items: flex-start;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: #0ea5e9;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .step-content h4 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 16px;
        }

        .step-content p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .responsibility-note {
          background: #fef3c7;
          border: 1px solid #fde047;
          border-radius: 12px;
          padding: 16px;
          color: #92400e;
        }

        /* E-Consent Box */
        .e-consent-box {
          margin: 24px 0;
        }

        .e-consent-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .e-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .e-consent-item h4 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 16px;
        }

        .e-consent-item p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .withdrawal-note {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .warning-icon {
          color: #dc2626;
          flex-shrink: 0;
        }

        .withdrawal-note p {
          margin: 0;
          color: #7f1d1d;
        }

        /* Consequences Box */
        .consequences-box {
          margin: 24px 0 0 0;
        }

        .consequences-box h4 {
          margin: 0 0 16px 0;
          color: #1e293b;
        }

        .consequences-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .consequence-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
        }

        .consequence-item.negative {
          background: #fef2f2;
          color: #dc2626;
        }

        .consequence-icon {
          font-size: 20px;
        }

        /* Compact Terms */
        .terms-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .term-compact {
          background: white;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          position: relative;
          transition: all 0.3s ease;
        }

        .term-compact:hover {
          border-color: #0ea5e9;
          box-shadow: 0 4px 16px rgba(14, 165, 233, 0.1);
        }

        .compact-number {
          position: absolute;
          top: -12px;
          left: 24px;
          width: 24px;
          height: 24px;
          background: #0ea5e9;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
        }

        .compact-content h4 {
          margin: 0 0 12px 0;
          color: #1e293b;
          font-size: 16px;
          font-weight: 600;
        }

        .compact-content p {
          margin: 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-details {
          margin-top: 12px;
        }

        .contact-item {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .contact-label {
          font-weight: 600;
          color: #1e293b;
          min-width: 60px;
        }

        .contact-value {
          color: #0ea5e9;
          font-weight: 500;
        }

        /* Footer Section */
        .footer-section {
          padding: 80px 0 0 0;
        }

        .footer-content {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 16px;
          padding: 50px;
          text-align: center;
          color: white;
        }

        .footer-text h3 {
          margin: 0 0 16px 0;
          font-size: 28px;
          font-weight: 700;
        }

        .footer-text p {
          margin: 0 0 32px 0;
          color: #cbd5e1;
          font-size: 18px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .footer-btn {
          padding: 14px 32px;
          background: #0ea5e9;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .footer-btn:hover {
          background: #0284c7;
          transform: translateY(-2px);
        }

        .footer-btn.outline {
          background: transparent;
          border: 2px solid #0ea5e9;
        }

        .footer-btn.outline:hover {
          background: #0ea5e9;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .header-info {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .credit-check-types {
            grid-template-columns: 1fr;
          }

          .terms-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .notice-card,
          .term-card {
            padding: 24px;
          }

          .term-number {
            left: 24px;
          }

          .header-info {
            gap: 24px;
          }

          .company-info h2 {
            font-size: 28px;
          }

          .acceptance-content {
            flex-direction: column;
            gap: 16px;
          }

          .info-grid {
            grid-template-columns: 1fr 1fr;
          }

          .contact-methods {
            grid-template-columns: 1fr 1fr;
          }

          .footer-content {
            padding: 40px 24px;
          }

          .footer-actions {
            flex-direction: column;
            align-items: center;
          }

          .footer-btn {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .info-grid {
            grid-template-columns: 1fr;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }

          .flow-step {
            flex-direction: column;
            gap: 8px;
          }

          .step-number {
            align-self: flex-start;
          }

          .e-consent-item {
            flex-direction: column;
            gap: 8px;
          }

          .footer-text h3 {
            font-size: 24px;
          }

          .footer-text p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}