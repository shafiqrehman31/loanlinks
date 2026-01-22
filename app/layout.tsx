import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';


// Google Font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal','italic'],
  display: 'swap',
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'SpeedyLoanCenter | Get Fast Loans Online – Hassle-Free & Secure',
  description: 'SpeedyLoanCenter helps you get fast, secure, and hassle-free loans online. Apply in minutes with no rush, no hidden fees, and quick approval from trusted lenders.',
};

// All JS scripts (footer)
const scripts = [
  '/assets/vendors/jquery/jquery-3.7.0.min.js',
  '/assets/vendors/bootstrap/js/bootstrap.bundle.min.js',
  '/assets/vendors/bootstrap-select/bootstrap-select.min.js',
  '/assets/vendors/jarallax/jarallax.min.js',
  '/assets/vendors/jquery-ui/jquery-ui.js',
  '/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js',
  '/assets/vendors/jquery-appear/jquery.appear.min.js',
  '/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js',
  '/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js',
  '/assets/vendors/jquery-validate/jquery.validate.min.js',
  '/assets/vendors/nouislider/nouislider.min.js',
  '/assets/vendors/tiny-slider/tiny-slider.js',
  '/assets/vendors/wnumb/wNumb.min.js',
  '/assets/vendors/owl-carousel/js/owl.carousel.min.js',
  '/assets/vendors/slick/slick.min.js',
  '/assets/vendors/wow/wow.js',
  '/assets/vendors/imagesloaded/imagesloaded.min.js',
  '/assets/vendors/isotope/isotope.js',
  '/assets/vendors/countdown/countdown.min.js',
  '/assets/vendors/jquery-circleType/jquery.circleType.js',
  '/assets/vendors/jquery-lettering/jquery.lettering.min.js',
  '/assets/js/easilon.js',
];
const isHomePage = true; 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
        <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/vendors/easilon-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/vendors/slick/slick.css" />

        {/* Template CSS */}
        <link rel="stylesheet" href="/assets/css/easilon.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${montserrat.className} ${isHomePage ? 'home-page' : 'inner-page'}`}>
      {/*<body className={`${montserrat.className} custom-cursor`}>*/}
         {/* Custom cursor elements */}
  <div className="custom-cursor__cursor"></div>
  <div className="custom-cursor__cursor-two"></div>


  {/* Page Wrapper */}
  <div className="page-wrapper"></div>
        {/* Header */}
        <Header />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Footer Scripts */}
        {scripts.map((src) => (
          <Script key={src} src={src} strategy="afterInteractive" />
        ))}
        
      </body>
    </html>
  );
}
