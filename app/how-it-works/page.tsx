'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';

export default function HowItWorks() {
  // Initialize animations on component mount
  useEffect(() => {
    // Progress bar animation
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.count-bar');
      progressBars.forEach((bar) => {
        const percent = bar.getAttribute('data-percent');
        if (percent && bar instanceof HTMLElement) {
          // Trigger animation after a delay
          setTimeout(() => {
            bar.style.width = percent;
          }, 500);
        }
      });
    };

    animateProgressBars();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Fill out our simple online application form in just 5 minutes with basic information.",
      icon: "📝",
      image: "/assets/images/how-it-works/step-1.jpg"
    },
    {
      number: "02",
      title: "Document Verification",
      description: "Submit required documents for quick verification through our secure portal.",
      icon: "✅",
      image: "/assets/images/how-it-works/step-2.jpg"
    },
    {
      number: "03",
      title: "Get Approved",
      description: "Receive loan approval decision within 24 hours from our expert team.",
      icon: "👍",
      image: "/assets/images/how-it-works/step-3.jpg"
    },
    {
      number: "04",
      title: "Receive Funds",
      description: "Get money transferred directly to your bank account within 1-2 business days.",
      icon: "💰",
      image: "/assets/images/how-it-works/step-4.jpg"
    }
  ];

  const requirements = [
    {
      title: "Basic Requirements",
      items: [
        "Minimum age: 21 years",
        "Valid government ID proof",
        "Proof of residence",
        "Regular source of income",
        "Active bank account"
      ]
    },
    {
      title: "Document Checklist",
      items: [
        "PAN card or Aadhaar card",
        "Last 3 months bank statements",
        "Salary slips (last 3 months)",
        "Passport size photographs",
        "Address proof (utility bill)"
      ]
    }
  ];

  return (
    <div className="how-it-works-page">
      <PageHeader title="How It Work" />
      
      {/* Hero Section */}
      <section className="process-hero section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">simple & easy process</h6>
                </div>
                <h1 className="sec-title__title">
                  How It Works - Get Your Loan in <span className="text-primary">4 Easy Steps</span>
                </h1>
                <p className="process-hero__text">
                  At Speed Loan Center, we've simplified the loan process to make it fast, transparent, 
                  and hassle-free. Follow these simple steps to get the funds you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="process-steps section-space">
        <div className="container">
          <div className="row gutter-y-50">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-6">
                <div className={`process-step wow ${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}`} 
                     data-wow-duration="1500ms">
                  <div className="process-step__inner">
                    <div className="process-step__image">
                      <div className="process-step__number">
                        <span className="process-step__number-bg"></span>
                        <span className="process-step__number-text">{step.number}</span>
                      </div>
                      <div className="process-step__icon-large">{step.icon}</div>
                    </div>
                    <div className="process-step__content">
                      <h3 className="process-step__title">{step.title}</h3>
                      <p className="process-step__description">{step.description}</p>
                      <div className="process-step__time">
                        <span className="process-step__time-icon">⏱️</span>
                        <span className="process-step__time-text">
                          {index === 0 ? '5 minutes' : 
                           index === 1 ? '2-4 hours' : 
                           index === 2 ? 'Within 24 hours' : 
                           '1-2 business days'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Summary Table Section */}
      <section className="loan-summary section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-header">
                <div className="hadding">
                  <span className="span-two">Loan Summary</span>
                  <h2 className="position-relative fw-700">Detailed APR Cost Examples</h2>
                  <p>Compare loan options with transparent pricing and see exactly what you'll pay over time. All examples include fees and interest for full cost disclosure.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="table-data">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <td>Loan Amount</td>
                      <td>$1,000</td>
                      <td>$2,000</td>
                      <td>$2,500</td>
                      <td>$5,000</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Interest Rate</td>
                      <td>24.00%</td>
                      <td>19.00%</td>
                      <td>16.00%</td>
                      <td>13.00%</td>
                    </tr>
                    <tr>
                      <td>Loan Term</td>
                      <td>12 months</td>
                      <td>24 months</td>
                      <td>36 months</td>
                      <td>48 months</td>
                    </tr>
                    <tr>
                      <td>Fee</td>
                      <td>3.00%</td>
                      <td>5.00%</td>
                      <td>10.00%</td>
                      <td>12.00%</td>
                    </tr>
                    <tr>
                      <td>Monthly Payment</td>
                      <td>$94.56</td>
                      <td>$100.82</td>
                      <td>$87.89</td>
                      <td>$131.67</td>
                    </tr>
                    <tr>
                      <td>APR</td>
                      <td>29.82%</td>
                      <td>24.12%</td>
                      <td>22.93%</td>
                      <td>18.23%</td>
                    </tr>
                    <tr>
                      <td>Total Payments</td>
                      <td>$1,134.72</td>
                      <td>$2,419.68</td>
                      <td>$3,164.13</td>
                      <td>$6,320.12</td>
                    </tr>
                    <tr>
                      <td>Total Cost</td>
                      <td>$164.72</td>
                      <td>$519.68</td>
                      <td>$914.13</td>
                      <td>$1,920.12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="info-box">
                <div className="info-icon">
                  ℹ️
                </div>
                <div className="info-content">
                  <h4>Understanding Your Loan Costs</h4>
                  <p>APR (Annual Percentage Rate) includes both interest and fees to give you a complete picture of loan costs. Lower APR generally means lower total cost over the life of the loan. These examples are for illustrative purposes only. Actual rates and terms may vary based on creditworthiness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section section-space" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row gutter-y-50 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="requirements-image">
                <div className="requirements-image__inner">
                  <div className="requirements-image__badge">
                    <div className="requirements-image__badge-content">
                      <span className="requirements-image__badge-icon">📋</span>
                      <span className="requirements-image__badge-text">Document Checklist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 wow fadeInRight" data-wow-duration="1500ms">
              <div className="requirements-content">
                <div className="sec-title">
                  <div className="sec-title__top">
                    <div className="sec-title__shape">
                      <div className="sec-title__shape__one"></div>
                      <div className="sec-title__shape__two"></div>
                    </div>
                    <h6 className="sec-title__tagline">what you need</h6>
                  </div>
                  <h3 className="sec-title__title">Requirements & Documents</h3>
                </div>
                
                <div className="requirements-list">
                  {requirements.map((section, index) => (
                    <div key={index} className="requirements-card">
                      <h4 className="requirements-card__title">{section.title}</h4>
                      <ul className="requirements-card__list">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="requirements-card__item">
                            <span className="requirements-card__icon">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="requirements-note">
                  <div className="requirements-note__icon">ℹ️</div>
                  <div className="requirements-note__content">
                    <p>
                      <strong>Note:</strong> Additional documents may be required based on loan type and amount. 
                      Our team will guide you through specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Comparison Section */}
      <section className="comparison-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">why choose us</h6>
                </div>
                <h3 className="sec-title__title">Compare with Traditional Banks</h3>
              </div>
            </div>
          </div>
          
          <div className="row gutter-y-50">
            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="comparison-card speed-loan-card">
                <div className="comparison-card__header">
                  <div className="comparison-card__icon">⚡</div>
                  <h4 className="comparison-card__title">Speed Loan Center</h4>
                </div>
                <ul className="comparison-card__list">
                  <li className="comparison-card__item positive">✓ Application: 5 minutes online</li>
                  <li className="comparison-card__item positive">✓ Approval: Within 24 hours</li>
                  <li className="comparison-card__item positive">✓ Documents: Minimal paperwork</li>
                  <li className="comparison-card__item positive">✓ Disbursement: 1-2 business days</li>
                  <li className="comparison-card__item positive">✓ Support: 24/7 customer service</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6 wow fadeInRight" data-wow-duration="1500ms">
              <div className="comparison-card traditional-card">
                <div className="comparison-card__header">
                  <div className="comparison-card__icon">🏦</div>
                  <h4 className="comparison-card__title">Traditional Banks</h4>
                </div>
                <ul className="comparison-card__list">
                  <li className="comparison-card__item negative">✗ Application: Weeks of paperwork</li>
                  <li className="comparison-card__item negative">✗ Approval: 2-4 weeks</li>
                  <li className="comparison-card__item negative">✗ Documents: Extensive paperwork</li>
                  <li className="comparison-card__item negative">✗ Disbursement: 1-2 weeks</li>
                  <li className="comparison-card__item negative">✗ Support: Limited banking hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="process-cta section-space" style={{ background: 'linear-gradient(135deg, #E45551 0%, #ff7a75 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="process-cta__content">
                <h2 className="process-cta__title">Ready to Get Started?</h2>
                <p className="process-cta__text">
                  Join thousands of satisfied customers who have found financial freedom with Speed Loan Center.
                </p>
                <div className="process-cta__buttons">
                  <Link href="/apply-loan" className="easilon-btn easilon-btn--light">
                    <span>Apply for Loan Now</span>
                    <span className="easilon-btn__icon">
                      →
                    </span>
                  </Link>
                  <Link href="/contact" className="easilon-btn easilon-btn--outline">
                    <span>Contact Our Experts</span>
                    <span className="easilon-btn__icon">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS Styles */}
      <style>{`
        /* ============================================
           HOW IT WORKS PAGE STYLES
        ============================================= */

        /* Process Hero */
        .process-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          text-align: center;
        }

        .process-hero__text {
          font-size: 18px;
          color: #666;
          line-height: 1.8;
          max-width: 700px;
          margin: 20px auto 0;
        }

        .text-primary {
          color: #E45551 !important;
        }

        /* Process Steps */
        .process-step {
          margin-bottom: 50px;
        }

        .process-step__inner {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          height: 100%;
        }

        .process-step:hover .process-step__inner {
          transform: translateY(-10px);
        }

        .process-step__image {
          position: relative;
          overflow: hidden;
          height: 200px;
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-step__icon-large {
          font-size: 80px;
          opacity: 0.2;
        }

        .process-step__number {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 60px;
          height: 60px;
        }

        .process-step__number-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 50%;
          opacity: 0.9;
        }

        .process-step__number-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #E45551;
          font-size: 20px;
          font-weight: 700;
        }

        .process-step__content {
          padding: 30px;
        }

        .process-step__title {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .process-step__description {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .process-step__time {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E45551;
          font-weight: 600;
        }

        .process-step__time-icon {
          font-size: 18px;
        }

        /* Loan Summary Table Section */
        .loan-summary {
          background: #f8fafc;
        }

        .hadding {
          text-align: center;
          margin-bottom: 60px;
        }

        .span-two {
          display: inline-block;
          color: #E45551;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
          padding: 5px 15px;
          background: rgba(228, 85, 81, 0.1);
          border-radius: 20px;
        }

        .hadding h2 {
          font-size: 42px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hadding p {
          font-size: 18px;
          color: #64748b;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        .table-data {
          width: 100%;
        }

        .table-wrapper {
          overflow-x: auto;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        table thead {
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
        }

        table thead tr td {
          color: white;
          font-weight: 600;
          padding: 25px 20px;
          font-size: 18px;
          text-align: center;
          border: none;
        }

        table thead tr td:first-child {
          border-radius: 15px 0 0 0;
        }

        table thead tr td:last-child {
          border-radius: 0 15px 0 0;
        }

        table tbody tr {
          transition: all 0.3s ease;
        }

        table tbody tr:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        table tbody tr:nth-child(even) {
          background: #f8fafc;
        }

        table tbody tr td {
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
          font-size: 16px;
          color: #475569;
        }

        table tbody tr:last-child td {
          border-bottom: none;
        }

        table tbody tr td:first-child {
          font-weight: 600;
          color: #1e293b;
          text-align: left;
          background: #f1f5f9;
          width: 250px;
        }

        table tbody tr:nth-child(4) td,
        table tbody tr:nth-child(5) td,
        table tbody tr:nth-child(7) td {
          font-weight: 700;
          color: #E45551;
          font-size: 18px;
        }

        /* Info Box */
        .info-box {
          background: #f0f9ff;
          border: 2px solid #bae6fd;
          border-radius: 15px;
          padding: 30px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .info-icon {
          font-size: 32px;
          color: #0ea5e9;
          flex-shrink: 0;
        }

        .info-content h4 {
          margin: 0 0 15px 0;
          color: #0369a1;
          font-size: 20px;
          font-weight: 600;
        }

        .info-content p {
          margin: 0;
          color: #0c4a6e;
          line-height: 1.6;
          font-size: 16px;
        }

        /* Requirements Section */
        .requirements-section {
          background: #f8f9fa !important;
        }

        .requirements-image {
          position: relative;
        }

        .requirements-image__inner {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
          min-height: 300px;
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .requirements-image__badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: white;
          border-radius: 15px;
          padding: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .requirements-image__badge-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .requirements-image__badge-icon {
          font-size: 24px;
        }

        .requirements-image__badge-text {
          font-weight: 600;
          color: #333;
          white-space: nowrap;
        }

        /* Requirements Content */
        .requirements-list {
          margin-bottom: 30px;
        }

        .requirements-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .requirements-card:hover {
          transform: translateY(-5px);
        }

        .requirements-card__title {
          font-size: 20px;
          font-weight: 700;
          color: #E45551;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .requirements-card__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .requirements-card__item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-size: 16px;
          color: #333;
        }

        .requirements-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: #E45551;
          color: white;
          border-radius: 50%;
          margin-right: 10px;
          font-size: 12px;
        }

        .requirements-note {
          display: flex;
          gap: 15px;
          background: rgba(228, 85, 81, 0.1);
          border-left: 4px solid #E45551;
          padding: 20px;
          border-radius: 8px;
        }

        .requirements-note__icon {
          font-size: 24px;
          color: #E45551;
        }

        .requirements-note__content p {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }

        /* Comparison Section */
        .comparison-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          height: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .comparison-card:hover {
          transform: translateY(-10px);
        }

        .speed-loan-card {
          border-top: 5px solid #E45551;
        }

        .traditional-card {
          border-top: 5px solid #6c757d;
        }

        .comparison-card__header {
          text-align: center;
          margin-bottom: 30px;
        }

        .comparison-card__icon {
          font-size: 50px;
          margin-bottom: 15px;
        }

        .comparison-card__title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          font-family: 'Poppins', sans-serif;
        }

        .comparison-card__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .comparison-card__item {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
          font-size: 16px;
          display: flex;
          align-items: center;
        }

        .comparison-card__item:last-child {
          border-bottom: none;
        }

        .comparison-card__item.positive {
          color: #28a745;
        }

        .comparison-card__item.negative {
          color: #dc3545;
        }

        /* CTA Section */
        .process-cta__content {
          color: white;
        }

        .process-cta__title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 768px) {
          .process-cta__title {
            font-size: 32px;
          }
        }

        .process-cta__text {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .process-cta__buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

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
          .process-step {
            margin-bottom: 30px;
          }
          
          .requirements-image__badge {
            position: relative;
            bottom: 0;
            right: 0;
            margin-top: 20px;
            display: inline-block;
          }
          
          .process-cta__buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .easilon-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .hadding h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .process-step__inner {
            margin: 0 10px;
          }
          
          .comparison-card {
            padding: 25px;
          }
          
          .comparison-card__title {
            font-size: 24px;
          }
          
          .hadding h2 {
            font-size: 28px;
          }
          
          .hadding p {
            font-size: 16px;
          }
          
          table thead tr td {
            padding: 15px 10px;
            font-size: 16px;
          }
          
          table tbody tr td {
            padding: 15px 10px;
            font-size: 14px;
          }
          
          .info-box {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }
          
          .info-icon {
            margin: 0 auto;
          }
        }

        /* Animation for progress bars */
        .progress-bar-animated {
          animation: progressAnimation 1.5s ease-in-out;
        }

        @keyframes progressAnimation {
          from {
            width: 0;
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

        .col-lg-12 {
          flex: 0 0 100%;
          max-width: 100%;
          padding: 0 15px;
        }

        @media (max-width: 991px) {
          .col-lg-6, .col-lg-8, .col-lg-12 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          
          .gutter-y-50 {
            row-gap: 40px;
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

        /* Wow Animations */
        .wow {
          visibility: hidden;
        }

        .fadeInLeft {
          animation-name: fadeInLeft;
        }

        .fadeInRight {
          animation-name: fadeInRight;
        }

        .fadeInUp {
          animation-name: fadeInUp;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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

        /* Float Animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}