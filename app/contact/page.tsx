// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: ['123 Financial District', 'Mumbai, Maharashtra 400001', 'India'],
      link: 'https://maps.google.com',
      linkText: 'View on Map'
    },
    {
      icon: '📞',
      title: 'Call Us Anytime',
      details: ['+91 5698 0036 420', '+91 9876 5432 10'],
      link: 'tel:+9156980036420',
      linkText: 'Call Now'
    },
    {
      icon: '✉️',
      title: 'Send Email',
      details: ['info@speedloancenter.com', 'support@speedloancenter.com'],
      link: 'mailto:info@speedloancenter.com',
      linkText: 'Send Email'
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      link: '',
      linkText: ''
    }
  ];

  const faqItems = [
    {
      question: 'What is the best way to contact customer support?',
      answer: 'For immediate assistance, call our 24/7 helpline at +91 5698 0036 420. For non-urgent queries, email us at support@speedloancenter.com.'
    },
    {
      question: 'Do you have branches in other cities?',
      answer: 'Yes, we have offices in Delhi, Bangalore, Chennai, and Hyderabad. Contact details for each branch are available on our website.'
    },
    {
      question: 'Can I schedule an appointment for a loan consultation?',
      answer: 'Absolutely! You can schedule a free consultation with our loan experts through our website or by calling our office.'
    }
  ];

  return (
    <div className="contact-page">
      <PageHeader title="Contact Us" />
      
      {/* Contact Info Section */}
      <section className="contact-info section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">get in touch</h6>
                </div>
                <h3 className="sec-title__title">We're Here to Help You</h3>
                <p className="contact-intro">
                  Have questions about loans, need assistance with your application, or want to speak with 
                  a financial advisor? Reach out to us through any of the channels below.
                </p>
              </div>
            </div>
          </div>

          <div className="row gutter-y-50">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="contact-card wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                  <div className="contact-card__icon">{info.icon}</div>
                  <h4 className="contact-card__title">{info.title}</h4>
                  <div className="contact-card__details">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="contact-card__detail">{detail}</p>
                    ))}
                  </div>
                  {info.link && (
                    <a 
                      href={info.link} 
                      className="contact-card__link"
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {info.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-map section-space" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row gutter-y-50">
            <div className="col-lg-6">
              <div className="contact-form-wrapper">
                <div className="sec-title">
                  <h3 className="sec-title__title">Send Us a Message</h3>
                  <p className="contact-form-intro">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="success-message">
                    <div className="success-message__icon">✓</div>
                    <div className="success-message__content">
                      <h4>Thank You!</h4>
                      <p>Your message has been sent successfully. We'll contact you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-control"
                      >
                        <option value="">Select a subject</option>
                        <option value="loan-query">Loan Query</option>
                        <option value="application-help">Application Help</option>
                        <option value="document-submission">Document Submission</option>
                        <option value="payment-issue">Payment Issue</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="feedback">Feedback/Suggestion</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-control"
                      placeholder="Please describe your query in detail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="easilon-btn contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <span className="easilon-btn__icon">⏳</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="easilon-btn__icon">✉️</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="map-wrapper">
                <div className="map-placeholder">
                  <div className="map-content">
                    <div className="map-icon">📍</div>
                    <h4 className="map-title">Our Location</h4>
                    <p className="map-address">
                      123 Financial District, Mumbai<br />
                      Maharashtra 400001, India
                    </p>
                    <div className="map-features">
                      <div className="map-feature">
                        <span className="map-feature-icon">🚗</span>
                        <span className="map-feature-text">Ample Parking Available</span>
                      </div>
                      <div className="map-feature">
                        <span className="map-feature-icon">🚇</span>
                        <span className="map-feature-text">Near Metro Station</span>
                      </div>
                      <div className="map-feature">
                        <span className="map-feature-icon">♿</span>
                        <span className="map-feature-text">Wheelchair Accessible</span>
                      </div>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=123+Financial+District+Mumbai"
                      className="easilon-btn easilon-btn--border"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Get Directions</span>
                      <span className="easilon-btn__icon">🗺️</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">common questions</h6>
                </div>
                <h3 className="sec-title__title">Frequently Asked Questions</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="faq-accordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question">
                      <div className="faq-question__icon">?</div>
                      <h4 className="faq-question__text">{faq.question}</h4>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta section-space" style={{ background: 'linear-gradient(135deg, #E45551 0%, #ff7a75 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="contact-cta__content">
                <h2 className="contact-cta__title">Need Immediate Assistance?</h2>
                <p className="contact-cta__text">
                  Call our 24/7 customer support helpline for urgent queries and instant solutions.
                </p>
                <div className="contact-cta__phone">
                  <span className="contact-cta__phone-icon">📞</span>
                  <a href="tel:+9156980036420" className="contact-cta__phone-number">
                    +91 5698 0036 420
                  </a>
                </div>
                <p className="contact-cta__note">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS Styles */}
      <style>{`
        /* ============================================
           CONTACT PAGE STYLES
        ============================================= */

        /* Contact Info Section */
        .contact-intro {
          font-size: 18px;
          color: #666;
          line-height: 1.8;
          max-width: 700px;
          margin: 20px auto 0;
        }

        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          height: 100%;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-card:hover {
          transform: translateY(-10px);
        }

        .contact-card__icon {
          font-size: 50px;
          margin-bottom: 20px;
          width: 80px;
          height: 80px;
          background: rgba(228, 85, 81, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card__title {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .contact-card__details {
          flex: 1;
          margin-bottom: 25px;
        }

        .contact-card__detail {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 8px 0;
        }

        .contact-card__link {
          color: #E45551;
          text-decoration: none;
          font-weight: 600;
          border: 2px solid #E45551;
          padding: 10px 25px;
          border-radius: 25px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .contact-card__link:hover {
          background: #E45551;
          color: white;
        }

        @media (max-width: 768px) {
          .contact-card {
            margin-bottom: 30px;
          }
        }

        /* Contact Form */
        .contact-form-wrapper {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .contact-form-intro {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }

        .success-message {
          background: rgba(40, 167, 69, 0.1);
          border: 1px solid #28a745;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .success-message__icon {
          width: 40px;
          height: 40px;
          background: #28a745;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
        }

        .success-message__content h4 {
          color: #28a745;
          margin: 0 0 5px 0;
          font-size: 18px;
        }

        .success-message__content p {
          color: #666;
          margin: 0;
          font-size: 14px;
        }

        .contact-form {
          margin-top: 30px;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
            gap: 15px;
          }
        }

        .form-group {
          flex: 1;
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
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          color: #333;
          background: white;
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

        select.form-control {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 15px center;
          padding-right: 40px;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }

        .contact-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 20px;
        }

        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Map Section */
        .map-wrapper {
          height: 100%;
        }

        .map-placeholder {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
        }

        .map-content {
          text-align: center;
          max-width: 400px;
        }

        .map-icon {
          font-size: 60px;
          margin-bottom: 20px;
        }

        .map-title {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .map-address {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .map-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .map-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
        }

        .map-feature-icon {
          font-size: 20px;
        }

        .map-feature-text {
          font-size: 14px;
          color: #666;
        }

        /* Contact FAQ */
        .contact-faq .faq-item {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .contact-faq .faq-question {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .contact-faq .faq-question__icon {
          width: 30px;
          height: 30px;
          background: #E45551;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .contact-faq .faq-question__text {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .contact-faq .faq-answer p {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin: 0;
          padding-left: 45px;
        }

        /* Contact CTA */
        .contact-cta__content {
          color: white;
        }

        .contact-cta__title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 768px) {
          .contact-cta__title {
            font-size: 32px;
          }
        }

        .contact-cta__text {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-cta__phone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .contact-cta__phone-icon {
          font-size: 40px;
        }

        .contact-cta__phone-number {
          font-size: 36px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 768px) {
          .contact-cta__phone-number {
            font-size: 28px;
          }
        }

        .contact-cta__phone-number:hover {
          text-decoration: underline;
        }

        .contact-cta__note {
          font-size: 14px;
          opacity: 0.8;
          margin: 0;
        }

        /* Button Variations */
        .easilon-btn--border {
          background: transparent;
          color: #E45551;
          border: 2px solid #E45551;
        }

        .easilon-btn--border:hover {
          background: #E45551;
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-form-wrapper,
          .map-placeholder {
            padding: 30px 20px;
          }
          
          .contact-card {
            margin-bottom: 20px;
          }
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

        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }

        @media (max-width: 991px) {
          .col-lg-3, .col-lg-6, .col-lg-8, .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          
          .gutter-y-50 {
            row-gap: 30px;
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

        /* Text Center */
        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
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
      `}</style>
    </div>
  );
}