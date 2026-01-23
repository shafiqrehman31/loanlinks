'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';

type FAQItem = {
  question: string;
  answer: string;
};

const faqCategories = {
  general: [
    {
      question: "What is Speedy Loan Center?",
      answer: "Speedy Loan Center provides fast and reliable loans with a simple online process. We focus on clear terms, no hidden fees, and quick access to funds.",
    },
    {
      question: "What is a loan?",
      answer: "A loan is an unsecured loan for expenses or emergencies. Speedy Loan Center offers loans from $100 up to $5,000, repaid in convenient monthly installments.",
    },
    {
      question: "How much can I borrow?",
      answer: "You can borrow anywhere from $100 up to $5,000, depending on your income, credit profile, and eligibility.",
    },
    {
      question: "Are loans available in my state?",
      answer: "Loan availability depends on state regulations. Once you apply, we will provide options that are available in your state.",
    },
    {
      question: "Can I qualify for a loan?",
      answer: "To be eligible, you must be at least 18 years old, have a valid checking account, a permanent U.S. address, and a steady source of income.",
    },
  ],

  credit: [
    {
      question: "Will you check my credit score?",
      answer: "We may perform a soft credit check to show your loan options — this does not impact your credit score. Before final approval, a lender may perform a hard inquiry to verify your information, which will appear on your credit report.",
    },
    {
      question: "Can I apply with bad credit?",
      answer: "Yes! We consider applicants from all credit backgrounds. While credit history may affect terms, income, employment stability, and debt-to-income ratio are also considered.",
    },
  ],

  process: [
    {
      question: "How do I get the money?",
      answer: "Complete our online loan request form. Once approved, funds are transferred directly to your bank account, usually within one business day.",
    },
    {
      question: "How long does the loan process take?",
      answer: "Most applicants see loan options within minutes. Once approved, funds are typically available the same day or the next business day.",
    },
    {
      question: "When do I repay the loan?",
      answer: "Repayments are automatically deducted from your checking account on the agreed monthly date.",
    },
    {
      question: "What if I miss a payment?",
      answer: "Contact us immediately. We can help arrange a new payment plan or provide guidance to avoid unnecessary fees.",
    },
  ],

  fees: [
    {
      question: "Are there any fees or interest?",
      answer: "Fees and interest depend on your loan amount and lender terms. All costs are clearly disclosed before you accept the loan — no hidden charges.",
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Yes, you can repay your loan early without prepayment penalties. Early repayment can save you money on interest.",
    },
  ],

  security: [
    {
      question: "How do you protect my information?",
      answer: "Your privacy and security are our top priority. Speedy Loan Center uses encryption technology to keep your information safe. See our Privacy Policy for details.",
    },
  ],
};

type FaqCategoryKey = keyof typeof faqCategories;

// Helper to format category names for display
const formatCategoryName = (key: string): string => {
  const words = key.replace(/([A-Z])/g, ' $1').toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openCategory, setOpenCategory] =
    useState<FaqCategoryKey>('general');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (category: FaqCategoryKey) => {
    setOpenCategory(category);
    setOpenIndex(null);
  };

  return (
    <div className="faq-page">
      <PageHeader title="Frequently Asked Questions" />
      
      <section className="faq-section">
        <div className="container">
          <div className="faq-content-wrapper">
            {/* Categories Sidebar */}
            <div className="faq-categories-sidebar">
              <div className="categories-header">
                <h3>Categories</h3>
                <div className="category-count">
                  {faqCategories[openCategory].length} Questions
                </div>
              </div>
              
              <nav className="categories-nav">
                {(Object.keys(faqCategories) as FaqCategoryKey[]).map(
                  (category) => (
                    <button
                      key={category}
                      className={`category-btn ${
                        openCategory === category ? 'active' : ''
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      <span className="category-name">
                        {formatCategoryName(category)}
                      </span>
                      <span className="category-indicator"></span>
                    </button>
                  )
                )}
              </nav>
              
              <div className="help-box">
                <h4>Need More Help?</h4>
                <p>Can't find what you're looking for?</p>
                <Link href="/contact" className="help-link">
                  Contact Support
                </Link>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="faq-content-main">
              <div className="faq-header">
                <h1 className="faq-title">
                  {formatCategoryName(openCategory)} Questions
                </h1>
                <p className="faq-subtitle">
                  Find answers to common questions about {formatCategoryName(openCategory).toLowerCase()}
                </p>
              </div>

              <div className="faq-accordion">
                {faqCategories[openCategory].map(
                  (faq: FAQItem, index: number) => (
                    <div
                      key={index}
                      className={`faq-accordion-item ${
                        openIndex === index ? 'active' : ''
                      }`}
                    >
                      <button
                        className="faq-accordion-header"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                      >
                        <span className="question-text">
                          {faq.question}
                        </span>
                        <span className="accordion-icon">
                          {openIndex === index ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          )}
                        </span>
                      </button>
                      
                      <div 
                        className={`faq-accordion-content ${
                          openIndex === index ? 'open' : ''
                        }`}
                        style={{
                          maxHeight: openIndex === index ? '500px' : '0'
                        }}
                      >
                        <div className="content-inner">
                          <p className="answer-text">{faq.answer}</p>
                          
                          {faq.question.toLowerCase().includes('apply') && (
                            <Link href="/apply-loan" className="apply-link">
                              Apply Now
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              
              <div className="faq-footer">
                <p>Still have questions? Check our <Link href="/contact">Contact Us</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .faq-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .faq-section {
          padding: 60px 0 100px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .faq-content-wrapper {
          display: flex;
          gap: 40px;
          position: relative;
        }

        /* Categories Sidebar Styles */
        .faq-categories-sidebar {
          flex: 0 0 280px;
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .categories-header {
          background: white;
          padding: 24px;
          border-radius: 12px 12px 0 0;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .categories-header h3 {
          margin: 0 0 8px 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
        }

        .category-count {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .categories-nav {
          background: white;
          padding: 16px;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        }

        .category-btn {
          width: 100%;
          padding: 14px 16px;
          margin-bottom: 8px;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
          color: #475569;
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }

        .category-btn:hover {
          background: #f1f5f9;
          color: #334155;
          transform: translateX(2px);
        }

        .category-btn.active {
          background: linear-gradient(135deg, #e45551 0%, #d6423e 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(228, 85, 81, 0.25);
        }

        .category-btn.active:hover {
          background: linear-gradient(135deg, #d6423e 0%, #c82f2b 100%);
          transform: none;
        }

        .category-indicator {
          width: 6px;
          height: 6px;
          background: currentColor;
          border-radius: 50%;
          opacity: 0.6;
        }

        .category-btn.active .category-indicator {
          background: white;
          opacity: 1;
        }

        .help-box {
          margin-top: 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 24px;
          border-radius: 12px;
          color: white;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
        }

        .help-box h4 {
          margin: 0 0 8px 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .help-box p {
          margin: 0 0 16px 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .help-link {
          display: inline-block;
          padding: 10px 20px;
          background: white;
          color: #667eea;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .help-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        /* FAQ Content Styles */
        .faq-content-main {
          flex: 1;
          min-width: 0;
        }

        .faq-header {
          margin-bottom: 32px;
        }

        .faq-title {
          margin: 0 0 12px 0;
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
        }

        .faq-subtitle {
          margin: 0;
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.5;
        }

        /* Accordion Styles */
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-accordion-item {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .faq-accordion-item:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .faq-accordion-item.active {
          border-color: #e45551;
          box-shadow: 0 4px 20px rgba(228, 85, 81, 0.15);
        }

        .faq-accordion-header {
          width: 100%;
          padding: 24px;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          transition: background-color 0.2s ease;
        }

        .faq-accordion-header:hover {
          background: #f8fafc;
        }

        .question-text {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.4;
        }

        .accordion-icon {
          flex-shrink: 0;
          color: #64748b;
          transition: transform 0.3s ease;
        }

        .faq-accordion-item.active .accordion-icon {
          color: #e45551;
        }

        .faq-accordion-content {
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .content-inner {
          padding: 0 24px 24px;
        }

        .answer-text {
          margin: 0 0 20px 0;
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
        }

        .apply-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #e45551 0%, #d6423e 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .apply-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(228, 85, 81, 0.3);
        }

        .apply-link svg {
          transition: transform 0.2s ease;
        }

        .apply-link:hover svg {
          transform: translateX(4px);
        }

        /* Footer */
        .faq-footer {
          margin-top: 48px;
          padding: 24px;
          background: white;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .faq-footer p {
          margin: 0;
          color: #64748b;
        }

        .faq-footer a {
          color: #e45551;
          text-decoration: none;
          font-weight: 600;
        }

        .faq-footer a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .faq-content-wrapper {
            flex-direction: column;
            gap: 32px;
          }
          
          .faq-categories-sidebar {
            flex: none;
            position: static;
            width: 100%;
          }
          
          .faq-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 40px 0 60px;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .faq-title {
            font-size: 1.5rem;
          }
          
          .faq-subtitle {
            font-size: 1rem;
          }
          
          .faq-accordion-header {
            padding: 20px;
          }
          
          .content-inner {
            padding: 0 20px 20px;
          }
          
          .question-text {
            font-size: 1rem;
          }
          
          .help-box {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .faq-accordion-header {
            padding: 18px;
          }
          
          .content-inner {
            padding: 0 18px 18px;
          }
          
          .apply-link {
            width: 100%;
            justify-content: center;
          }
        }

        /* Animation for accordion */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-accordion-content.open .content-inner {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}