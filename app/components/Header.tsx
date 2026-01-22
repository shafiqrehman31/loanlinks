'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  
  // Check if current page is home page
  const isHomePage = pathname === '/';

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Menu items
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Check if a menu item is active (current page)
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header className={`main-header main-header--three sticky-header sticky-header--three ${isSticky ? 'sticky-header--active' : ''} ${!isHomePage ? 'inner-page' : ''}`}>
        <div className="container-fluid">
          <div className="main-header__inner">
            
            {/* Logo - SIMPLIFIED SOLUTION */}
            <div className="main-header__logo">
              <Link href="/" className="logo-link">
                {/* Single logo that changes color with CSS filter */}
                <Image
                  src="/logo-light.png" // Put your logo in public/logo.png
                  alt="speedy Loan Center"
                  width={150}
                  height={50}
                  className="logo-img"
                  priority
                />
                {/* Text fallback */}
                <span className="logo-text-fallback">Speed Loan Center</span>
              </Link>
            </div>

            <div className="main-header__right">
              
              {/* Desktop Navigation */}
              <nav className="main-header__nav main-menu">
                <ul className="main-menu__list">
                  {menuItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.name} className="scrollToLink">
                        <Link 
                          href={item.href} 
                          className={`nav-link ${active ? 'active' : ''}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile Menu Toggle Button */}
              <button 
                className={`mobile-nav-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>

              {/* Loan Quote Button */}
              <Link href="/apply-loan" className="easilon-btn main-header__btn">
                <span>Loan Quote</span>
                <span className="easilon-btn__icon">
                  <i className="icon-right-arrow">→</i>
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <Link href="/" onClick={handleLinkClick} className="mobile-logo-link">
                  <Image
                    src="/logo-light.png"
                    alt="speedy Loan Center"
                    width={150}
                    height={50}
                    className="mobile-logo-img"
                  />
                  <span className="mobile-logo-text-fallback">speedy Loan Center</span>
                </Link>
              </div>
              <button 
                className="mobile-menu-close" 
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                ×
              </button>
            </div>
            
            <nav className="mobile-menu-nav">
              <ul>
                {menuItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        onClick={handleLinkClick}
                        className={`mobile-menu-link ${active ? 'active' : ''}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            
            <div className="mobile-menu-contact">
              <div className="mobile-menu-contact-item">
                <div className="mobile-menu-contact-icon">
                  <i className="icon-phone">📞</i>
                </div>
                <div className="mobile-menu-contact-text">
                  <p>Call Anytime</p>
                  <h4>
                    <a href="tel:+9156980036420" onClick={handleLinkClick}>+91 5698 0036 420</a>
                  </h4>
                </div>
              </div>
              <div className="mobile-menu-contact-item">
                <div className="mobile-menu-contact-icon">
                  <i className="icon-email">✉️</i>
                </div>
                <div className="mobile-menu-contact-text">
                  <p>Send Email</p>
                  <h4>
                    <a href="mailto:info@speedyloancenter.com" onClick={handleLinkClick}>info@speedyloancenter.com</a>
                  </h4>
                </div>
              </div>
            </div>
            
            <div className="mobile-menu-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f">FB</i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter">TW</i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram">IG</i></a>
            </div>

            {/* Mobile Loan Quote Button */}
            <div className="mobile-menu-quote-btn">
              <Link href="/apply-loan" className="easilon-btn" onClick={handleLinkClick}>
                <span>Get Loan Quote</span>
                <span className="easilon-btn__icon">
                  <i className="icon-right-arrow">→</i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        /* ============================================
           LOGO STYLES - 100% WORKING
        ============================================ */
        .main-header__logo {
          position: relative;
          z-index: 1001;
          display: flex;
          align-items: center;
        }
        
        .logo-link {
          display: block !important;
          width: 190px;
          height: 70px;
          position: relative;
          text-decoration: none;
        }
        
        .logo-img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          transition: filter 0.3s ease;
        }
        
        .logo-text-fallback {
          display: none;
          color: ${isSticky || !isHomePage ? 'white' : '#333'};
          font-weight: bold;
          font-size: 18px;
          line-height: 50px;
        }
        
        /* If image fails to load, show text */
        .logo-link:has(img[data-failed]) .logo-img {
          display: none;
        }
        
        .logo-link:has(img[data-failed]) .logo-text-fallback {
          display: block;
        }
        
        /* Mobile logo */
        .mobile-logo-link {
          display: block;
          width: 150px;
          height: 50px;
          position: relative;
        }
        
        .mobile-logo-img {
          width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
        }
        
        .mobile-logo-text-fallback {
          display: none;
          color: #333;
          font-weight: bold;
          font-size: 18px;
          line-height: 50px;
        }
        
        .mobile-logo-link:has(img[data-failed]) .mobile-logo-img {
          display: none;
        }
        
        .mobile-logo-link:has(img[data-failed]) .mobile-logo-text-fallback {
          display: block;
        }
        
        /* ============================================
           BASE HEADER STYLES
        ============================================ */
        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          transition: all 0.3s ease;
          padding: 15px 0;
        }
        
        .container-fluid {
          width: 100%;
          padding: 0 15px;
          margin: 0 auto;
          max-width: 1200px;
        }
        
        .main-header__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        /* ============================================
           INNER PAGES - ALWAYS DARK BACKGROUND
        ============================================ */
        .main-header.inner-page {
          background: #262626 !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .main-header.inner-page .nav-link {
          color: white !important;
        }
        
        .main-header.inner-page .nav-link:hover {
          color: #E45551 !important;
        }
        
        .main-header.inner-page .mobile-nav-toggle .hamburger-line {
          background: white !important;
        }
        
        /* ============================================
           STICKY HEADER
        ============================================ */
        .sticky-header--active {
          background: #262626 !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .sticky-header--active .nav-link {
          color: white !important;
        }
        
        .sticky-header--active .nav-link:hover {
          color: #E45551 !important;
        }
        
        .sticky-header--active .mobile-nav-toggle .hamburger-line {
          background: white !important;
        }
        
        /* ============================================
           RIGHT SECTION
        ============================================ */
        .main-header__right {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        
        /* ============================================
           DESKTOP NAVIGATION
        ============================================ */
        .main-menu__list {
          display: flex;
          gap: 30px;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        
        .main-menu__list li {
          list-style: none;
          position: relative;
        }
        
        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: all 0.3s ease;
          position: relative;
          padding: 5px 0;
          display: inline-block;
        }
        
        .nav-link:hover {
          color: #E45551;
        }
        
        /* Underline for all links */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #E45551;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        /* Active menu item */
        .nav-link.active {
          color: #E45551 !important;
          font-weight: 600;
        }
        
        .nav-link.active::after {
          width: 100% !important;
          background: #E45551 !important;
          bottom: -5px;
        }
        
        /* Active on dark background */
        .main-header.inner-page .nav-link.active,
        .sticky-header--active .nav-link.active {
          color: #E45551 !important;
        }
        
        /* ============================================
           BUTTON STYLES
        ============================================ */
        .easilon-btn {
          background: #E45551;
          border: none;
          padding: 12px 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .easilon-btn:hover {
          background: #d14541;
          transform: translateY(-2px);
        }
        
        .easilon-btn__icon {
          display: inline-flex;
          align-items: center;
        }
        
        /* ============================================
           MOBILE TOGGLE BUTTON
        ============================================ */
        .mobile-nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 40px;
          height: 30px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
          position: relative;
        }
        
        .hamburger-line {
          display: block;
          width: 100%;
          height: 3px;
          background: #333;
          transition: all 0.3s ease;
          border-radius: 3px;
        }
        
        .mobile-nav-toggle.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }
        
        .mobile-nav-toggle.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-nav-toggle.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }
        
        /* ============================================
           MOBILE MENU OVERLAY
        ============================================ */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        /* ============================================
           MOBILE MENU
        ============================================ */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85%;
          height: 100vh;
          background: white;
          z-index: 9999;
          transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu.active {
          right: 0;
        }
        
        /* Hide on desktop */
        @media (min-width: 992px) {
          .mobile-menu-overlay,
          .mobile-menu {
            display: none !important;
          }
        }
        
        /* Mobile menu content */
        .mobile-menu-content {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          margin-bottom: 30px;
        }
        
        .mobile-menu-logo {
          width: 150px;
          height: 50px;
          display: flex;
          align-items: center;
        }
        
        .mobile-menu-close {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #333;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        
        .mobile-menu-close:hover {
          color: #E45551;
        }
        
        /* Mobile menu navigation */
        .mobile-menu-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .mobile-menu-nav li {
          margin-bottom: 15px;
        }
        
        .mobile-menu-link {
          display: block;
          padding: 12px 0;
          color: #333;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .mobile-menu-link:hover {
          color: #E45551;
          padding-left: 10px;
        }
        
        /* Mobile active menu item */
        .mobile-menu-link.active {
          color: #E45551 !important;
          font-weight: 600;
          padding-left: 15px;
        }
        
        .mobile-menu-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: #E45551;
          border-radius: 50%;
        }
        
        /* Mobile contact */
        .mobile-menu-contact {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .mobile-menu-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .mobile-menu-contact-icon {
          width: 40px;
          height: 40px;
          background: #E45551;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: white;
          font-style: normal;
        }
        
        .mobile-menu-contact-text p {
          margin: 0;
          font-size: 14px;
          color: #666;
        }
        
        .mobile-menu-contact-text h4 {
          margin: 5px 0 0;
          font-size: 16px;
        }
        
        .mobile-menu-contact-text a {
          color: #333;
          text-decoration: none;
        }
        
        /* Mobile social */
        .mobile-menu-social {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin: 20px 0;
        }
        
        .mobile-menu-social a {
          width: 40px;
          height: 40px;
          background: #f5f5f5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          text-decoration: none;
          font-style: normal;
        }
        
        /* Mobile quote button */
        .mobile-menu-quote-btn {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .mobile-menu-quote-btn .easilon-btn {
          width: 100%;
          justify-content: center;
        }
        
        /* ============================================
           RESPONSIVE STYLES
        ============================================ */
        /* Show hamburger and hide desktop nav on mobile */
        @media (max-width: 991px) {
          .main-header__nav {
            display: none;
          }
          
          .mobile-nav-toggle {
            display: flex;
          }
          
          .main-header__btn {
            display: none;
          }
        }
        
        /* Tablet styles */
        @media (max-width: 768px) {
          .container-fluid {
            padding: 0 20px;
          }
          
          .main-header {
            padding: 12px 0;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 480px) {
          .mobile-menu {
            width: 100%;
            right: -100%;
          }
          
          .mobile-menu.active {
            right: 0;
          }
          
          .mobile-menu-content {
            padding: 20px;
          }
          
          .main-header__logo,
          .mobile-menu-logo {
            width: 130px;
            height: 45px;
          }
          
          .logo-link,
          .mobile-logo-link {
            width: 130px !important;
            height: 45px !important;
          }
        }
        
        /* Small mobile styles */
        @media (max-width: 360px) {
          .main-header__logo,
          .mobile-menu-logo {
            width: 120px;
            height: 40px;
          }
          
          .logo-link,
          .mobile-logo-link {
            width: 120px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </>
  );
}