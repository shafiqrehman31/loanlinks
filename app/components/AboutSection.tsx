import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="about-three section-space" id="about">
      <div className="container">
        <div className="row gutter-y-50 align-items-center">
          {/* Left Column: Images */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
            <div className="about-three__image">
              <Image
                src="/assets/images/about/about-3-1.png"
                alt="about image"
                className="about-three__image__one"
                width={600}
                height={600}
              />
              <div className="about-three__image__inner">
                <Image
                  src="/assets/images/about/about-us-main-support.png"
                  alt="about image"
                  className="about-three__image__two"
                  width={270}
                  height={185}
                />
              </div>
              <div className="about-three__experience">
                <div
                  className="about-three__experience__bg"
                  style={{
                    backgroundImage: "url('/assets/images/shapes/about-shape-3-1.png')",
                  }}
                ></div>
                <div className="about-three__experience__content">
                  <div className="about-three__experience__text">
                    <h4 className="about-three__experience__title">
                      years of <br />
                      experience
                    </h4>
                  </div>
                  <h4 className="about-three__experience__year">5+</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-6">
            <div className="about-three__content">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">welcome to Speedy Loan Center</h6>
                </div>
                <h3 className="sec-title__title">
                 Fast Loan Approvals  No Waiting
                </h3>
              </div>

              <div className="about-three__text-box wow fadeInUp" data-wow-duration="1500ms">
                <p className="about-three__text">
                 At <b>Speedy Loan Center,</b> we specialize in helping you get a loan quickly and easily. Our process is simple, transparent, and designed for your convenience. Whether you need funds for everyday expenses or unexpected costs, we provide flexible loan amounts from $100 up to $5,000 with fast approval and complete peace of mind.
                </p>
                
                <p className="about-three__text">
                We are trusted by customers nationwide for<b> reliable loan solutions </b>because your financial needs matter, and we make borrowing simple.
                </p>
              </div>

              <div className="about-three__inner">
                <div
                  className="about-three__inner__item wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="00ms"
                >
                  <span className="about-three__inner__icon">
                    <i className="icon-loan-1"></i>
                  </span>
                  <div className="about-three__inner__content">
                    <h4 className="about-three__inner__title">quick and easy</h4>
                    <p className="about-three__inner__text">Easy steps, instant results.</p>
                  </div>
                </div>

                <div
                  className="about-three__inner__image wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <Image
                    src="/assets/images/about/about-us.png"
                    alt="about"
                    width={400}
                    height={300}
                  />
                </div>
              </div>

              <div className="about-three__bottom">
                <div
                  className="about-three__button wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="00ms"
                >
                  <Link href="/about" className="easilon-btn">
                    <span>know about us</span>
                    <span className="easilon-btn__icon">
                      <i className="icon-double-right-arrow"></i>
                    </span>
                  </Link>
                </div>

                <div
                  className="about-three__director wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/assets/images/shapes/about-shape-3-2.png"
        alt="shape"
        className="about-three__shape-one"
        width={229}
        height={273}
      />
      <Image
        src="/assets/images/shapes/about-shape-3-3.png"
        alt="shape"
        className="about-three__shape-two"
        width={170}
        height={181}
      />
    </section>
  );
}
