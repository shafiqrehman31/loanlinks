'use client';

import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import { useState } from 'react';

export default function BeforeApplyPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    latePayments: true,
    creditScore: true,
    debtCollection: true,
    fundingTime: true,
    ourRole: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="before-apply-page">
      <PageHeader title="Important Information Before You Apply" />
      
      <div className="page-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Before You Apply for a Loan
                </h1>
                <p className="hero-subtitle">
                  What you need to know before taking out a loan
                </p>
                <p className="hero-description">
                  Taking out a loan is a serious financial decision. Make sure you understand 
                  how it works and what could happen if you don't follow the loan terms.
                </p>
                <div className="hero-actions">
                  <Link href="/apply-loan" className="btn btn-primary">
                    Continue to Application
                  </Link>
                  <Link href="/faq" className="btn btn-secondary">
                    Read FAQ
                  </Link>
                </div>
              </div>
              <div className="hero-visual">
                <div className="info-card">
                  <div className="card-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#10B981" strokeWidth="2"/>
                      <path d="M12 16V12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 8H12.01" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <h3>Key Takeaway</h3>
                  </div>
                  <p>
                    Always read the loan agreement carefully before signing. 
                    Understand all terms, fees, and your responsibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information Cards */}
        <section className="info-cards-section">
          <div className="container">
            <div className="section-header">
              <div className="section-tagline">
                <span className="tagline-shape"></span>
                <span>Important Things to Know</span>
                <span className="tagline-shape"></span>
              </div>
              <h2 className="section-title">
                Understanding Loan Terms & Conditions
              </h2>
              <p className="section-description">
                Being informed helps you make better financial decisions
              </p>
            </div>

            <div className="info-cards-grid">
              {/* Late Payments Card */}
              <div className="info-card-wrapper">
                <button 
                  className="info-card-header"
                  onClick={() => toggleSection('latePayments')}
                >
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="card-title">If You Pay Late or Miss Payments</h3>
                  <div className="card-toggle">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={expandedSections.latePayments ? 'expanded' : ''}
                    >
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`info-card-content ${expandedSections.latePayments ? 'expanded' : ''}`}
                  style={{ maxHeight: expandedSections.latePayments ? '500px' : '0' }}
                >
                  <div className="card-body">
                    <p className="card-intro">
                      When you accept a loan, you agree to pay it back according to the repayment schedule set by the lender.
                    </p>
                    
                    <div className="warning-box">
                      <div className="warning-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 9V11M12 15H12.01M5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="warning-content">
                        <strong>Important:</strong> speedyy Loan Center is not a lender and does not control loan fees, penalties, or repayment rules.
                      </div>
                    </div>

                    <div className="consequences-list">
                      <h4>If you pay late or miss payments:</h4>
                      <ul>
                        <li>
                          <span className="list-icon">⚠️</span>
                          <span>Late fees may be charged</span>
                        </li>
                        <li>
                          <span className="list-icon">⚠️</span>
                          <span>Additional penalties may apply</span>
                        </li>
                        <li>
                          <span className="list-icon">⚠️</span>
                          <span>Extra interest may accrue</span>
                        </li>
                        <li>
                          <span className="list-icon">📄</span>
                          <span>Always read the lender's loan agreement carefully</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credit Score Card */}
              <div className="info-card-wrapper">
                <button 
                  className="info-card-header"
                  onClick={() => toggleSection('creditScore')}
                >
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="card-title">How Your Credit Score May Be Affected</h3>
                  <div className="card-toggle">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={expandedSections.creditScore ? 'expanded' : ''}
                    >
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`info-card-content ${expandedSections.creditScore ? 'expanded' : ''}`}
                  style={{ maxHeight: expandedSections.creditScore ? '500px' : '0' }}
                >
                  <div className="card-body">
                    <div className="credit-types">
                      <div className="credit-type">
                        <div className="type-icon soft">
                          <span>🔍</span>
                        </div>
                        <div className="type-content">
                          <h4>Soft Credit Check</h4>
                          <p>Some lenders use this to decide whether to offer you a loan. Does not affect your credit score.</p>
                        </div>
                      </div>
                      
                      <div className="credit-type">
                        <div className="type-icon hard">
                          <span>📊</span>
                        </div>
                        <div className="type-content">
                          <h4>Hard Credit Inquiry</h4>
                          <p>If you proceed with a loan, the lender may perform this. Can affect your credit score.</p>
                        </div>
                      </div>
                    </div>

                    <div className="important-note">
                      <div className="note-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <p>
                        <strong>Important:</strong> Missing or late payments can hurt your credit score and stay on your credit report for years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Debt Collection Card */}
              <div className="info-card-wrapper">
                <button 
                  className="info-card-header"
                  onClick={() => toggleSection('debtCollection')}
                >
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V22H4V20Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Debt Collection Process</h3>
                  <div className="card-toggle">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={expandedSections.debtCollection ? 'expanded' : ''}
                    >
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`info-card-content ${expandedSections.debtCollection ? 'expanded' : ''}`}
                  style={{ maxHeight: expandedSections.debtCollection ? '500px' : '0' }}
                >
                  <div className="card-body">
                    <div className="role-disclaimer">
                      <div className="disclaimer-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 17V16.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 13.5001L12.0083 7.50012" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="disclaimer-content">
                        <h4>Our Role in Debt Collection</h4>
                        <p>
                          speedyy Loan Center does not collect payments and does not handle debt collection.
                        </p>
                      </div>
                    </div>

                    <div className="process-info">
                      <h4>What happens if you don't repay:</h4>
                      <ol>
                        <li>The lender may contact you to collect the debt</li>
                        <li>Collection rules are explained in your loan agreement</li>
                        <li>If you have questions about payments or collections, contact your lender directly</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Time Card */}
              <div className="info-card-wrapper">
                <button 
                  className="info-card-header"
                  onClick={() => toggleSection('fundingTime')}
                >
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Funding Time & Process</h3>
                  <div className="card-toggle">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={expandedSections.fundingTime ? 'expanded' : ''}
                    >
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`info-card-content ${expandedSections.fundingTime ? 'expanded' : ''}`}
                  style={{ maxHeight: expandedSections.fundingTime ? '500px' : '0' }}
                >
                  <div className="card-body">
                    <div className="funding-notice">
                      <p>
                        If a lender approves your loan, the time it takes to receive funds can vary. 
                        speedy Loan Center does not control funding times.
                      </p>
                    </div>

                    <div className="factors-list">
                      <h4>Funding time depends on:</h4>
                      <div className="factors-grid">
                        <div className="factor-item">
                          <div className="factor-icon">
                            <span>🏦</span>
                          </div>
                          <span>The lender's processing time</span>
                        </div>
                        <div className="factor-item">
                          <div className="factor-icon">
                            <span>💳</span>
                          </div>
                          <span>Your bank's processing speedy</span>
                        </div>
                        <div className="factor-item">
                          <div className="factor-icon">
                            <span>📅</span>
                          </div>
                          <span>Day and time of approval</span>
                        </div>
                        <div className="factor-item">
                          <div className="factor-icon">
                            <span>🔄</span>
                          </div>
                          <span>Transaction method used</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Role Card */}
              <div className="info-card-wrapper">
                <button 
                  className="info-card-header"
                  onClick={() => toggleSection('ourRole')}
                >
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Our Role & Responsibilities</h3>
                  <div className="card-toggle">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={expandedSections.ourRole ? 'expanded' : ''}
                    >
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`info-card-content ${expandedSections.ourRole ? 'expanded' : ''}`}
                  style={{ maxHeight: expandedSections.ourRole ? '500px' : '0' }}
                >
                  <div className="card-body">
                    <div className="role-description">
                      <p>
                        speedy Loan Center helps connect you with lenders — we do not provide loans directly.
                      </p>
                    </div>

                    <div className="responsibilities">
                      <h4>What We Do:</h4>
                      <ul className="responsibilities-list">
                        <li>
                          <span className="list-icon green">✓</span>
                          <span>Connect borrowers with potential lenders</span>
                        </li>
                        <li>
                          <span className="list-icon green">✓</span>
                          <span>Provide educational resources</span>
                        </li>
                        <li>
                          <span className="list-icon green">✓</span>
                          <span>Facilitate the initial application process</span>
                        </li>
                      </ul>

                      <h4>What We Don't Do:</h4>
                      <ul className="responsibilities-list">
                        <li>
                          <span className="list-icon red">✗</span>
                          <span>Make loan approval decisions</span>
                        </li>
                        <li>
                          <span className="list-icon red">✗</span>
                          <span>Set loan terms or interest rates</span>
                        </li>
                        <li>
                          <span className="list-icon red">✗</span>
                          <span>Control fees or repayment rules</span>
                        </li>
                        <li>
                          <span className="list-icon red">✗</span>
                          <span>Provide the loan funds directly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="final-note">
                      <p>
                        <strong>Important:</strong> All loan decisions and terms come directly from the lender. 
                        We are here to help you through the process, but the lender makes all final decisions.
                      </p>
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
            <div className="action-content">
              <div className="action-text">
                <h2>Ready to Apply?</h2>
                <p>
                  Now that you understand the important details, you're ready to proceed 
                  with your loan application.
                </p>
              </div>
              <div className="action-buttons">
                <Link href="/apply-loan" className="btn btn-primary">
                  Start Application
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Link>
                <Link href="/faq" className="btn btn-outline">
                  Read More FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .before-apply-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .page-content {
          padding-bottom: 80px;
        }

        /* Hero Section */
        .hero-section {
          padding: 80px 0 60px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #0ea5e9, transparent);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          color: #0c4a6e;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 20px;
          font-weight: 500;
          color: #475569;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
        }

        .btn-secondary {
          background: white;
          color: #0ea5e9;
          border: 2px solid #0ea5e9;
        }

        .btn-secondary:hover {
          background: #f0f9ff;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #0ea5e9;
          border: 2px solid #0ea5e9;
        }

        .btn-outline:hover {
          background: #0ea5e9;
          color: white;
        }

        .hero-visual .info-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: 1px solid #e0f2fe;
          animation: float 3s ease-in-out infinite;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .card-header svg {
          color: #10b981;
        }

        .card-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #1e293b;
        }

        .info-card p {
          margin: 0;
          color: #475569;
          line-height: 1.6;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
          color: #0ea5e9;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tagline-shape {
          width: 40px;
          height: 2px;
          background: #0ea5e9;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 18px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Info Cards Grid */
        .info-cards-section {
          padding: 60px 0;
        }

        .info-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .info-card-wrapper {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .info-card-wrapper:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .info-card-header {
          width: 100%;
          padding: 28px 32px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          text-align: left;
        }

        .card-icon {
          color: #0ea5e9;
          flex-shrink: 0;
        }

        .card-title {
          flex: 1;
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #1e293b;
        }

        .card-toggle svg {
          transition: transform 0.3s ease;
        }

        .card-toggle svg.expanded {
          transform: rotate(180deg);
        }

        .info-card-content {
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .card-body {
          padding: 0 32px 32px;
        }

        .card-intro {
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 24px;
        }

        /* Warning Box */
        .warning-box {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 24px;
          display: flex;
          gap: 16px;
        }

        .warning-icon {
          color: #dc2626;
          flex-shrink: 0;
        }

        .warning-content {
          color: #7f1d1d;
        }

        /* Lists */
        .consequences-list h4,
        .process-info h4,
        .factors-list h4,
        .responsibilities h4 {
          color: #1e293b;
          margin-bottom: 16px;
          font-size: 18px;
        }

        .consequences-list ul,
        .responsibilities-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .consequences-list li,
        .responsibilities-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          color: #475569;
        }

        .list-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .list-icon.green {
          background: #d1fae5;
          color: #059669;
          border-radius: 50%;
        }

        .list-icon.red {
          background: #fee2e2;
          color: #dc2626;
          border-radius: 50%;
        }

        /* Credit Types */
        .credit-types {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .credit-type {
          background: #f8fafc;
          border-radius: 8px;
          padding: 20px;
          border: 1px solid #e2e8f0;
        }

        .type-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          font-size: 20px;
        }

        .type-icon.soft {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .type-icon.hard {
          background: #fef3c7;
          color: #d97706;
        }

        .type-content h4 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 16px;
        }

        .type-content p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Important Note */
        .important-note {
          background: #fefce8;
          border: 1px solid #fde047;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .note-icon {
          color: #ca8a04;
          flex-shrink: 0;
        }

        .important-note p {
          margin: 0;
          color: #713f12;
        }

        /* Role Disclaimer */
        .role-disclaimer {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .disclaimer-icon {
          color: #0284c7;
          flex-shrink: 0;
        }

        .disclaimer-content h4 {
          margin: 0 0 8px 0;
          color: #0c4a6e;
        }

        .disclaimer-content p {
          margin: 0;
          color: #0369a1;
        }

        /* Process Info */
        .process-info ol {
          padding-left: 20px;
          margin: 0;
          color: #475569;
        }

        .process-info li {
          margin-bottom: 8px;
          line-height: 1.6;
        }

        /* Funding Notice */
        .funding-notice {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 24px;
          color: #166534;
        }

        /* Factors Grid */
        .factors-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .factor-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #475569;
        }

        .factor-icon {
          width: 40px;
          height: 40px;
          background: #f1f5f9;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        /* Role Description */
        .role-description {
          background: #faf5ff;
          border: 1px solid #e9d5ff;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 24px;
          color: #6b21a8;
        }

        /* Responsibilities */
        .responsibilities h4 {
          margin-top: 20px;
          margin-bottom: 12px;
        }

        /* Final Note */
        .final-note {
          background: #fef3c7;
          border: 1px solid #fcd34d;
          border-radius: 8px;
          padding: 20px;
          margin-top: 24px;
          color: #92400e;
        }

        /* Action Section */
        .action-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
        }

        .action-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .action-text h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 16px;
          color: white;
        }

        .action-text p {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .action-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 40px;
          }

          .section-title {
            font-size: 32px;
          }

          .credit-types {
            grid-template-columns: 1fr;
          }

          .factors-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 0 40px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-description {
            font-size: 16px;
          }

          .section-title {
            font-size: 28px;
          }

          .info-card-header {
            padding: 20px;
            gap: 16px;
          }

          .card-body {
            padding: 0 20px 20px;
          }

          .card-title {
            font-size: 18px;
          }

          .action-text h2 {
            font-size: 28px;
          }

          .action-text p {
            font-size: 16px;
          }

          .btn {
            padding: 12px 24px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
          }

          .action-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .info-card-header {
            padding: 16px;
          }

          .card-body {
            padding: 0 16px 16px;
          }
        }
      `}</style>
    </div>
  );
}