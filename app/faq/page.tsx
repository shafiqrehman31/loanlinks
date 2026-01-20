// app/faq/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openCategory, setOpenCategory] = useState<string>('general');

  // FAQ data organized by categories
  const faqCategories = {
    general: [
      {
        question: "What is Speed Loan Center?",
        answer: "Speed Loan Center is a leading online lending platform that provides fast, transparent, and accessible loan solutions to individuals and businesses. We specialize in quick loan approvals with minimal paperwork and competitive interest rates."
      },
      {
        question: "How is Speed Loan Center different from traditional banks?",
        answer: "Unlike traditional banks that can take weeks for approval, we provide loan decisions within 24 hours. Our application process is 100% online, requires minimal documentation, and offers flexible repayment options tailored to your needs."
      },
      {
        question: "Is my personal and financial information secure?",
        answer: "Yes, absolutely. We use bank-level 256-bit SSL encryption to protect all your data. Our security protocols comply with industry standards, and we never share your information with third parties without your consent."
      }
    ],
    eligibility: [
      {
        question: "What are the basic eligibility criteria?",
        answer: "To be eligible, you must: be at least 21 years old, have a regular source of income (employed, self-employed, or business owner), have a valid government ID, and maintain a good credit history. Specific criteria may vary based on the loan type."
      },
      {
        question: "Can I apply if I have a low credit score?",
        answer: "Yes, we consider applications from individuals with various credit backgrounds. While a good credit score helps, we assess multiple factors including income stability, employment history, and repayment capacity."
      },
      {
        question: "Do self-employed individuals qualify for loans?",
        answer: "Yes, self-employed individuals and business owners can apply. You'll need to provide business registration documents, bank statements for the last 6 months, and income tax returns for the last 2 years."
      },
      {
        question: "What is the minimum age requirement?",
        answer: "You must be at least 21 years old to apply for a loan. For education loans, students can apply with a co-applicant (parent or guardian) who meets the age and income requirements."
      }
    ],
    application: [
      {
        question: "How do I apply for a loan?",
        answer: "Applying is simple: 1) Visit our website and click 'Apply Now', 2) Fill out the online application form (takes 5 minutes), 3) Upload required documents, 4) Get instant eligibility check, 5) Receive approval within 24 hours."
      },
      {
        question: "What documents do I need to apply?",
        answer: "Basic documents include: Government ID proof (Aadhaar, PAN, Passport), Address proof, Income proof (salary slips/bank statements), and passport-size photographs. Specific requirements vary by loan type."
      },
      {
        question: "How long does the application process take?",
        answer: "The online application takes about 5 minutes. Once submitted, you'll receive an eligibility check instantly. Complete applications with all documents are typically approved within 24 hours."
      },
      {
        question: "Can I track my application status?",
        answer: "Yes, you can track your application status in real-time through your customer portal. You'll also receive SMS and email updates at every stage of the process."
      }
    ],
    loanDetails: [
      {
        question: "What loan amounts are available?",
        answer: "We offer loans ranging from ₹50,000 to ₹50,00,000, depending on your eligibility, income, and credit profile. The exact amount is determined after assessing your repayment capacity."
      },
      {
        question: "What are the interest rates?",
        answer: "Our interest rates range from 10.5% to 18% per annum, depending on the loan type, amount, tenure, and your credit profile. We offer some of the most competitive rates in the industry."
      },
      {
        question: "What is the loan tenure period?",
        answer: "Loan tenures range from 12 months to 60 months (5 years). You can choose a tenure that best suits your repayment capacity. Longer tenures mean lower EMIs but higher total interest."
      },
      {
        question: "Are there any processing fees or hidden charges?",
        answer: "We charge a nominal processing fee of 1-2% of the loan amount, which is clearly mentioned during application. There are NO hidden charges - all fees are transparently displayed upfront."
      }
    ],
    disbursement: [
      {
        question: "How soon will I receive the funds after approval?",
        answer: "Once approved, funds are typically disbursed within 1-2 business days directly to your registered bank account. In urgent cases, we offer same-day disbursement for eligible customers."
      },
      {
        question: "Can the loan amount be increased after approval?",
        answer: "Yes, existing customers with good repayment history can apply for a loan top-up. The approval depends on your current repayment capacity and credit behavior since the original loan."
      },
      {
        question: "What happens if I want to close my loan early?",
        answer: "You can prepay your loan anytime after 6 months of disbursement. We charge NO prepayment penalty for most loan types. Early closure can save you significant interest costs."
      }
    ],
    repayment: [
      {
        question: "What are the repayment options?",
        answer: "We offer flexible repayment options: EMI through auto-debit from your bank account, online payments via net banking/UPI, cheque payments, or cash deposits at our partner banks."
      },
      {
        question: "Can I change my EMI date?",
        answer: "Yes, you can request an EMI date change once during your loan tenure. This service is available through your customer portal or by contacting our customer support."
      },
      {
        question: "What happens if I miss an EMI payment?",
        answer: "If you miss an EMI, we offer a 15-day grace period. Late payment charges apply after this period. We recommend contacting our support team immediately if you anticipate payment difficulties."
      },
      {
        question: "Are there any penalties for late payment?",
        answer: "Late payment charges are 2% per month on the overdue amount. However, we encourage customers to contact us before missing payments - we may offer restructuring options."
      }
    ]
  };

  // Stats data
  const stats = [
    { number: "24", label: "Hours Approval", suffix: "" },
    { number: "50,000", label: "Happy Customers", suffix: "+" },
    { number: "99", label: "Customer Satisfaction", suffix: "%" },
    { number: "15", label: "Minute Application", suffix: "" }
  ];

  // Popular questions for quick access
  const popularQuestions = [
    "How do I check my loan eligibility?",
    "What documents do I need for a personal loan?",
    "Can I prepay my loan without penalty?",
    "How is the interest rate calculated?",
    "What if I have a low credit score?"
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (category: string) => {
    setOpenCategory(category);
    setOpenIndex(null); // Reset open FAQ when changing category
  };

  // Scroll to FAQ when clicking popular question
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="faq-page">
         <PageHeader title="FAQ" />
      {/* Hero Section */}
      <section className="faq-hero section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">frequently asked questions</h6>
                </div>
                <h1 className="sec-title__title">
                  Find Answers to Your <span className="text-primary">Questions</span>
                </h1>
                <p className="faq-hero__text">
                  Get all the information you need about our loan products, application process, 
                  eligibility criteria, and more. Can't find what you're looking for? Contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="faq-stats section-space" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="stat-card wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                  <div className="stat-card__number">
                    {stat.number}<span className="stat-card__suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-card__label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="popular-questions section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-header text-center">
                <h3 className="section-header__title">Most Popular Questions</h3>
                <p className="section-header__text">Quick answers to questions we get asked the most</p>
              </div>
              
              <div className="popular-questions__grid">
                {popularQuestions.map((question, index) => (
                  <div key={index} className="popular-question-card">
                    <div className="popular-question-card__content">
                      <div className="popular-question-card__icon">?</div>
                      <h4 className="popular-question-card__title">{question}</h4>
                    </div>
                    <button 
                      className="popular-question-card__button"
                      onClick={scrollToFAQ}
                    >
                      Find Answer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section id="faq-section" className="main-faq section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* FAQ Categories */}
              <div className="faq-categories">
                <h4 className="faq-categories__title">Browse by Category</h4>
                <ul className="faq-categories__list">
                  {Object.keys(faqCategories).map((category) => (
                    <li key={category}>
                      <button
                        className={`faq-category-btn ${openCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                      >
                        <span className="faq-category-btn__icon">
                          {category === 'general' && '🏠'}
                          {category === 'eligibility' && '📋'}
                          {category === 'application' && '📝'}
                          {category === 'loanDetails' && '💰'}
                          {category === 'disbursement' && '⚡'}
                          {category === 'repayment' && '🔄'}
                        </span>
                        <span className="faq-category-btn__text">
                          {category === 'general' && 'General'}
                          {category === 'eligibility' && 'Eligibility'}
                          {category === 'application' && 'Application'}
                          {category === 'loanDetails' && 'Loan Details'}
                          {category === 'disbursement' && 'Disbursement'}
                          {category === 'repayment' && 'Repayment'}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="col-lg-9">
              {/* FAQ Accordion */}
              <div className="faq-accordion">
                <h3 className="faq-accordion__title">
                  {openCategory === 'general' && 'General Questions'}
                  {openCategory === 'eligibility' && 'Eligibility Criteria'}
                  {openCategory === 'application' && 'Application Process'}
                  {openCategory === 'loanDetails' && 'Loan Details'}
                  {openCategory === 'disbursement' && 'Disbursement'}
                  {openCategory === 'repayment' && 'Repayment'}
                </h3>
                
                <div className="faq-accordion__content">
                  {faqCategories[openCategory].map((faq, index) => (
                    <div 
                      key={index} 
                      className={`faq-item ${openIndex === index ? 'active' : ''}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                      >
                        <span className="faq-question__text">{faq.question}</span>
                        <span className="faq-question__icon">
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                      
                      <div 
                        className="faq-answer"
                        style={{ 
                          maxHeight: openIndex === index ? '500px' : '0',
                          opacity: openIndex === index ? '1' : '0'
                        }}
                      >
                        <div className="faq-answer__content">
                          <p>{faq.answer}</p>
                          
                          {/* Additional resources for certain questions */}
                          {faq.question.includes('documents') && (
                            <div className="faq-resources">
                              <strong>Quick Links:</strong>
                              <ul>
                                <li><Link href="/how-it-works">View complete document checklist</Link></li>
                                <li><Link href="/apply-loan">Start your application</Link></li>
                              </ul>
                            </div>
                          )}
                          
                          {faq.question.includes('interest rate') && (
                            <div className="faq-resources">
                              <strong>Use our EMI Calculator to estimate your monthly payments.</strong>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="faq-cta section-space" style={{ background: 'linear-gradient(135deg, #E45551 0%, #ff7a75 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-cta__content">
                <h2 className="faq-cta__title">Still Have Questions?</h2>
                <p className="faq-cta__text">
                  Our customer support team is available 24/7 to help you with any queries.
                  Get instant answers via chat or schedule a callback.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="faq-cta__buttons">
                <a href="tel:+9156980036420" className="easilon-btn easilon-btn--light">
                  <span>Call Now</span>
                  <span className="easilon-btn__icon">📞</span>
                </a>
                <Link href="/contact" className="easilon-btn easilon-btn--outline">
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
           FAQ PAGE STYLES
        ============================================= */

        /* FAQ Hero */
        .faq-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          text-align: center;
        }

        .faq-hero__text {
          font-size: 18px;
          color: #666;
          line-height: 1.8;
          max-width: 700px;
          margin: 20px auto 0;
        }

        /* Stats Section */
        .stat-card {
          text-align: center;
          padding: 40px 20px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
        }

        .stat-card__number {
          font-size: 48px;
          font-weight: 800;
          color: #E45551;
          line-height: 1;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
        }

        .stat-card__suffix {
          font-size: 24px;
          font-weight: 600;
        }

        .stat-card__label {
          font-size: 16px;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .stat-card {
            margin-bottom: 20px;
          }
          
          .stat-card__number {
            font-size: 36px;
          }
        }

        /* Popular Questions */
        .section-header {
          margin-bottom: 50px;
        }

        .section-header__title {
          font-size: 32px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .section-header__text {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .popular-questions__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .popular-question-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .popular-question-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .popular-question-card__content {
          margin-bottom: 20px;
        }

        .popular-question-card__icon {
          width: 40px;
          height: 40px;
          background: #E45551;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .popular-question-card__title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          line-height: 1.4;
          margin: 0;
        }

        .popular-question-card__button {
          background: transparent;
          border: 2px solid #E45551;
          color: #E45551;
          padding: 8px 20px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .popular-question-card__button:hover {
          background: #E45551;
          color: white;
        }

        /* FAQ Categories */
        .faq-categories {
          position: sticky;
          top: 100px;
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .faq-categories__title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
          font-family: 'Poppins', sans-serif;
        }

        .faq-categories__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .faq-categories__list li {
          margin-bottom: 10px;
        }

        .faq-category-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          background: transparent;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .faq-category-btn:hover {
          background: rgba(228, 85, 81, 0.1);
        }

        .faq-category-btn.active {
          background: #E45551;
          color: white;
        }

        .faq-category-btn__icon {
          font-size: 20px;
          width: 24px;
          text-align: center;
        }

        .faq-category-btn__text {
          font-size: 16px;
          font-weight: 500;
        }

        /* FAQ Accordion */
        .faq-accordion {
          background: white;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .faq-accordion__title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 30px;
          font-family: 'Poppins', sans-serif;
        }

        .faq-item {
          border: 1px solid #eee;
          border-radius: 10px;
          margin-bottom: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item.active {
          border-color: #E45551;
          box-shadow: 0 5px 20px rgba(228, 85, 81, 0.1);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          color: #333;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(228, 85, 81, 0.05);
        }

        .faq-question__text {
          flex: 1;
          padding-right: 20px;
        }

        .faq-question__icon {
          width: 30px;
          height: 30px;
          background: #E45551;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          transition: transform 0.3s ease;
        }

        .faq-item.active .faq-question__icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.3s ease;
        }

        .faq-answer__content {
          padding: 0 25px 25px;
        }

        .faq-answer__content p {
          font-size: 16px;
          line-height: 1.8;
          color: #666;
          margin: 0 0 20px 0;
        }

        .faq-resources {
          background: rgba(228, 85, 81, 0.05);
          border-left: 4px solid #E45551;
          padding: 15px 20px;
          border-radius: 0 8px 8px 0;
          margin-top: 20px;
        }

        .faq-resources strong {
          color: #333;
          display: block;
          margin-bottom: 10px;
        }

        .faq-resources ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .faq-resources li {
          margin-bottom: 8px;
        }

        .faq-resources a {
          color: #E45551;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .faq-resources a:hover {
          color: #d14541;
          text-decoration: underline;
        }

        /* FAQ CTA Section */
        .faq-cta__content {
          color: white;
        }

        .faq-cta__title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 768px) {
          .faq-cta__title {
            font-size: 28px;
          }
        }

        .faq-cta__text {
          font-size: 18px;
          opacity: 0.9;
          margin: 0;
        }

        .faq-cta__buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        @media (max-width: 991px) {
          .faq-cta__buttons {
            justify-content: flex-start;
            margin-top: 30px;
          }
        }

        /* Button Variations */
        .easilon-btn--light {
          background: white;
          color: #E45551;
          border-color: white;
        }

        .easilon-btn--light:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #E45551;
        }

        .easilon-btn--outline {
          background: transparent;
          color: white;
          border-color: white;
        }

        .easilon-btn--outline:hover {
          background: white;
          color: #E45551;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .faq-categories {
            position: static;
            margin-bottom: 30px;
          }
          
          .faq-accordion {
            padding: 25px;
          }
          
          .faq-question {
            padding: 15px 20px;
            font-size: 16px;
          }
          
          .faq-cta__buttons {
            flex-direction: column;
          }
          
          .easilon-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .popular-questions__grid {
            grid-template-columns: 1fr;
          }
          
          .faq-question__text {
            font-size: 16px;
          }
        }

        /* Text Center Utility */
        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        /* Row & Columns */
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .gutter-y-50 {
          row-gap: 50px;
        }

        .col-lg-3 {
          flex: 0 0 25%;
          max-width: 25%;
          padding: 0 15px;
        }

        .col-lg-4 {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
          padding: 0 15px;
        }

        .col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }

        .col-lg-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
          padding: 0 15px;
        }

        .col-lg-9 {
          flex: 0 0 75%;
          max-width: 75%;
          padding: 0 15px;
        }

        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }

        @media (max-width: 991px) {
          .col-lg-3, .col-lg-4, .col-lg-6, .col-lg-8, .col-lg-9, .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        /* Button Styles */
        .easilon-btn {
          display: inline-flex;
          align-items: center;
          padding: 15px 35px;
          background: #E45551;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: 2px solid #E45551;
        }

        .easilon-btn:hover {
          background: white;
          color: #E45551;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(228, 85, 81, 0.2);
        }

        .easilon-btn__icon {
          margin-left: 10px;
          transition: transform 0.3s ease;
        }

        .easilon-btn:hover .easilon-btn__icon {
          transform: translateX(5px);
        }

        /* Section Title */
        .sec-title {
          margin-bottom: 40px;
        }

        .sec-title__top {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          justify-content: center;
        }

        .sec-title__shape {
          position: relative;
          width: 40px;
          height: 4px;
          margin-right: 15px;
        }

        .sec-title__shape__one {
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 4px;
          background: #E45551;
          border-radius: 2px;
        }

        .sec-title__shape__two {
          position: absolute;
          top: 0;
          left: 25px;
          width: 15px;
          height: 4px;
          background: #E45551;
          opacity: 0.5;
          border-radius: 2px;
        }

        .sec-title__tagline {
          color: #E45551;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }

        .sec-title__title {
          font-size: 42px;
          font-weight: 700;
          color: #333;
          line-height: 1.3;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 768px) {
          .sec-title__title {
            font-size: 32px;
          }
        }

        /* Section Spacing */
        .section-space {
          padding: 100px 0;
          position: relative;
        }

        @media (max-width: 768px) {
          .section-space {
            padding: 60px 0;
          }
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Wow Animations */
        .wow {
          visibility: hidden;
        }

        .fadeInUp {
          animation-name: fadeInUp;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Align Items Center */
        .align-items-center {
          align-items: center;
        }

        /* Text Primary */
        .text-primary {
          color: #E45551 !important;
        }
      `}</style>
    </div>
  );
}