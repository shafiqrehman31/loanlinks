'use client';

import Link from 'next/link';

import Slider from "react-slick";
import { useRef } from "react";

export default function HeroSection() {
  const mainSlider = useRef<typeof Slider | null>(null);
  const counterSlider = useRef<typeof Slider | null>(null);
  
  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    accessibility: false,
    pauseOnFocus: false,
    pauseOnHover: false,

    beforeChange: (_: number, next: number) => {
      counterSlider.current?.slickGoTo(next, true);
    },
  };

  const counterSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    vertical: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    accessibility: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  swipe: false,
    beforeChange: (_: number, next: number) => {
      mainSlider.current?.slickGoTo(next, true);
    },
  };

  return (
    <section className="main-slider-three" id="home">
      {/* Main Slider */}
      <Slider ref={mainSlider} {...mainSettings} className="main-slider-three__carousel">
        {slides.map((slide, i) => (
          <div key={i} className="main-slider-three__item">
            <div
              className="main-slider-three__bg"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            <SliderContent {...slide} />
          </div>
        ))}
      </Slider>

      {/* Counter Slider */}
      <Slider
        ref={counterSlider}
        {...counterSettings}
        className="main-slider-three__carousel-counter"
      >
        {['01', '02', '03', '04'].map((num) => (
          <div key={num}>
            <span className="main-slider-three__carousel-counter__text">{num}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
}

/* ------------------ DATA ------------------ */

const slides = [
  {
    bg: '/assets/images/backgrounds/main-slider-bg-3-1.png',
    subtitle: 'Speed Loans Center for Bright Futures',
    title1: 'Fast, Fair Personal ',
    title2: 'Loans in Minutes',
  },
  {
    bg: '/assets/images/backgrounds/main-slider-bg-3-2.png',
    subtitle: 'Speed Loans Center for Bright Futures',
    title1: 'Smart Loan Solutions',
    title2: 'Built for Your Future',
  },
  {
    bg: '/assets/images/backgrounds/main-slider-bg-3-3.png',
    subtitle: 'Speed Loans Center for Bright Futures',
    title1: 'We provide best',
    title2: 'services for your loan',
  },
  {
    bg: '/assets/images/backgrounds/main-slider-bg-3-4.png',
    subtitle: 'Speed Loans Center for Bright Futures',
    title1: 'Simple, Secure &',
    title2: 'Stress-Free Borrowing',
  },
];

/* ------------------ SLIDE CONTENT ------------------ */

function SliderContent({
  subtitle,
  title1,
  title2,
}: {
  subtitle: string;
  title1: string;
  title2: string;
}) {
  return (
    <>
      {/* Social Links */}
      <div className="main-slider-three__social social-links-two">
        {[
          { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
          { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
          { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
          { href: 'https://youtube.com', icon: 'fab fa-youtube', label: 'Youtube' },
        ].map((social) => (
          <a key={social.label} href={social.href}>
            <span className="social-links-two__icon">
              <i className={social.icon} />
            </span>
            <span className="sr-only">{social.label}</span>
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="main-slider-three__container container">
        <div className="row gutter-y-60 align-items-center">
          <div className="col-xxl-12 col-lg-10 mx-auto">
            <div className="main-slider-three__content">
              <div className="main-slider-three__top">
                <div className="main-slider-three__top__inner">
                  <div className="main-slider-three__sub-title-shape">
                    <div className="main-slider-three__sub-title-shape__one" />
                    <div className="main-slider-three__sub-title-shape__two" />
                  </div>
                  <h5 className="main-slider-three__sub-title">{subtitle}</h5>
                </div>
              </div>

              <h2 className="main-slider-three__title">
                <span className="main-slider-three__title__inner">
                  <span className="main-slider-three__title__text main-slider-three__title__text--1">
                    {title1}
                  </span>
                </span>
                <span className="main-slider-three__title__inner">
                  <span className="main-slider-three__title__text main-slider-three__title__text--2">
                    {title2}
                  </span>
                </span>
              </h2>

              <div className="main-slider-three__button-group">
                <div className="main-slider-three__button-group__inner">
                  <Link href="/apply-loan" className="main-slider-three__btn easilon-btn">
                    <span>apply for loan</span>
                    <span className="easilon-btn__icon">
                      <i className="icon-double-right-arrow" />
                    </span>
                  </Link>
                </div>

            
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Borders */}
      <div className="main-slider-three__border-box">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`main-slider-three__border main-slider-three__border--${num}`}
          />
        ))}
      </div>
    </>
  );
}
