'use client';
import PageHeader from '../components/PageHeader';

export default function ContactUs() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Office Address',
      details: ['500 8th Avenue FRNT 3', 'Manhattan, NY 10018', 'United States'],
      link: 'https://maps.google.com/?q=500+8th+Avenue+FRNT+3+Manhattan+NY+10018',
      linkText: 'View on Map',
      gradient: 'linear-gradient(135deg, #E45551 0%, #ff7a75 100%)'
    },
    {
      icon: '📧',
      title: 'Email Address',
      details: ['info@speedyloancenter.com', 'We respond within 24 hours'],
      link: 'mailto:info@speedyloancenter.com',
      linkText: 'Send Email',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ];

  return (
    <div className="contact-page">
      <PageHeader title="Contact Us" />
      
      {/* Hero Section */}
      <section className="contact-hero section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  Get In <span className="gradient-text">Touch</span>
                </h1>
                <p className="hero-description">
                  At Speedy Loan Center, we're committed to providing exceptional service and support 
                  for all your financial needs. Contact us using the information below, and our team 
                  will get back to you promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section section-space">
        <div className="container">
          <div className="row justify-content-center gutter-y-40">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-6">
                <div 
                  className="contact-card wow fadeInUp" 
                  data-wow-delay={`${index * 100}ms`}
                  style={{ background: info.gradient }}
                >
                  <div className="contact-card__inner">
                    <div className="contact-card__icon">{info.icon}</div>
                    <h3 className="contact-card__title">{info.title}</h3>
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

      {/* Simple Contact Message */}
      <section className="contact-message-section section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="contact-message">
                <div className="message-icon">💬</div>
                <h2 className="message-title">We're Here to Help</h2>
                <p className="message-text">
                  For loan inquiries, application support, or any questions about our services, 
                  please reach out to us via email. Our dedicated team is ready to assist you 
                  with your financial needs.
                </p>
                <div className="message-cta">
                  <a href="mailto:info@speedyloancenter.com" className="email-cta">
                    Email Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS Styles */}
      <style>{`
        /* ============================================
           SIMPLIFIED CONTACT PAGE STYLES
        ============================================= */

        /* Hero Section */
        .contact-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          padding: 100px 0 60px 0;
          text-align: center;
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
          color: #333;
          font-family: 'Poppins', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(45deg, #E45551, #ff7a75);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        /* Contact Information Section */
        .contact-info-section {
          padding: 60px 0;
        }

        .contact-card {
          border-radius: 20px;
          padding: 50px 40px;
          color: white;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .contact-card__inner {
          position: relative;
          z-index: 2;
        }

        .contact-card__icon {
          font-size: 60px;
          margin-bottom: 25px;
          opacity: 0.9;
          display: inline-block;
        }

        .contact-card__title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .contact-card__details {
          margin-bottom: 30px;
        }

        .contact-card__detail {
          margin: 0 0 10px 0;
          opacity: 0.9;
          font-size: 18px;
          line-height: 1.5;
        }

        .contact-card__link {
          color: white;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 25px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }

        .contact-card__link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* Contact Message Section */
        .contact-message-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
        }

        .contact-message {
          max-width: 700px;
          margin: 0 auto;
        }

        .message-icon {
          font-size: 70px;
          margin-bottom: 25px;
          opacity: 0.8;
        }

        .message-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #333;
          font-family: 'Poppins', sans-serif;
        }

        .message-text {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .message-cta {
          margin-top: 30px;
        }

        .email-cta {
          display: inline-block;
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
          color: white;
          text-decoration: none;
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 25px rgba(228, 85, 81, 0.2);
        }

        .email-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(228, 85, 81, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .hero-title {
            font-size: 36px;
          }
          
          .contact-hero {
            padding: 80px 0 40px 0;
          }
          
          .contact-card {
            padding: 40px 30px;
            min-height: 280px;
          }
          
          .contact-card__icon {
            font-size: 50px;
          }
          
          .contact-card__title {
            font-size: 24px;
          }
          
          .contact-card__detail {
            font-size: 16px;
          }
          
          .message-title {
            font-size: 28px;
          }
          
          .message-text {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 28px;
          }
          
          .hero-description {
            font-size: 16px;
          }
          
          .contact-card {
            padding: 30px 20px;
            min-height: 250px;
          }
          
          .contact-card__icon {
            font-size: 40px;
          }
          
          .contact-card__title {
            font-size: 22px;
          }
          
          .message-title {
            font-size: 24px;
          }
          
          .email-cta {
            width: 100%;
            text-align: center;
          }
        }

        /* Utility Classes */
        .justify-content-center {
          justify-content: center;
        }

        .align-items-center {
          align-items: center;
        }

        .gutter-y-40 {
          row-gap: 40px;
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

        .col-lg-6, .col-lg-8 {
          padding: 0 15px;
        }

        .col-lg-6 { 
          flex: 0 0 50%; 
          max-width: 50%; 
        }

        .col-lg-8 { 
          flex: 0 0 66.666667%; 
          max-width: 66.666667%; 
        }

        @media (max-width: 991px) {
          .col-lg-6, .col-lg-8 {
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

        /* Section Spacing */
        .section-space {
          padding: 60px 0;
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