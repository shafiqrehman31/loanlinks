import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    id: 1,
    icon: "icon-credit", // placeholder for credit-related icon
    title: "Bad Credit? No Problem",
    description: "Fast personal loans for everyone hassle-free and reliable.",
    delay: 0,
  },
  {
    id: 2,
    icon: "icon-online", // placeholder for online/start icon
    title: "Apply Online",
    description: "Start your personal loan application quickly, with no paperwork delays.",
    delay: 100,
  },
  {
    id: 3,
    icon: "icon-bank", // placeholder for bank / cash transfer icon
    title: "Funds in Your Account",
    description: "Get approved personal loan funds instantly simple and secure.",
    delay: 200,
  },
  {
    id: 4,
    icon: "icon-world", // placeholder for global presence icon
    title: "Trusted Nationwide",
    description: "We serve customers across the USA with fast, dependable personal loan solutions.",
    delay: 300,
  },
];


interface FeatureProps {
  feature: {
    id: number;
    icon: string;
    title: string;
    description: string;
    delay: number;
  };
}

function FeatureItem({ feature }: FeatureProps) {
  return (
    <div className="col-xl-6 col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${feature.delay}ms`}>
      <div className="why-choose-two__features">
        <span className="why-choose-two__features__icon">
          <i className={feature.icon}></i>
        </span>
        <div className="why-choose-two__features__content">
          <h3 className="why-choose-two__features__title">{feature.title}</h3>
          <p className="why-choose-two__features__text">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="why-choose-two section-space">
      <div 
        className="why-choose-two__bg" 
        style={{ backgroundImage: "url(/assets/images/shapes/why-choose-bg-2-1.png)" }} 
      ></div>
      
      <div className="container">
        <div className="row gutter-y-60">
          {/* Left Column: Content */}
          <div className="col-lg-6">
            <div className="why-choose-two__content">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">WHAT WE ARE DOING</h6>
                </div>
                <h3 className="sec-title__title">
                  Why You Should Choose <br /> speedy Loan Center?
                </h3>
              </div>
              
              <div className="why-choose-two__text-box wow fadeInUp" data-wow-duration="1500ms">
                <p className="why-choose-two__text">
                 At <b>Speedy Loan Center,</b> we provide fast personal loan approvals with a simple, transparent process. We focus on fair terms, security, and customer satisfaction, helping you access funds quickly and with confidence.
                </p>
              </div>
              
              <div className="row gutter-y-30">
                {features.map((feature) => (
                  <FeatureItem key={feature.id} feature={feature} />
                ))}
              </div>
              
              <div className="why-choose-two__button wow fadeInUp" data-wow-duration="1500ms">
                <Link href="/apply-loan" className="why-choose-two__btn easilon-btn">
                  <span>request for loan</span>
                  <span className="easilon-btn__icon">
                    <i className="icon-double-right-arrow"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="col-lg-6">
            <div className="why-choose-two__image">
              <div 
                className="why-choose-two__image__bg" 
                style={{ backgroundImage: "url(/assets/images/about/about-us-main-support.png" }}
              ></div>
              <Image
                src="/assets/images/shapes/why-choose-shape-2-1.png"
                alt="shape"
                className="why-choose-two__image__shape"
                width={94}
                height={94}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}