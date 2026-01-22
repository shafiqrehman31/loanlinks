'use client';

import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function PrivacyPolicyPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    role: true,
    collection: true,
    pingTree: true,
    usage: true,
    sharing: true,
    tCPA: true,
    rights: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="privacy-page">
      <PageHeader title="Privacy Policy" />
      
      <div className="page-content">
        {/* Subtitle Section */}
        <div className="page-subtitle">
          <div className="container">
            <p className="subtitle-text">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>

        {/* Important Notice Section */}
        <section className="notice-section">
          <div className="container">
            <div className="notice-card">
              <div className="notice-header">
                <div className="notice-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0ea5e9" strokeWidth="2"/>
                    <path d="M12 16V12" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8H12.01" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="notice-title">
                  <h3>IMPORTANT PRIVACY DISCLOSURE</h3>
                  <p className="notice-subtitle">
                    Your information may be shared with multiple lenders and financial partners
                  </p>
                </div>
              </div>
              <div className="notice-content">
                <p>
                  By using our service, you acknowledge that your personal information may be shared 
                  with third-party lenders and financial service providers. We operate a lead-generation 
                  platform that connects consumers with potential lenders.
                </p>
                <button 
                  className="read-more-btn"
                  onClick={() => toggleSection('role')}
                >
                  Understand Our Role
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className={expandedSections.role ? 'expanded' : ''}
                  >
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {expandedSections.role && (
                  <div className="expanded-content">
                    <div className="content-card">
                      <h4>Key Privacy Points</h4>
                      <ul>
                        <li>We are not a lender and do not make credit decisions</li>
                        <li>Your data may be shared with multiple lenders</li>
                        <li>Distribution uses automated ping-tree technology</li>
                        <li>Lenders evaluate eligibility independently</li>
                        <li>You can opt-out of data sharing</li>
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
                <h2>Speedy Loan Center</h2>
                <p className="website">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  www.speedyloancenter.com
                </p>
                <p className="description">
                  Speedy Loan Center operates a financial lead-generation platform that connects consumers 
                  with third-party lenders and financial service providers.
                </p>
              </div>
            </div>

            <div className="acceptance-box">
              <div className="acceptance-content">
                <div className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#10B981" strokeWidth="2"/>
                    <path d="M12 16V12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8H12.01" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Your Privacy Matters</h4>
                  <p>
                    This Privacy Policy explains how we collect, use, share, and protect your personal 
                    information when you visit our website or submit information through our forms. 
                    Please read it carefully to understand our practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="privacy-content">
          <div className="container">
            <div className="privacy-grid">
              {/* Section 1 */}
              <div className="privacy-card">
                <div className="privacy-number">1</div>
                <div className="privacy-content">
                  <h3>Our Role (Important Disclosure)</h3>
                  <p>
                    We are not a lender and do not make credit decisions. We operate as a lead generator 
                    / marketplace that matches consumers with potential lenders and financial partners.
                  </p>
                  
                  <div className="disclosure-box">
                    <div className="disclosure-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4>When you submit information:</h4>
                      <ul>
                        <li>Your data may be shared with multiple lenders or buyers</li>
                        <li>Distribution occurs via automated decisioning (ping-tree technology)</li>
                        <li>Buyers may evaluate eligibility independently</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="privacy-card">
                <div className="privacy-number">2</div>
                <div className="privacy-content">
                  <h3>Information We Collect</h3>
                  
                  <div className="collection-types">
                    <div className="collection-type">
                      <div className="type-header">
                        <div className="type-icon user">👤</div>
                        <h4>A. Information You Provide</h4>
                      </div>
                      <p>When you submit a loan request or inquiry:</p>
                      <div className="data-grid">
                        <div className="data-item">
                          <span className="data-icon">📝</span>
                          <span>Full name & Contact info</span>
                        </div>
                        <div className="data-item">
                          <span className="data-icon">🏠</span>
                          <span>Mailing address</span>
                        </div>
                        <div className="data-item">
                          <span className="data-icon">🎂</span>
                          <span>Date of birth</span>
                        </div>
                        <div className="data-item">
                          <span className="data-icon">💰</span>
                          <span>Loan amount requested</span>
                        </div>
                        <div className="data-item">
                          <span className="data-icon">💼</span>
                          <span>Employment details</span>
                        </div>
                        <div className="data-item">
                          <span className="data-icon">🏦</span>
                          <span>Banking information</span>
                        </div>
                        <div className="data-item">
                          <span className="data-icon">✅</span>
                          <span>Consent records</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="collection-type">
                      <div className="type-header">
                        <div className="type-icon auto">🖥️</div>
                        <h4>B. Automatically Collected</h4>
                      </div>
                      <div className="data-list">
                        <div className="list-item">IP address</div>
                        <div className="list-item">Device & browser data</div>
                        <div className="list-item">Geolocation (approximate)</div>
                        <div className="list-item">Time & date stamps</div>
                        <div className="list-item">Referral source data</div>
                      </div>
                    </div>

                    <div className="collection-type">
                      <div className="type-header">
                        <div className="type-icon third">🤝</div>
                        <h4>C. From Third Parties</h4>
                      </div>
                      <div className="data-list">
                        <div className="list-item">Affiliate publishers</div>
                        <div className="list-item">Marketing partners</div>
                        <div className="list-item">Data verification services</div>
                        <div className="list-item">Fraud-prevention providers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="privacy-card">
                <div className="privacy-number">3</div>
                <div className="privacy-content">
                  <h3>How the Ping-Tree Model Uses Your Data</h3>
                  <p>
                    Your information may be used in our automated distribution system:
                  </p>
                  
                  <div className="process-flow">
                    <div className="process-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Initial Evaluation (Ping)</h4>
                        <ul>
                          <li>Limited data shared with multiple lenders</li>
                          <li>Used to determine eligibility and pricing</li>
                          <li>Occurs simultaneously or sequentially</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Lead Delivery (Post)</h4>
                        <ul>
                          <li>Full application data sent to matched lenders</li>
                          <li>Based on eligibility and business rules</li>
                          <li>One or more lenders may receive your data</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Fallback Distribution</h4>
                        <ul>
                          <li>If one lender declines, information shared with others</li>
                          <li>Distribution continues until match found</li>
                          <li>Process may involve multiple rounds</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="privacy-card">
                <div className="privacy-number">4</div>
                <div className="privacy-content">
                  <h3>How We Use Your Information</h3>
                  <p>
                    We use personal information for the following purposes:
                  </p>
                  
                  <div className="usage-grid">
                    <div className="usage-item">
                      <div className="usage-icon">🔗</div>
                      <span>Match consumers with lenders</span>
                    </div>
                    <div className="usage-item">
                      <div className="usage-icon">⚙️</div>
                      <span>Operate lead-distribution systems</span>
                    </div>
                    <div className="usage-item">
                      <div className="usage-icon">💬</div>
                      <span>Communicate regarding your request</span>
                    </div>
                    <div className="usage-item">
                      <div className="usage-icon">🛡️</div>
                      <span>Verify identity and detect fraud</span>
                    </div>
                    <div className="usage-item">
                      <div className="usage-icon">📋</div>
                      <span>Maintain compliance records</span>
                    </div>
                    <div className="usage-item">
                      <div className="usage-icon">📈</div>
                      <span>Improve platform performance</span>
                    </div>
                    <div className="usage-item">
                      <div className="usage-icon">⚖️</div>
                      <span>Comply with legal obligations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="privacy-card">
                <div className="privacy-number">5</div>
                <div className="privacy-content">
                  <h3>Information Sharing & Sale Disclosure</h3>
                  
                  <div className="sharing-categories">
                    <div className="sharing-category">
                      <div className="category-header">
                        <h4>A. Lenders & Financial Buyers</h4>
                        <span className="category-tag">May involve sale of data</span>
                      </div>
                      <p>We may share or sell your personal information to:</p>
                      <div className="buyer-list">
                        <div className="buyer">Banks</div>
                        <div className="buyer">Licensed lenders</div>
                        <div className="buyer">Loan servicers</div>
                        <div className="buyer">Financial service providers</div>
                      </div>
                      <p className="note">
                        This sharing may be considered a "sale" or "sharing" under certain state privacy laws.
                      </p>
                    </div>
                    
                    <div className="sharing-category">
                      <div className="category-header">
                        <h4>B. Service Providers</h4>
                      </div>
                      <div className="provider-list">
                        <div className="provider">Lead-routing platforms</div>
                        <div className="provider">Hosting providers</div>
                        <div className="provider">Analytics services</div>
                        <div className="provider">CRM and call-tracking vendors</div>
                        <div className="provider">Compliance and audit partners</div>
                      </div>
                    </div>

                    <div className="sharing-category">
                      <div className="category-header">
                        <h4>C. Legal & Compliance</h4>
                      </div>
                      <p>We may disclose information to:</p>
                      <ul>
                        <li>Comply with law or court order</li>
                        <li>Respond to regulatory requests</li>
                        <li>Prevent fraud or abuse</li>
                        <li>Enforce agreements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="privacy-card">
                <div className="privacy-number">6</div>
                <div className="privacy-content">
                  <h3>TCPA & Communication Consent</h3>
                  
                  <div className="consent-notice">
                    <div className="notice-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p>
                        By submitting your information, you expressly consent to receive communications 
                        from us and our partners.
                      </p>
                    </div>
                  </div>

                  <div className="communication-methods">
                    <h4>Communication methods include:</h4>
                    <div className="methods-grid">
                      <div className="method-item">
                        <div className="method-icon">📞</div>
                        <div>
                          <h5>Phone Calls</h5>
                          <p>Direct and automated calls</p>
                        </div>
                      </div>
                      <div className="method-item">
                        <div className="method-icon">💬</div>
                        <div>
                          <h5>Text Messages</h5>
                          <p>SMS communications</p>
                        </div>
                      </div>
                      <div className="method-item">
                        <div className="method-icon">📧</div>
                        <div>
                          <h5>Emails</h5>
                          <p>Electronic communications</p>
                        </div>
                      </div>
                      <div className="method-item">
                        <div className="method-icon">🤖</div>
                        <div>
                          <h5>Automated Systems</h5>
                          <p>As permitted by law</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="consent-details">
                    <div className="detail-item">
                      <div className="detail-icon green">✅</div>
                      <div>
                        <h5>Your Rights</h5>
                        <p>Consent is not required to obtain credit</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon blue">🔄</div>
                      <div>
                        <h5>Opt-Out Available</h5>
                        <p>Can be revoked at any time by following opt-out instructions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7-15 Container */}
              <div className="privacy-container">
                {/* Section 7 */}
                <div className="privacy-compact">
                  <div className="compact-number">7</div>
                  <div className="compact-content">
                    <h4>Gramm-Leach-Bliley Act (GLBA)</h4>
                    <p>
                      As a financial lead-generation entity, we comply with the GLBA by limiting access 
                      to consumer information, implementing security safeguards, and sharing data only 
                      as permitted by law.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="privacy-compact">
                  <div className="compact-number">8</div>
                  <div className="compact-content">
                    <h4>Cookies & Tracking</h4>
                    <p>
                      We use cookies and similar technologies to enable website functionality, track 
                      affiliate attribution, measure performance, and detect fraud. You may disable 
                      cookies in your browser settings.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div className="privacy-compact">
                  <div className="compact-number">9</div>
                  <div className="compact-content">
                    <h4>Data Retention</h4>
                    <p>
                      We retain personal information only as long as necessary to fulfill lead-generation 
                      purposes, meet regulatory requirements, resolve disputes, and maintain compliance records.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div className="privacy-compact">
                  <div className="compact-number">10</div>
                  <div className="compact-content">
                    <h4>Your Privacy Rights (U.S.)</h4>
                    <div className="rights-section">
                      <h5>California Residents (CCPA/CPRA)</h5>
                      <p>You have the right to:</p>
                      <ul>
                        <li>Know what personal information we collect</li>
                        <li>Request deletion or correction</li>
                        <li>Opt out of the sale or sharing of personal information</li>
                        <li>Limit use of sensitive personal information</li>
                        <li>Not be discriminated against</li>
                      </ul>
                      <div className="opt-out-info">
                        <h6>Opt-Out:</h6>
                        <p>Email: contact@speedyloancenter.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 11 */}
                <div className="privacy-compact">
                  <div className="compact-number">11</div>
                  <div className="compact-content">
                    <h4>Do Not Track Signals</h4>
                    <p>
                      We do not currently respond to "Do Not Track" signals sent by web browsers.
                    </p>
                  </div>
                </div>

                {/* Section 12 */}
                <div className="privacy-compact">
                  <div className="compact-number">12</div>
                  <div className="compact-content">
                    <h4>Children's Privacy</h4>
                    <p>
                      Our website is intended for individuals 18 years or older. We do not knowingly 
                      collect information from minors.
                    </p>
                  </div>
                </div>

                {/* Section 13 */}
                <div className="privacy-compact">
                  <div className="compact-number">13</div>
                  <div className="compact-content">
                    <h4>Security Measures</h4>
                    <p>
                      We use reasonable safeguards including SSL encryption, access controls, secure 
                      storage systems, and regular security reviews to protect your information.
                    </p>
                  </div>
                </div>

                {/* Section 14 */}
                <div className="privacy-compact">
                  <div className="compact-number">14</div>
                  <div className="compact-content">
                    <h4>Policy Updates</h4>
                    <p>
                      We may update this Privacy Policy periodically. Changes will be posted on this 
                      page with a revised effective date.
                    </p>
                  </div>
                </div>

                {/* Section 15 */}
                <div className="privacy-compact">
                  <div className="compact-number">15</div>
                  <div className="compact-content">
                    <h4>Contact Us</h4>
                    <div className="contact-details">
                      <div className="company-name">Speedy Loan Center</div>
                      <div className="contact-item">
                        <span className="contact-label">Email:</span>
                        <span className="contact-value">contact@speedyloancenter.com</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Website:</span>
                        <span className="contact-value">www.speedyloancenter.com</span>
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
                <h3>Questions About Your Privacy?</h3>
                <p>
                  If you have questions about our privacy practices or want to exercise your privacy 
                  rights, please contact us.
                </p>
              </div>
              <div className="footer-actions">
                <a href="/contact" className="footer-btn">
                  Contact Us
                </a>
                <a href="/terms" className="footer-btn outline">
                  View Terms
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .privacy-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .page-content {
          padding-bottom: 80px;
        }

        /* Page Subtitle */
        .page-subtitle {
          padding: 20px 0;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-bottom: 1px solid #bae6fd;
        }

        .subtitle-text {
          font-size: 18px;
          color: #0369a1;
          text-align: center;
          margin: 0;
          font-weight: 500;
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
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 2px solid #bae6fd;
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
          background: #0ea5e9;
        }

        .notice-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
        }

        .notice-icon {
          color: #0ea5e9;
          flex-shrink: 0;
        }

        .notice-title h3 {
          margin: 0 0 8px 0;
          color: #0369a1;
          font-size: 20px;
          font-weight: 700;
        }

        .notice-subtitle {
          margin: 0;
          color: #0284c7;
          font-weight: 600;
          font-size: 16px;
        }

        .notice-content p {
          color: #0c4a6e;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #0ea5e9;
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
          border: 1px solid #bae6fd;
        }

        .content-card h4 {
          margin: 0 0 12px 0;
          color: #0369a1;
        }

        .content-card ul {
          margin: 0;
          padding-left: 20px;
          color: #0c4a6e;
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
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 2px solid #bbf7d0;
          border-radius: 16px;
          padding: 30px;
        }

        .acceptance-content {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .check-icon {
          color: #10b981;
          flex-shrink: 0;
        }

        .acceptance-content h4 {
          margin: 0 0 12px 0;
          color: #065f46;
          font-size: 18px;
        }

        .acceptance-content p {
          margin: 0;
          color: #047857;
          line-height: 1.6;
        }

        /* Privacy Content */
        .privacy-content-section {
          padding: 40px 0;
        }

        .privacy-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .privacy-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .privacy-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .privacy-number {
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

        .privacy-content h3 {
          margin: 0 0 20px 0;
          color: #1e293b;
          font-size: 24px;
          font-weight: 700;
        }

        .privacy-content > p {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* Disclosure Box */
        .disclosure-box {
          background: #fef3c7;
          border: 1px solid #fde047;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .disclosure-icon {
          color: #d97706;
          flex-shrink: 0;
        }

        .disclosure-box h4 {
          margin: 0 0 12px 0;
          color: #92400e;
        }

        .disclosure-box ul {
          margin: 0;
          padding-left: 20px;
          color: #92400e;
        }

        .disclosure-box li {
          margin-bottom: 8px;
        }

        /* Collection Types */
        .collection-types {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .collection-type {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .type-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .type-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .type-icon.user {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .type-icon.auto {
          background: #fef3c7;
          color: #d97706;
        }

        .type-icon.third {
          background: #dcfce7;
          color: #16a34a;
        }

        .collection-type h4 {
          margin: 0;
          color: #1e293b;
          font-size: 18px;
        }

        .data-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
          margin-top: 16px;
        }

        .data-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #475569;
        }

        .data-icon {
          font-size: 20px;
        }

        .data-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .list-item {
          padding: 8px 12px;
          background: white;
          border-radius: 6px;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        /* Process Flow */
        .process-flow {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 24px;
        }

        .process-step {
          display: flex;
          gap: 20px;
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
          margin: 0 0 12px 0;
          color: #1e293b;
          font-size: 18px;
        }

        .step-content ul {
          margin: 0;
          padding-left: 20px;
          color: #475569;
        }

        .step-content li {
          margin-bottom: 6px;
        }

        /* Usage Grid */
        .usage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .usage-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          color: #475569;
        }

        .usage-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        /* Sharing Categories */
        .sharing-categories {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 24px;
        }

        .sharing-category {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .category-header h4 {
          margin: 0;
          color: #1e293b;
          font-size: 18px;
        }

        .category-tag {
          background: #fef3c7;
          color: #92400e;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .buyer-list, .provider-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 12px 0;
        }

        .buyer, .provider {
          padding: 6px 12px;
          background: white;
          border-radius: 6px;
          font-size: 14px;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .note {
          margin: 12px 0 0 0;
          font-size: 14px;
          color: #64748b;
          font-style: italic;
        }

        /* Consent Notice */
        .consent-notice {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .notice-icon {
          color: #0ea5e9;
          flex-shrink: 0;
        }

        .consent-notice p {
          margin: 0;
          color: #0369a1;
          font-weight: 500;
        }

        /* Communication Methods */
        .communication-methods {
          margin-bottom: 24px;
        }

        .communication-methods h4 {
          margin: 0 0 20px 0;
          color: #1e293b;
        }

        .methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .method-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .method-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .method-item h5 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 16px;
        }

        .method-item p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        /* Consent Details */
        .consent-details {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .detail-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .detail-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .detail-icon.green {
          color: #10b981;
        }

        .detail-icon.blue {
          color: #0ea5e9;
        }

        .detail-item h5 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 16px;
        }

        .detail-item p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        /* Compact Privacy Sections */
        .privacy-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .privacy-compact {
          background: white;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          position: relative;
          transition: all 0.3s ease;
        }

        .privacy-compact:hover {
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

        .rights-section {
          margin-top: 12px;
        }

        .rights-section h5 {
          margin: 0 0 12px 0;
          color: #1e293b;
          font-size: 15px;
        }

        .rights-section ul {
          margin: 8px 0;
          padding-left: 20px;
          color: #475569;
        }

        .rights-section li {
          margin-bottom: 6px;
          font-size: 13px;
        }

        .opt-out-info {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 8px;
          padding: 12px;
          margin-top: 12px;
        }

        .opt-out-info h6 {
          margin: 0 0 8px 0;
          color: #0369a1;
          font-size: 14px;
        }

        .opt-out-info p {
          margin: 0;
          color: #0c4a6e;
          font-size: 13px;
        }

        .contact-details {
          margin-top: 12px;
        }

        .company-name {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 12px;
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

          .usage-grid {
            grid-template-columns: 1fr 1fr;
          }

          .methods-grid {
            grid-template-columns: 1fr 1fr;
          }

          .privacy-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .notice-card,
          .privacy-card {
            padding: 24px;
          }

          .privacy-number {
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

          .data-grid {
            grid-template-columns: 1fr;
          }

          .usage-grid {
            grid-template-columns: 1fr;
          }

          .methods-grid {
            grid-template-columns: 1fr;
          }

          .consent-details {
            grid-template-columns: 1fr;
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

          .subtitle-text {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .type-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .process-step {
            flex-direction: column;
            gap: 8px;
          }

          .step-number {
            align-self: flex-start;
          }

          .method-item {
            flex-direction: column;
            gap: 12px;
          }

          .detail-item {
            flex-direction: column;
            gap: 12px;
          }

          .footer-text h3 {
            font-size: 24px;
          }

          .footer-text p {
            font-size: 16px;
          }

          .subtitle-text {
            font-size: 15px;
            padding: 0 10px;
          }
        }
      `}</style>
    </div>
  );
}