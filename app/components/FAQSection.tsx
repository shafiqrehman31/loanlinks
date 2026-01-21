'use client';

import { useState } from 'react';

const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General' },
  { id: 'application', name: 'Application' },
  { id: 'payment', name: 'Payment' },
  { id: 'eligibility', name: 'Eligibility' },
];

const faqItems = [
  {
    id: 1,
    question: "What documents are required for a loan application?",
    answer: "Typically, you'll need proof of identity (passport/driver's license), proof of income (pay stubs/tax returns), bank statements, and proof of address. Specific requirements may vary based on the loan type.",
    category: 'application',
    isOpen: false,
  },
  {
    id: 2,
    question: "How long does the loan approval process take?",
    answer: "Our standard loan approval process takes 24-48 hours for most applications. However, some specialized loans or applications requiring additional documentation may take 3-5 business days.",
    category: 'application',
    isOpen: false,
  },
  {
    id: 3,
    question: "What interest rates do you offer?",
    answer: "Interest rates vary based on loan type, amount, term length, and your credit profile. Our rates start from 4.5% APR for secured loans and 6.5% APR for unsecured loans. Contact us for a personalized rate quote.",
    category: 'payment',
    isOpen: false,
  },
  {
    id: 4,
    question: "Can I apply for a loan with bad credit?",
    answer: "Yes, we consider applications from all credit backgrounds. While credit score affects terms, we evaluate multiple factors including income stability, employment history, and debt-to-income ratio.",
    category: 'eligibility',
    isOpen: false,
  },
  {
    id: 5,
    question: "What is the maximum loan amount I can borrow?",
    answer: "Maximum loan amounts vary by loan type: Personal loans up to $50,000, Business loans up to $500,000, and Home loans up to $2,000,000. Actual approval depends on your financial profile.",
    category: 'general',
    isOpen: false,
  },
  {
    id: 6,
    question: "Are there any hidden fees or charges?",
    answer: "No hidden fees. All charges are clearly outlined in your loan agreement. This includes origination fees (0-5%), late payment fees, and prepayment penalties (if applicable). We believe in complete transparency.",
    category: 'payment',
    isOpen: false,
  },
  {
    id: 7,
    question: "Can I pay off my loan early?",
    answer: "Yes, you can pay off your loan early without any prepayment penalties. Early repayment can save you money on interest charges.",
    category: 'payment',
    isOpen: false,
  },
  {
    id: 8,
    question: "What happens if I miss a payment?",
    answer: "If you miss a payment, we recommend contacting us immediately. We offer grace periods and flexible payment arrangements to help you get back on track without damaging your credit score.",
    category: 'payment',
    isOpen: false,
  },
];

interface FAQItemProps {
  item: {
    id: number;
    question: string;
    answer: string;
    category: string;
    isOpen: boolean;
  };
  toggleFAQ: (id: number) => void;
}

function FAQItem({ item, toggleFAQ }: FAQItemProps) {
  return (
    <div className={`faq-item ${item.isOpen ? 'active' : ''}`}>
      <button 
        className="faq-question"
        onClick={() => toggleFAQ(item.id)}
        aria-expanded={item.isOpen}
      >
        <span className="question-text">{item.question}</span>
        <span className="toggle-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {item.isOpen ? (
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </span>
      </button>
      <div 
        className="faq-answer" 
        style={{ 
          maxHeight: item.isOpen ? '500px' : '0',
          opacity: item.isOpen ? 1 : 0
        }}
      >
        <div className="answer-content">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState(faqItems);
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleFAQ = (id: number) => {
    setFaqs(faqs.map(item => ({
      ...item,
      isOpen: item.id === id ? !item.isOpen : false
    })));
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(item => item.category === activeCategory);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tagline">
            <span className="tagline-shape"></span>
            <span>frequently asked questions</span>
            <span className="tagline-shape"></span>
          </div>
          <h2 className="section-title">
            Answers to Your <br /> Common Questions
          </h2>
          <p className="section-description">
            Everything you need to know about our loan services. Can't find the answer you're looking for? 
            Contact our friendly team.
          </p>
        </div>
        
        {/* FAQ Categories Filter */}
        <div className="faq-filter">
          <div className="filter-buttons">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <span className="active-indicator"></span>
                )}
              </button>
            ))}
          </div>
          <div className="filter-status">
            Showing {filteredFaqs.length} of {faqs.length} questions
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item) => (
              <FAQItem key={item.id} item={item} toggleFAQ={toggleFAQ} />
            ))
          ) : (
            <div className="no-results">
              <p>No questions found for this category.</p>
            </div>
          )}
        </div>
        
        {/* Contact CTA */}
        <div className="faq-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Our support team is here to help!</p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                <span>Get in Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="/apply-loan" className="btn btn-secondary">
                Apply for Loan
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }

        .faq-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e45551, transparent);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
          color: #e45551;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tagline-shape {
          width: 40px;
          height: 2px;
          background: #e45551;
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-description {
          font-size: 18px;
          line-height: 1.6;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        /* FAQ Filter */
        .faq-filter {
          margin-bottom: 40px;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 16px;
        }

        .filter-btn {
          padding: 12px 24px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .filter-btn:hover {
          border-color: #e45551;
          color: #e45551;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(228, 85, 81, 0.1);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #e45551 0%, #d6423e 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 16px rgba(228, 85, 81, 0.2);
        }

        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: white;
          border-radius: 2px;
        }

        .filter-status {
          text-align: center;
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
        }

        /* FAQ Accordion */
        .faq-accordion {
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .faq-item {
          background: white;
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .faq-item.active {
          border-color: #e45551;
          box-shadow: 0 8px 24px rgba(228, 85, 81, 0.12);
        }

        .faq-question {
          width: 100%;
          padding: 24px 30px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
          gap: 20px;
        }

        .question-text {
          flex: 1;
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.4;
        }

        .toggle-icon {
          flex-shrink: 0;
          color: #64748b;
          transition: all 0.3s ease;
        }

        .faq-item.active .toggle-icon {
          color: #e45551;
          transform: rotate(180deg);
        }

        .faq-answer {
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .answer-content {
          padding: 0 30px 30px;
        }

        .answer-content p {
          margin: 0;
          color: #475569;
          font-size: 16px;
          line-height: 1.6;
        }

        .no-results {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 12px;
          border: 2px dashed #e2e8f0;
        }

        .no-results p {
          color: #94a3b8;
          font-size: 16px;
        }

        /* CTA Section */
        .faq-cta {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: 16px;
          padding: 50px;
          color: white;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-text h3 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
          color: white;
        }

        .cta-text p {
          font-size: 18px;
          line-height: 1.6;
          color: #cbd5e1;
          margin-bottom: 32px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 16px 32px;
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
          background: linear-gradient(135deg, #e45551 0%, #d6423e 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(228, 85, 81, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .faq-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 32px;
          }

          .section-description {
            font-size: 16px;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-btn {
            padding: 10px 20px;
            font-size: 14px;
          }

          .faq-question {
            padding: 20px;
          }

          .question-text {
            font-size: 16px;
          }

          .answer-content {
            padding: 0 20px 20px;
          }

          .faq-cta {
            padding: 40px 20px;
          }

          .cta-text h3 {
            font-size: 24px;
          }

          .cta-text p {
            font-size: 16px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .section-tagline {
            flex-direction: column;
            gap: 8px;
          }

          .section-title {
            font-size: 28px;
          }

          .faq-question {
            padding: 16px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
        }

        /* Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-item {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
}