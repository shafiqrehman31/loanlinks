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
      question: "What is Speed Loan Center?",
      answer:
        "Speed Loan Center is a leading online lending platform that provides fast, transparent, and accessible loan solutions."
    },
    {
      question: "How is Speed Loan Center different from banks?",
      answer:
        "We provide approvals within 24 hours with minimal documentation and flexible repayment options."
    }
  ],
  eligibility: [
    {
      question: "What are the eligibility criteria?",
      answer:
        "You must be at least 21 years old with a stable income and valid government ID."
    }
  ],
  application: [
    {
      question: "How do I apply?",
      answer:
        "Fill out our online application, upload documents, and get approval within 24 hours."
    }
  ],
  loanDetails: [
    {
      question: "What loan amounts are available?",
      answer:
        "Loan amounts range from ₹50,000 to ₹50,00,000 depending on eligibility."
    }
  ],
  disbursement: [
    {
      question: "When will I receive the funds?",
      answer:
        "Funds are disbursed within 1–2 business days after approval."
    }
  ],
  repayment: [
    {
      question: "What repayment options are available?",
      answer:
        "EMI auto-debit, UPI, net banking, and cheque payments are supported."
    }
  ]
};

type FaqCategoryKey = keyof typeof faqCategories;

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
      <PageHeader title="FAQ" />

      <section className="section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="faq-categories">
                <h4>Categories</h4>
                <ul>
                  {(Object.keys(faqCategories) as FaqCategoryKey[]).map(
                    (category) => (
                      <li key={category}>
                        <button
                          className={openCategory === category ? 'active' : ''}
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <h2 className="faq-title">
                {openCategory.toUpperCase()} QUESTIONS
              </h2>

              {faqCategories[openCategory].map(
                (faq: FAQItem, index: number) => (
                  <div
                    key={index}
                    className={`faq-item ${
                      openIndex === index ? 'active' : ''
                    }`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                      <span>{openIndex === index ? '−' : '+'}</span>
                    </button>

                    {openIndex === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>

                        {faq.question.toLowerCase().includes('apply') && (
                          <Link href="/apply-loan">Apply Now</Link>
                        )}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .section-space {
          padding: 80px 0;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
        }

        .col-lg-3 {
          width: 25%;
        }

        .col-lg-9 {
          width: 75%;
        }

        @media (max-width: 991px) {
          .col-lg-3,
          .col-lg-9 {
            width: 100%;
          }
        }

        .faq-categories button {
          width: 100%;
          padding: 12px;
          margin-bottom: 8px;
          border: none;
          cursor: pointer;
          background: #f5f5f5;
        }

        .faq-categories button.active {
          background: #e45551;
          color: #fff;
        }

        .faq-item {
          border: 1px solid #ddd;
          margin-bottom: 10px;
          border-radius: 6px;
        }

        .faq-question {
          width: 100%;
          padding: 15px;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          cursor: pointer;
        }

        .faq-answer {
          padding: 15px;
          background: #fafafa;
        }

        .faq-title {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
