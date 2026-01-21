'use client';

import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function CaliforniaPrivacyNoticePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    role: true,
    categories: true,
    purposes: true,
    disclosure: true,
    rights: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="california-privacy-page">
      <PageHeader title="California Privacy Notice (CCPA / CPRA)" />
      
      <div className="page-content">
        {/* Subtitle Section */}
        <div className="page-subtitle">
          <div className="container">
            <p className="subtitle-text">
              Your California privacy rights under the CCPA and CPRA
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
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B5CF6" strokeWidth="2"/>
                    <path d="M12 16V12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8H12.01" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="notice-title">
                  <h3>CALIFORNIA CONSUMER RIGHTS NOTICE</h3>
                  <p className="notice-subtitle">
                    This notice supplements our Privacy Policy for California residents
                  </p>
                </div>
              </div>
              <div className="notice-content">
                <p>
                  This California Privacy Notice applies solely to California residents as defined 
                  by the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
                </p>
                <div className="notice-actions">
                  <button 
                    className="read-more-btn"
                    onClick={() => toggleSection('rights')}
                  >
                    View Your Rights
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={expandedSections.rights ? 'expanded' : ''}
                    >
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <a href="/privacy" className="privacy-link">
                    View Full Privacy Policy
                  </a>
                </div>
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
                  This notice supplements our Privacy Policy and applies specifically to California residents 
                  under the CCPA and CPRA regulations.
                </p>
              </div>
            </div>

            <div className="california-badge">
              <div className="badge-icon">🏛️</div>
              <div className="badge-content">
                <h4>California Residents Only</h4>
                <p>
                  This notice applies specifically to California consumers as defined by state privacy laws. 
                  If you are not a California resident, please refer to our general Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="content-section">
          <div className="container">
            <div className="content-grid">
              {/* Section 1 */}
              <div className="content-card">
                <div className="content-number">1</div>
                <div className="card-content">
                  <h3>Our Role</h3>
                  <p>
                    Speed Loan Center operates a financial lead-generation and distribution platform that 
                    connects consumers seeking loan products with third-party lenders and financial service 
                    providers through real-time routing and ping-tree technology.
                  </p>
                  
                  <div className="disclaimer-box">
                    <div className="disclaimer-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Important Disclosure</h4>
                      <p>
                        <strong>Speed Loan Center is not a lender, does not make credit decisions, 
                        and does not issue loans.</strong> We operate as a lead generator connecting 
                        consumers with potential lenders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="content-card">
                <div className="content-number">2</div>
                <div className="card-content">
                  <h3>Categories of Personal Information Collected</h3>
                  <p className="section-intro">
                    Within the last 12 months, we may have collected the following categories of personal information:
                  </p>
                  
                  <div className="categories-grid">
                    <div className="category-card">
                      <div className="category-header">
                        <div className="category-icon">🆔</div>
                        <h4>A. Identifiers</h4>
                      </div>
                      <div className="category-items">
                        <div className="category-item">Full name</div>
                        <div className="category-item">Email address</div>
                        <div className="category-item">Phone number</div>
                        <div className="category-item">IP address</div>
                        <div className="category-item">Online identifiers</div>
                      </div>
                    </div>

                    <div className="category-card">
                      <div className="category-header">
                        <div className="category-icon">📄</div>
                        <h4>B. Personal Information</h4>
                        <span className="law-reference">(Cal. Civ. Code §1798.80)</span>
                      </div>
                      <div className="category-items">
                        <div className="category-item">Mailing address</div>
                        <div className="category-item">Date of birth</div>
                        <div className="category-item">Employment information</div>
                        <div className="category-item">Income-related indicators</div>
                        <div className="category-item">Loan request details</div>
                      </div>
                    </div>

                    <div className="category-card">
                      <div className="category-header">
                        <div className="category-icon">🌐</div>
                        <h4>C. Internet or Network Activity</h4>
                      </div>
                      <div className="category-items">
                        <div className="category-item">Website interaction data</div>
                        <div className="category-item">Browsing behavior</div>
                        <div className="category-item">Referral source data</div>
                        <div className="category-item">Affiliate source data</div>
                      </div>
                    </div>

                    <div className="category-card">
                      <div className="category-header">
                        <div className="category-icon">📍</div>
                        <h4>D. Geolocation Data</h4>
                      </div>
                      <div className="category-items">
                        <div className="category-item">Approximate location derived from IP address</div>
                      </div>
                    </div>

                    <div className="category-card sensitive">
                      <div className="category-header">
                        <div className="category-icon">🔒</div>
                        <h4>E. Sensitive Personal Information</h4>
                      </div>
                      <div className="category-items">
                        <div className="category-item">Financial information provided in connection with loan requests</div>
                        <div className="category-item">Authentication or verification data</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="content-card">
                <div className="content-number">3</div>
                <div className="card-content">
                  <h3>Sources of Personal Information</h3>
                  <p>
                    We collect personal information from the following sources:
                  </p>
                  
                  <div className="sources-grid">
                    <div className="source-item">
                      <div className="source-icon">👤</div>
                      <div className="source-content">
                        <h5>Consumers Directly</h5>
                        <p>Information you provide when submitting loan requests</p>
                      </div>
                    </div>

                    <div className="source-item">
                      <div className="source-icon">🤝</div>
                      <div className="source-content">
                        <h5>Affiliate Partners</h5>
                        <p>Publishers and marketing partners</p>
                      </div>
                    </div>

                    <div className="source-item">
                      <div className="source-icon">📊</div>
                      <div className="source-content">
                        <h5>Lead Generators</h5>
                        <p>Third-party lead generation services</p>
                      </div>
                    </div>

                    <div className="source-item">
                      <div className="source-icon">🛡️</div>
                      <div className="source-content">
                        <h5>Verification Services</h5>
                        <p>Data verification and fraud-prevention providers</p>
                      </div>
                    </div>

                    <div className="source-item">
                      <div className="source-icon">🍪</div>
                      <div className="source-content">
                        <h5>Tracking Technologies</h5>
                        <p>Cookies and similar tracking technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="content-card">
                <div className="content-number">4</div>
                <div className="card-content">
                  <h3>Purposes for Collection and Use</h3>
                  <p>
                    We collect and use personal information for the following business purposes:
                  </p>
                  
                  <div className="purposes-grid">
                    <div className="purpose-item">
                      <div className="purpose-icon">🔗</div>
                      <span>Match consumers with potential lenders</span>
                    </div>
                    <div className="purpose-item">
                      <div className="purpose-icon">⚙️</div>
                      <span>Operate ping-tree lead-distribution systems</span>
                    </div>
                    <div className="purpose-item">
                      <div className="purpose-icon">💬</div>
                      <span>Communicate regarding loan inquiries</span>
                    </div>
                    <div className="purpose-item">
                      <div className="purpose-icon">🛡️</div>
                      <span>Verify identity and prevent fraud</span>
                    </div>
                    <div className="purpose-item">
                      <div className="purpose-icon">📋</div>
                      <span>Maintain compliance and audit records</span>
                    </div>
                    <div className="purpose-item">
                      <div className="purpose-icon">📈</div>
                      <span>Improve website performance and user experience</span>
                    </div>
                    <div className="purpose-item">
                      <div className="purpose-icon">⚖️</div>
                      <span>Comply with legal and regulatory obligations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="content-card">
                <div className="content-number">5</div>
                <div className="card-content">
                  <h3>Disclosure, Sale, and Sharing of Personal Information</h3>
                  
                  <div className="disclosure-categories">
                    <div className="disclosure-category">
                      <div className="category-header">
                        <h4>A. Disclosure for Business Purposes</h4>
                      </div>
                      <p>We may disclose personal information to:</p>
                      <div className="disclosure-list">
                        <div className="disclosure-item">Service providers</div>
                        <div className="disclosure-item">Technology and lead-routing platforms</div>
                        <div className="disclosure-item">Hosting and analytics vendors</div>
                        <div className="disclosure-item">Compliance vendors</div>
                      </div>
                    </div>
                    
                    <div className="disclosure-category sale">
                      <div className="category-header">
                        <h4>B. Sale or Sharing of Personal Information</h4>
                        <span className="sale-tag">May Involve Sale</span>
                      </div>
                      <p>
                        Speed Loan Center may sell or share personal information to third-party lenders 
                        and financial buyers in exchange for monetary or other valuable consideration.
                      </p>
                      
                      <div className="sale-info">
                        <h5>This may include:</h5>
                        <div className="sale-items">
                          <div className="sale-item">Identifiers</div>
                          <div className="sale-item">Financial and loan-related information</div>
                          <div className="sale-item">Internet or network activity data</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="content-card">
                <div className="content-number">6</div>
                <div className="card-content">
                  <h3>Sensitive Personal Information</h3>
                  
                  <div className="sensitive-info">
                    <div className="sensitive-icon">🔒</div>
                    <div className="sensitive-content">
                      <p>
                        Sensitive personal information is used only as reasonably necessary to:
                      </p>
                      <ul>
                        <li>Provide requested services</li>
                        <li>Match consumers with lenders</li>
                        <li>Maintain platform security</li>
                        <li>Meet compliance obligations</li>
                      </ul>
                      <p className="emphasis">
                        We do not use sensitive personal information for unrelated purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7 - Your Rights */}
              <div className="content-card rights-card">
                <div className="content-number">7</div>
                <div className="card-content">
                  <h3>Your California Privacy Rights</h3>
                  <p className="section-intro">
                    If you are a California resident, you have the right to:
                  </p>
                  
                  <div className="rights-grid">
                    <div className="right-item">
                      <div className="right-icon">🔍</div>
                      <div className="right-content">
                        <h4>A. Right to Know</h4>
                        <p>Request disclosure of:</p>
                        <ul>
                          <li>Categories of personal information collected</li>
                          <li>Sources of personal information</li>
                          <li>Business or commercial purposes for collection</li>
                          <li>Categories of third parties with whom information is shared</li>
                        </ul>
                      </div>
                    </div>

                    <div className="right-item">
                      <div className="right-icon">🗑️</div>
                      <div className="right-content">
                        <h4>B. Right to Delete</h4>
                        <p>Request deletion of personal information, subject to legal exceptions.</p>
                      </div>
                    </div>

                    <div className="right-item">
                      <div className="right-icon">✏️</div>
                      <div className="right-content">
                        <h4>C. Right to Correct</h4>
                        <p>Request correction of inaccurate personal information.</p>
                      </div>
                    </div>

                    <div className="right-item opt-out">
                      <div className="right-icon">🚫</div>
                      <div className="right-content">
                        <h4>D. Right to Opt Out of Sale or Sharing</h4>
                        <p>You may opt out of the sale or sharing of your personal information at any time.</p>
                        <div className="opt-out-details">
                          <div className="opt-out-method">
                            <strong>Email:</strong> contact@speedloancenter.com
                          </div>
                          <div className="opt-out-link">
                            <a href="#" className="opt-out-btn">
                              Do Not Sell or Share My Personal Information
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="right-item">
                      <div className="right-icon">📊</div>
                      <div className="right-content">
                        <h4>E. Right to Limit Use of Sensitive Personal Information</h4>
                        <p>You may request limitations on how sensitive personal information is used.</p>
                      </div>
                    </div>

                    <div className="right-item">
                      <div className="right-icon">⚖️</div>
                      <div className="right-content">
                        <h4>F. Right to Non-Discrimination</h4>
                        <p>We will not discriminate against you for exercising your privacy rights.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sections 8-13 Container */}
              <div className="compact-container">
                {/* Section 8 */}
                <div className="compact-card">
                  <div className="compact-number">8</div>
                  <div className="compact-content">
                    <h4>How to Submit a Privacy Request</h4>
                    <p>
                      You may submit a request by contacting us at:
                    </p>
                    <div className="contact-info">
                      <div className="contact-method">
                        <strong>Email:</strong> contact@speedloancenter.com
                      </div>
                    </div>
                    <p className="note">
                      We may verify your identity before processing your request.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div className="compact-card">
                  <div className="compact-number">9</div>
                  <div className="compact-content">
                    <h4>Authorized Agents</h4>
                    <p>
                      You may designate an authorized agent to submit a request on your behalf. 
                      Proof of authorization may be required.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div className="compact-card">
                  <div className="compact-number">10</div>
                  <div className="compact-content">
                    <h4>Data Retention</h4>
                    <p>
                      We retain personal information only as long as necessary to fulfill lead-generation 
                      purposes, meet legal obligations, resolve disputes, and enforce agreements.
                    </p>
                  </div>
                </div>

                {/* Section 11 */}
                <div className="compact-card">
                  <div className="compact-number">11</div>
                  <div className="compact-content">
                    <h4>Minors</h4>
                    <p>
                      Speed Loan Center does not knowingly sell or share the personal information 
                      of individuals under 16 years of age.
                    </p>
                  </div>
                </div>

                {/* Section 12 */}
                <div className="compact-card">
                  <div className="compact-number">12</div>
                  <div className="compact-content">
                    <h4>Updates to This Notice</h4>
                    <p>
                      We may update this California Privacy Notice from time to time. Any updates 
                      will be posted on this page with a revised effective date.
                    </p>
                  </div>
                </div>

                {/* Section 13 */}
                <div className="compact-card">
                  <div className="compact-number">13</div>
                  <div className="compact-content">
                    <h4>Contact Information</h4>
                    <div className="contact-details">
                      <div className="company-name">Speed Loan Center</div>
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

        {/* Action Section */}
        <section className="action-section">
          <div className="container">
            <div className="action-card">
              <div className="action-content">
                <div className="action-icon">📋</div>
                <div className="action-text">
                  <h3>Exercise Your Privacy Rights</h3>
                  <p>
                    To submit a privacy request or exercise your California privacy rights, 
                    please contact us using the information below.
                  </p>
                </div>
                <div className="action-buttons">
                  <a href="mailto:contact@speedloancenter.com" className="action-btn">
                    Email Request
                  </a>
                  <a href="/privacy" className="action-btn outline">
                    View Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .california-privacy-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .page-content {
          padding-bottom: 80px;
        }

        /* Page Subtitle */
        .page-subtitle {
          padding: 20px 0;
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
          border-bottom: 1px solid #ddd6fe;
        }

        .subtitle-text {
          font-size: 18px;
          color: #7c3aed;
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
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
          border: 2px solid #ddd6fe;
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
          background: linear-gradient(90deg, #7c3aed 0%, #8b5cf6 100%);
        }

        .notice-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
        }

        .notice-icon {
          color: #7c3aed;
          flex-shrink: 0;
        }

        .notice-title h3 {
          margin: 0 0 8px 0;
          color: #5b21b6;
          font-size: 20px;
          font-weight: 700;
        }

        .notice-subtitle {
          margin: 0;
          color: #6d28d9;
          font-weight: 600;
          font-size: 16px;
        }

        .notice-content p {
          color: #5b21b6;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .notice-actions {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #7c3aed;
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

        .privacy-link {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px dashed #7c3aed;
          padding-bottom: 2px;
          transition: all 0.3s ease;
        }

        .privacy-link:hover {
          border-bottom-color: transparent;
        }

        /* Header Section */
        .header-section {
          padding: 40px 0;
        }

        .header-info {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          margin-bottom: 30px;
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
          color: #7c3aed;
          font-weight: 600;
          margin: 0 0 16px 0;
        }

        .description {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .california-badge {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 2px solid #fbbf24;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .badge-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .badge-content h4 {
          margin: 0 0 8px 0;
          color: #92400e;
          font-size: 18px;
        }

        .badge-content p {
          margin: 0;
          color: #92400e;
          line-height: 1.6;
        }

        /* Content Section */
        .content-section {
          padding: 40px 0;
        }

        .content-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .content-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .content-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .rights-card {
          border: 2px solid #ddd6fe;
        }

        .content-number {
          position: absolute;
          top: -20px;
          left: 40px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .card-content h3 {
          margin: 0 0 20px 0;
          color: #1e293b;
          font-size: 24px;
          font-weight: 700;
        }

        .card-content > p {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .section-intro {
          font-weight: 500;
          color: #4b5563 !important;
          margin-bottom: 32px !important;
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
          margin: 0 0 8px 0;
          color: #92400e;
          font-size: 16px;
        }

        .disclaimer-box p {
          margin: 0;
          color: #92400e;
          line-height: 1.6;
        }

        /* Categories Grid */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .category-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .category-card.sensitive {
          background: #fef2f2;
          border-color: #fecaca;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .category-icon {
          font-size: 24px;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
        }

        .category-card.sensitive .category-icon {
          background: #fef2f2;
          border-color: #fecaca;
        }

        .category-header h4 {
          margin: 0;
          color: #1e293b;
          font-size: 16px;
          font-weight: 600;
        }

        .law-reference {
          font-size: 12px;
          color: #64748b;
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 10px;
          margin-left: auto;
        }

        .category-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-item {
          padding: 8px 12px;
          background: white;
          border-radius: 6px;
          color: #475569;
          font-size: 14px;
          border: 1px solid #e2e8f0;
        }

        .category-card.sensitive .category-item {
          background: #fef2f2;
          border-color: #fecaca;
        }

        /* Sources Grid */
        .sources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .source-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .source-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .source-content h5 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 16px;
        }

        .source-content p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        /* Purposes Grid */
        .purposes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .purpose-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          color: #475569;
        }

        .purpose-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        /* Disclosure Categories */
        .disclosure-categories {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 24px;
        }

        .disclosure-category {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .disclosure-category.sale {
          background: #fef2f2;
          border-color: #fecaca;
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

        .sale-tag {
          background: #fecaca;
          color: #dc2626;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .disclosure-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 12px 0;
        }

        .disclosure-item {
          padding: 6px 12px;
          background: white;
          border-radius: 6px;
          font-size: 14px;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .sale-info {
          margin-top: 16px;
        }

        .sale-info h5 {
          margin: 0 0 12px 0;
          color: #dc2626;
          font-size: 16px;
        }

        .sale-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sale-item {
          padding: 8px 12px;
          background: #fef2f2;
          border-radius: 6px;
          color: #dc2626;
          font-size: 14px;
          border: 1px solid #fecaca;
        }

        /* Sensitive Info */
        .sensitive-info {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-top: 24px;
        }

        .sensitive-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .sensitive-content p {
          margin: 0 0 12px 0;
          color: #7f1d1d;
        }

        .sensitive-content ul {
          margin: 0 0 12px 0;
          padding-left: 20px;
          color: #7f1d1d;
        }

        .sensitive-content li {
          margin-bottom: 6px;
        }

        .emphasis {
          margin: 12px 0 0 0 !important;
          color: #dc2626 !important;
          font-weight: 600 !important;
        }

        /* Rights Grid */
        .rights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .right-item {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .right-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .right-item.opt-out {
          background: #fef2f2;
          border-color: #fecaca;
          border-width: 2px;
        }

        .right-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .right-item.opt-out .right-icon {
          color: #dc2626;
        }

        .right-content h4 {
          margin: 0 0 12px 0;
          color: #1e293b;
          font-size: 18px;
        }

        .right-content p {
          margin: 0 0 12px 0;
          color: #475569;
        }

        .right-content ul {
          margin: 8px 0;
          padding-left: 20px;
          color: #475569;
        }

        .right-content li {
          margin-bottom: 6px;
          font-size: 14px;
        }

        .opt-out-details {
          background: white;
          border-radius: 8px;
          padding: 16px;
          margin-top: 12px;
          border: 1px solid #fecaca;
        }

        .opt-out-method {
          margin-bottom: 12px;
          color: #dc2626;
        }

        .opt-out-btn {
          display: inline-block;
          padding: 10px 20px;
          background: #dc2626;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .opt-out-btn:hover {
          background: #b91c1c;
          transform: translateY(-2px);
        }

        /* Compact Cards */
        .compact-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .compact-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          position: relative;
          transition: all 0.3s ease;
        }

        .compact-card:hover {
          border-color: #7c3aed;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.1);
        }

        .compact-number {
          position: absolute;
          top: -12px;
          left: 24px;
          width: 24px;
          height: 24px;
          background: #7c3aed;
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
          margin: 0 0 12px 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.5;
        }

        .note {
          font-size: 13px;
          color: #64748b;
          font-style: italic;
          margin: 8px 0 0 0 !important;
        }

        .contact-info {
          background: #f8fafc;
          border-radius: 8px;
          padding: 12px;
          margin: 12px 0;
        }

        .contact-method {
          color: #475569;
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
          color: #7c3aed;
          font-weight: 500;
        }

        /* Action Section */
        .action-section {
          padding: 60px 0 0 0;
        }

        .action-card {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 16px;
          padding: 40px;
          color: white;
        }

        .action-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .action-icon {
          font-size: 48px;
          flex-shrink: 0;
        }

        .action-text {
          flex: 1;
          min-width: 300px;
        }

        .action-text h3 {
          margin: 0 0 12px 0;
          color: white;
          font-size: 24px;
        }

        .action-text p {
          margin: 0;
          color: #e9d5ff;
          line-height: 1.6;
        }

        .action-buttons {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
        }

        .action-btn {
          padding: 14px 32px;
          background: white;
          color: #7c3aed;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        .action-btn.outline {
          background: transparent;
          border: 2px solid white;
          color: white;
        }

        .action-btn.outline:hover {
          background: white;
          color: #7c3aed;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .header-info {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .categories-grid {
            grid-template-columns: 1fr 1fr;
          }

          .sources-grid {
            grid-template-columns: 1fr 1fr;
          }

          .purposes-grid {
            grid-template-columns: 1fr 1fr;
          }

          .rights-grid {
            grid-template-columns: 1fr;
          }

          .compact-container {
            grid-template-columns: 1fr;
          }

          .action-content {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }

          .action-text {
            min-width: auto;
          }
        }

        @media (max-width: 768px) {
          .notice-card,
          .content-card {
            padding: 24px;
          }

          .content-number {
            left: 24px;
          }

          .header-info {
            gap: 24px;
          }

          .company-info h2 {
            font-size: 28px;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .sources-grid {
            grid-template-columns: 1fr;
          }

          .purposes-grid {
            grid-template-columns: 1fr;
          }

          .notice-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .action-buttons {
            flex-direction: column;
            width: 100%;
          }

          .action-btn {
            width: 100%;
            text-align: center;
          }

          .subtitle-text {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .law-reference {
            margin-left: 0;
            align-self: flex-start;
          }

          .source-item {
            flex-direction: column;
            gap: 12px;
          }

          .purpose-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .opt-out-details {
            text-align: center;
          }

          .contact-item {
            flex-direction: column;
            gap: 4px;
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