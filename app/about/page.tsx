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
                    Fast Personal Loans to <br /> Meet Your Needs
                  </h3>
                </div>
                
                {/* Text Content */}
                <div className="about-one__text-box wow fadeInUp" data-wow-duration="1500ms">
                  <p className="about-one__text">
                  At Speedy Loan Center, we believe financial help should be fast, simple, and transparent. Our mission is to provide individuals with quick personal loans from $100 to $5,000 — no unnecessary paperwork, no delays.
                   
                  </p>
                </div>
                
                {/* Features List */}
                <div className="about-one__list">
                  <div className="about-one__list__left wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                     Quick Loan Process
                    </div>
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                     Very Low Rates
                    </div>
                  </div>
                  
                  <div className="about-one__list__right wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                      Flexible Loan Amounts
                    </div>
                    <div className="about-one__list__item">
                      <span className="about-one__list__icon">
                        <i className="icon-check-mark">✓</i>
                      </span>
                      Trusted & Secure
                    </div>
                  </div>
                </div>
                
                {/* Button */}
                <div className="about-one__button wow fadeInUp" data-wow-duration="1500ms">
                  <Link href="/apply-loan" className="easilon-btn easilon-btn--border">
                    <span>apply for loan</span>
                    <span className="easilon-btn__icon">
                      <i className="icon-double-right-arrow"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    
     </div>
  );
}