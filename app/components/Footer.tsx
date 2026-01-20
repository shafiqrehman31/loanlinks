import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Brand Section with Logo */}
          <div className="col-md-4 mb-4">
            <div className="mb-3">
              <Link href="/">
                <Image
                  src="/assets/images/logo-light.png"
                  alt="Speed Loan Center"
                  width={180}
                  height={60}
                  className="mb-3"
                />
              </Link>
            </div>
            <p className="mb-0">
              Your fastest path to financial freedom. Quick approvals, competitive rates, 
              and personalized loan solutions for all your needs.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about"  className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/apply" className="text-white text-decoration-none">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Pages */}
          <div className="col-md-3 mb-4">
            <h6 className="mb-3">Legal Pages</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/terms" className="text-white text-decoration-none">
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/california-privacy" className="text-white text-decoration-none">
                  California Privacy Notice
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/before-apply" className="text-white text-decoration-none">
                  Before you Apply
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="mb-3">Contact</h6>
            <p className="mb-2">Email: info@speedloancenter.com</p>
            <p className="mb-2">Phone: +91 5698 0036 420</p>
            
            <h6 className="mb-3 mt-4">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-4 border-top border-secondary">
          <p className="mb-0">© {currentYear} <strong>Speed Loan Center</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}