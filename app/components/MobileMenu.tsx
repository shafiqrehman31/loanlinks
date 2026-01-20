// app/components/MobileMenu.tsx
'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import './MobileMenu.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Our Team', href: '/team' },
    { name: 'News', href: '/news' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2 className="menu-title">Menu</h2>
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="menu-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="menu-contact">
          <h3 className="contact-title">Contact Us</h3>
          <div className="contact-details">
            <a
              href="mailto:needhelp@easilon.com"
              className="contact-link"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={18} />
              <span>needhelp@easilon.com</span>
            </a>
            <a
              href="tel:+9156980036420"
              className="contact-link"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              <span>+91 5698 0036 420</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}