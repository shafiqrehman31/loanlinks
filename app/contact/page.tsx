// app/contact/page.tsx
'use client';
import PageHeader from '../components/PageHeader';


export default function ContactUs() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: ['123 Financial District', 'New York, NY 10005', 'United States'],
      link: 'https://maps.google.com/?q=123+Financial+District+New+York+NY+10005',
      linkText: 'View on Map',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '📧',
      title: 'Send Email',
      details: ['info@speedloancenter.com', 'support@speedloancenter.com'],
      link: 'mailto:info@speedloancenter.com',
      linkText: 'Send Email',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 7:00 PM EST', 'Saturday: 9:00 AM - 5:00 PM EST', 'Sunday: 10:00 AM - 4:00 PM EST'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🏦',
      title: 'Nationwide Service',
      details: ['Serving all 50 states', 'Online applications', 'Fast approval process'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  const faqItems = [
    {
      question: 'What is the best way to contact customer support?',
      answer: 'You can reach our customer support team by emailing support@speedloancenter.com. We respond to all inquiries within 1-2 business hours during working hours.'
    },
    {
      question: 'Do you serve customers outside of New York?',
      answer: 'Yes! We provide loan services to customers across all 50 states. Our online application process makes it easy to apply from anywhere in the United States.'
    },
    {
      question: 'What are your typical response times for email inquiries?',
      answer: 'We respond to all email inquiries within 1-2 business hours during our working hours. For urgent matters, please use our contact form with "URGENT" in the subject line.'
    },
    {
      question: 'Can I visit your office for a consultation?',
      answer: 'Absolutely! We welcome walk-in consultations during business hours. However, we recommend scheduling an appointment to ensure dedicated time with one of our loan specialists.'
    },
    {
      question: 'How long does loan approval take?',
      answer: 'Standard loan approvals take 3-5 working days. For express processing, contact our dedicated team for priority service.'
    }
  ];

  const branchLocations = [
    {
      city: 'New York, NY',
      address: '123 Financial District, New York, NY 10005',
      email: 'nyc@speedloancenter.com',
      hours: 'Mon-Fri: 8AM-7PM EST, Sat: 9AM-5PM EST, Sun: 10AM-4PM EST'
    },
    {
      city: 'Los Angeles, CA',
      address: '456 Sunset Boulevard, Los Angeles, CA 90028',
      email: 'la@speedloancenter.com',
      hours: 'Mon-Fri: 9AM-6PM PST, Sat: 10AM-4PM PST, Sun: Closed'
    },
    {
      city: 'Chicago, IL',
      address: '789 Michigan Avenue, Chicago, IL 60611',
      email: 'chicago@speedloancenter.com',
      hours: 'Mon-Fri: 8AM-6PM CST, Sat: 9AM-3PM CST, Sun: Closed'
    }
  ];

  return (
    <div className="contact-page">
     <PageHeader title="How It Work" />
      {/* Hero Contact Section */}
      <section className="contact-hero section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  Ready to <span className="gradient-text">Transform</span> Your Financial Future?
                </h1>
                <p className="hero-description">
                  Our dedicated team of financial experts is here to help. 
                  Whether you're looking for a home loan, personal loan, or business financing, 
                  we provide personalized solutions with speed and transparency.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number">50 States</div>
                    <div className="stat-label">Nationwide</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24-48 Hours</div>
                    <div className="stat-label">Response Time</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-cards-section section-space">
        <div className="container">
          <div className="row gutter-y-30">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div 
                  className="contact-card-modern wow fadeInUp" 
                  data-wow-delay={`${index * 100}ms`}
                  style={{ background: info.gradient }}
                >
                  <div className="contact-card-modern__inner">
                    <div className="contact-card-modern__icon">{info.icon}</div>
                    <h3 className="contact-card-modern__title">{info.title}</h3>
                    <div className="contact-card-modern__details">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="contact-card-modern__detail">{detail}</p>
                      ))}
                    </div>
                    {info.link && (
                      <a 
                        href={info.link} 
                        className="contact-card-modern__link"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.linkText} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Contact Panel */}
      <section className="interactive-contact section-space">
        <div className="container">
          <div className="interactive-contact__wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-panel">
                  <h2 className="contact-panel__title">Choose Your Preferred Contact Method</h2>
                  <p className="contact-panel__description">
                    Select how you'd like to connect with us
                  </p>
                  
                  <div className="contact-methods">
                    <a href="mailto:appointments@speedloancenter.com" className="contact-method">
                      <div className="contact-method__icon">📅</div>
                      <div className="contact-method__content">
                        <h4>Schedule Appointment</h4>
                        <p>Book a consultation with our experts</p>
                      </div>
                      <div className="contact-method__arrow">→</div>
                    </a>
                    
                    <a href="mailto:info@speedloancenter.com" className="contact-method">
                      <div className="contact-method__icon">✉️</div>
                      <div className="contact-method__content">
                        <h4>Email Support</h4>
                        <p>Response within 2 business hours</p>
                      </div>
                      <div className="contact-method__arrow">→</div>
                    </a>
                    
                    <a href="https://maps.google.com/?q=123+Financial+District+New+York+NY+10005" className="contact-method">
                      <div className="contact-method__icon">📍</div>
                      <div className="contact-method__content">
                        <h4>Visit Office</h4>
                        <p>Walk-ins welcome during business hours</p>
                      </div>
                      <div className="contact-method__arrow">→</div>
                    </a>
                    
                    <a href="mailto:documents@speedloancenter.com" className="contact-method">
                      <div className="contact-method__icon">📄</div>
                      <div className="contact-method__content">
                        <h4>Document Support</h4>
                        <p>Secure document upload for applications</p>
                      </div>
                      <div className="contact-method__arrow">→</div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="contact-info-panel">
                  <h3 className="contact-info-panel__title">Quick Contact Info</h3>
                  
                  <div className="quick-contact">
                    <div className="quick-contact__item">
                      <div className="quick-contact__label">General Inquiries</div>
                      <a href="mailto:info@speedloancenter.com" className="quick-contact__value">
                        info@speedloancenter.com
                      </a>
                    </div>
                    
                    <div className="quick-contact__item">
                      <div className="quick-contact__label">Customer Support</div>
                      <a href="mailto:support@speedloancenter.com" className="quick-contact__value">
                        support@speedloancenter.com
                      </a>
                    </div>
                    
                    <div className="quick-contact__item">
                      <div className="quick-contact__label">Loan Applications</div>
                      <a href="mailto:applications@speedloancenter.com" className="quick-contact__value">
                        applications@speedloancenter.com
                      </a>
                    </div>
                    
                    <div className="quick-contact__item">
                      <div className="quick-contact__label">Business Hours (EST)</div>
                      <div className="quick-contact__value">
                        Mon-Fri: 8AM-7PM, Sat: 9AM-5PM, Sun: 10AM-4PM
                      </div>
                    </div>
                  </div>
                  
                  <div className="social-contact">
                    <h4 className="social-contact__title">Connect on Social Media</h4>
                    <div className="social-contact__links">
                      <a href="#" className="social-link">Facebook</a>
                      <a href="#" className="social-link">Twitter</a>
                      <a href="#" className="social-link">LinkedIn</a>
                      <a href="#" className="social-link">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="branches-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sec-title">
                <h3 className="sec-title__title">Our Locations Across USA</h3>
                <p className="section-description">
                  Serving customers nationwide with multiple convenient locations
                </p>
              </div>
            </div>
          </div>

          <div className="row gutter-y-30">
            {branchLocations.map((branch, index) => (
              <div key={index} className="col-lg-4">
                <div className="branch-card">
                  <div className="branch-card__header">
                    <div className="branch-card__icon">📍</div>
                    <h4 className="branch-card__city">{branch.city}</h4>
                  </div>
                  <div className="branch-card__body">
                    <p className="branch-card__address">{branch.address}</p>
                    <div className="branch-card__details">
                      <div className="branch-detail">
                        <span className="branch-detail__icon">📧</span>
                        <a href={`mailto:${branch.email}`}>{branch.email}</a>
                      </div>
                      <div className="branch-detail">
                        <span className="branch-detail__icon">⏰</span>
                        <span>{branch.hours}</span>
                      </div>
                    </div>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                      className="branch-card__btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="faq-section section-space" style={{ background: '#f8fafc' }}>
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
            <div className="col-lg-10 mx-auto">
              <div className="faq-grid">
                {faqItems.map((faq, index) => (
                  <div key={index} className="faq-item-modern">
                    <div className="faq-item-modern__question">
                      <div className="faq-number">0{index + 1}</div>
                      <h4 className="faq-text">{faq.question}</h4>
                      <div className="faq-icon">+</div>
                    </div>
                    <div className="faq-item-modern__answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="contact-cta-enhanced section-space">
        <div className="container">
          <div className="cta-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="cta-content">
                  <h2 className="cta-title">Ready to Apply for Your Loan?</h2>
                  <p className="cta-description">
                    Start your loan application process today. Our team will review your 
                    application and get back to you within 24-48 hours with a decision.
                  </p>
                  <div className="cta-features">
                    <div className="cta-feature">
                      <span className="cta-feature-icon">⚡</span>
                      <span>Fast Approval</span>
                    </div>
                    <div className="cta-feature">
                      <span className="cta-feature-icon">🛡️</span>
                      <span>Secure Process</span>
                    </div>
                    <div className="cta-feature">
                      <span className="cta-feature-icon">🎯</span>
                      <span>Competitive Rates</span>
                    </div>
                    <div className="cta-feature">
                      <span className="cta-feature-icon">🇺🇸</span>
                      <span>Nationwide Service</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cta-action">
                  <div className="cta-email">
                    <div className="cta-email__icon">📧</div>
                    <div className="cta-email__content">
                      <div className="cta-email__label">Email for Applications</div>
                      <a href="mailto:applications@speedloancenter.com" className="cta-email__address">
                        applications@speedloancenter.com
                      </a>
                    </div>
                  </div>
                  <a 
                    href="mailto:applications@speedloancenter.com" 
                    className="cta-button"
                  >
                    Start Your Application
                  </a>
                  <p className="cta-note">
                    Response within 1-2 business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS Styles */}
      <style>{`
        /* ============================================
           ENHANCED CONTACT PAGE STYLES - USA VERSION
        ============================================= */

        /* Hero Section */
        .contact-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 0;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(45deg, #f093fb, #f5576c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 18px;
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 5px;
          font-family: 'Poppins', sans-serif;
        }

        .stat-label {
          font-size: 14px;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Enhanced Contact Cards */
        .contact-cards-section {
          margin-top: -50px;
          position: relative;
          z-index: 2;
        }

        .contact-card-modern {
          border-radius: 20px;
          padding: 40px 30px;
          color: white;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .contact-card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .contact-card-modern__inner {
          position: relative;
          z-index: 2;
        }

        .contact-card-modern__icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .contact-card-modern__title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .contact-card-modern__details {
          margin-bottom: 25px;
        }

        .contact-card-modern__detail {
          margin: 0 0 8px 0;
          opacity: 0.9;
          font-size: 15px;
        }

        .contact-card-modern__link {
          color: white;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .contact-card-modern__link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(5px);
        }

        /* Interactive Contact Panel */
        .interactive-contact {
          padding: 100px 0;
        }

        .interactive-contact__wrapper {
          background: white;
          border-radius: 30px;
          padding: 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .contact-panel__title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #333;
        }

        .contact-panel__description {
          color: #666;
          margin-bottom: 30px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-method {
          display: flex;
          align-items: center;
          padding: 20px;
          border: 2px solid #eef2f7;
          border-radius: 15px;
          text-decoration: none;
          color: #333;
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          border-color: #E45551;
          transform: translateX(10px);
          box-shadow: 0 10px 20px rgba(228, 85, 81, 0.1);
        }

        .contact-method__icon {
          font-size: 32px;
          margin-right: 20px;
        }

        .contact-method__content {
          flex: 1;
        }

        .contact-method__content h4 {
          margin: 0 0 5px 0;
          font-size: 18px;
          font-weight: 600;
        }

        .contact-method__content p {
          margin: 0;
          color: #666;
          font-size: 14px;
        }

        .contact-method__arrow {
          font-size: 20px;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .contact-method:hover .contact-method__arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-info-panel {
          padding: 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          color: white;
          height: 100%;
        }

        .contact-info-panel__title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .quick-contact__item {
          margin-bottom: 25px;
          padding-bottom: 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .quick-contact__label {
          font-size: 12px;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }

        .quick-contact__value {
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          display: block;
        }

        .quick-contact__value:hover {
          opacity: 0.9;
        }

        .social-contact {
          margin-top: 40px;
        }

        .social-contact__title {
          font-size: 18px;
          margin-bottom: 15px;
        }

        .social-contact__links {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-link {
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: white;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* Branch Locations */
        .branches-section {
          padding: 100px 0;
        }

        .branch-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          height: 100%;
        }

        .branch-card:hover {
          transform: translateY(-5px);
        }

        .branch-card__header {
          padding: 30px 30px 0;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .branch-card__icon {
          font-size: 24px;
          color: #E45551;
        }

        .branch-card__city {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          color: #333;
        }

        .branch-card__body {
          padding: 20px 30px 30px;
        }

        .branch-card__address {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .branch-card__details {
          margin-bottom: 25px;
        }

        .branch-detail {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #333;
          font-size: 14px;
        }

        .branch-detail a {
          color: #333;
          text-decoration: none;
        }

        .branch-detail a:hover {
          color: #E45551;
        }

        .branch-detail__icon {
          font-size: 16px;
          color: #E45551;
        }

        .branch-card__btn {
          display: inline-block;
          padding: 10px 25px;
          background: #E45551;
          color: white;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .branch-card__btn:hover {
          background: #d6423e;
        }

        /* Enhanced FAQ */
        .faq-section {
          padding: 100px 0;
        }

        .faq-grid {
          display: grid;
          gap: 15px;
        }

        .faq-item-modern {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .faq-item-modern:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .faq-item-modern__question {
          padding: 25px 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          background: white;
        }

        .faq-number {
          font-size: 14px;
          font-weight: 700;
          color: #E45551;
          opacity: 0.5;
        }

        .faq-text {
          flex: 1;
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .faq-icon {
          font-size: 24px;
          color: #E45551;
          transition: transform 0.3s ease;
        }

        .faq-item-modern__answer {
          padding: 0 30px 25px;
          color: #666;
          line-height: 1.6;
          display: none;
        }

        .faq-item-modern.active .faq-item-modern__answer {
          display: block;
        }

        .faq-item-modern.active .faq-icon {
          transform: rotate(45deg);
        }

        /* Enhanced CTA */
        .contact-cta-enhanced {
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
          color: white;
          padding: 100px 0;
        }

        .cta-wrapper {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          padding: 60px;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .cta-features {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          opacity: 0.9;
        }

        .cta-feature-icon {
          font-size: 20px;
        }

        .cta-action {
          text-align: center;
        }

        .cta-email {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }

        .cta-email__icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .cta-email__label {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 5px;
        }

        .cta-email__address {
          font-size: 22px;
          font-weight: 800;
          color: white;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
        }

        .cta-email__address:hover {
          opacity: 0.9;
        }

        .cta-button {
          display: inline-block;
          padding: 20px 40px;
          background: white;
          color: #E45551;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 800;
          font-size: 18px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          margin-bottom: 15px;
        }

        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .cta-note {
          font-size: 14px;
          opacity: 0.8;
          margin: 0;
        }

        /* Section Description */
        .section-description {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .hero-title {
            font-size: 36px;
          }
          
          .contact-hero {
            padding: 80px 0;
          }
          
          .contact-cards-section {
            margin-top: 0;
          }
          
          .interactive-contact__wrapper {
            padding: 30px 20px;
          }
          
          .cta-title {
            font-size: 32px;
          }
          
          .cta-wrapper {
            padding: 40px 20px;
          }
          
          .cta-email__address {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            gap: 30px;
          }
          
          .stat-number {
            font-size: 32px;
          }
          
          .contact-method {
            padding: 15px;
          }
          
          .cta-features {
            gap: 20px;
          }
        }

        /* Utility Classes */
        .align-items-center {
          align-items: center;
        }

        .gutter-y-30 {
          row-gap: 30px;
        }

        /* Container & Grid */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
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

        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }

        @media (max-width: 991px) {
          .col-lg-3, .col-lg-4, .col-lg-6, .col-lg-8, .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        /* Animations */
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