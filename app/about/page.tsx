// app/about/page.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
export default function AboutUs() {
  // Initialize animations on component mount
  useEffect(() => {
    // You can add WOW.js initialization here if needed
    // For now, we'll use CSS animations
  }, []);

  return (
    <div className="about-page">
         <PageHeader title="About Us" />
      {/* About Section */}
      <section className="about-one about-one--about section-space">
        <div className="container">
          <div className="row gutter-y-50">
            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="about-one__image">
                <div className="about-one__image__inner">
                  {/* Main Image */}
                  <Image
                    src="/assets/images/about/about-1-1.png"
                    alt="About speedy Loan Center"
                    width={370}
                    height={512}
                    className="about-one__main-image"
                  />
                  
                  {/* Border Image */}
                  <Image
                    src="/assets/images/about/about-1-2.png"
                    alt="About speedy Loan Center"
                    width={250}
                    height={200}
                    className="about-one__image__with-border"
                  />
                  
                  {/* Shape Image */}
                  <Image
                    src="/assets/images/shapes/about-shape-1-1.png"
                    alt="Decorative shape"
                    width={100}
                    height={100}
                    className="about-one__image__shape"
                  />
                  
                  {/* Experience Box */}
                  <div className="about-one__experience">
                    <div 
                      className="about-one__experience__bg"
                      style={{ 
                        backgroundImage: 'url(/assets/images/shapes/about-experience-bg-1-1.png)' 
                      }}
                    ></div>
                    
                    <div className="about-one__experience__content">
                      <Link 
                        href="#" 
                        className="video-btn video-popup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-play">▶</i>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </Link>
                      
                      <h3 className="about-one__experience__year">15+</h3>
                      <h3 className="about-one__experience__title">year of experience</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="about-one__content">
                {/* Section Title */}
                <div className="sec-title">
                  <div className="sec-title__top">
                    <div className="sec-title__shape">
                      <div className="sec-title__shape__one"></div>
                      <div className="sec-title__shape__two"></div>
                    </div>
                    <h6 className="sec-title__tagline">welcome to speedy loan center</h6>
                  </div>
                  <h3 className="sec-title__title">
                    Our Loans Will Make Your <br /> Dreams Come True
                  </h3>
                </div>
                
                {/* Text Content */}
                <div className="about-one__text-box wow fadeInUp" data-wow-duration="1500ms">
                  <p className="about-one__text">
                    At speedy Loan Center, we believe that financial assistance should be accessible, 
                    transparent, and fast. Our mission is to provide individuals and businesses with 
                    quick loan solutions without the traditional banking bureaucracy.
                  </p>
                </div>
                
                {/* Features List */}
                <div className="about-one__list">
                  <div className="about-one__list__left wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                      quick loan process
                    </div>
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                      very low rates
                    </div>
                  </div>
                  
                  <div className="about-one__list__right wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                      small business loan
                    </div>
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                      studying abroad loan
                    </div>
                  </div>
                </div>
                
                {/* Button */}
                <div className="about-one__button wow fadeInUp" data-wow-duration="1500ms">
                  <Link href="/apply-loan" className="easilon-btn easilon-btn--border">
                    <span>apply for loan</span>
                    <span className="easilon-btn__icon">
                      <i className="icon-double-right-arrow">→</i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-one section-space">
        <div 
          className="why-choose-one__bg"
          style={{ 
            backgroundImage: 'url(/assets/images/shapes/why-choose-bg-1-1.png)' 
          }}
        ></div>
        
        <div className="container">
          <div className="row gutter-y-50 align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-one__content">
                {/* Section Title */}
                <div className="sec-title">
                  <div className="sec-title__top">
                    <div className="sec-title__shape">
                      <div className="sec-title__shape__one"></div>
                      <div className="sec-title__shape__two"></div>
                    </div>
                    <h6 className="sec-title__tagline">our benefits</h6>
                  </div>
                  <h3 className="sec-title__title">why choose us</h3>
                </div>
                
                {/* Text Content */}
                <div className="why-choose-one__text-box wow fadeInUp" data-wow-duration="1500ms">
                  <p className="why-choose-one__text">
                    We offer more than just loans - we provide financial solutions tailored to your needs. 
                    With our experienced team, cutting-edge technology, and customer-centric approach, 
                    we ensure a seamless borrowing experience from application to approval.
                  </p>
                </div>
                
                {/* Features List */}
                <div className="why-choose-one__list">
                  <div className="why-choose-one__list__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                    <span className="why-choose-one__list__icon">
                      <i className="icon-low-price">$</i>
                    </span>
                    lower rates
                  </div>
                  <div className="why-choose-one__list__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                    <span className="why-choose-one__list__icon">
                      <i className="icon-loan-1">⚡</i>
                    </span>
                    quick and easy
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="why-choose-one__progress wow fadeInUp" data-wow-duration="1500ms">
                  <div className="why-choose-one__progress__box progress-box">
                    <h4 className="progress-box__title">loan process</h4>
                    <div className="progress-box__bar">
                      <div className="progress-box__bar__inner count-bar" data-percent="85%">
                        <div className="progress-box__number count-text">85%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="why-choose-one__progress__box progress-box">
                    <h4 className="progress-box__title">business consultancy</h4>
                    <div className="progress-box__bar">
                      <div className="progress-box__bar__inner count-bar" data-percent="95%">
                        <div className="progress-box__number count-text">95%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="why-choose-one__progress__box progress-box">
                    <h4 className="progress-box__title">payments benefits</h4>
                    <div className="progress-box__bar">
                      <div className="progress-box__bar__inner count-bar" data-percent="90%">
                        <div className="progress-box__number count-text">90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 wow fadeInRight" data-wow-duration="1500ms">
              <div className="why-choose-one__image">
                <div className="why-choose-one__image__inner">
                  <div className="why-choose-one__image__one">
                    <Image
                      src="/assets/images/resources/why-choose-1-1.png"
                      alt="Why choose speedy Loan Center"
                      width={500}
                      height={350}
                      className="why-choose-one__main-image"
                    />
                    <Image
                      src="/assets/images/shapes/why-choose-shape-1-1.png"
                      alt="Decorative shape"
                      width={150}
                      height={150}
                      className="why-choose-one__image__one__shape"
                    />
                  </div>
                  
                  <div className="why-choose-one__image__two">
                    <Image
                      src="/assets/images/resources/why-choose-shape-1-2.png"
                      alt="Customer service at speedyy Loan Center"
                      width={400}
                      height={250}
                      className="why-choose-one__secondary-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Shape */}
        <Image
          src="/assets/images/shapes/why-choose-shape-1-2.png"
          alt="Decorative shape"
          width={100}
          height={100}
          className="why-choose-one__shape"
        />
      </section>
     </div>
  );
}