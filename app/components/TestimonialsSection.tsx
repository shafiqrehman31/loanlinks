'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-three section-space-top" id="testimonials">
      <div className="container">
        <div className="testimonials-three__top">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="sec-title sec-title--center">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                  <h6 className="sec-title__tagline">our testimonial</h6>
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one"></div>
                    <div className="sec-title__shape__two"></div>
                  </div>
                </div>
                <h3 className="sec-title__title">
                  peoples talk about <br /> easilon service
                </h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="testimonials-three__carousel">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true, el: '.testimonials-pagination' }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${index * 100}ms`}>
                  <div className="testimonial-card-three">
                    <div className="testimonial-card-three__bg">
                      <div 
                        className="testimonial-card-three__bg__inner" 
                        style={{ backgroundImage: "url(/assets/images/shapes/testimonial-card-bg-3-1.png)" }}
                      ></div>
                    </div>
                    
                    <div className="testimonial-card-three__content">
                      
                      
                      <div className="easilon-ratings">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="easilon-ratings__icon">
                            <i className="fa fa-star"></i>
                          </span>
                        ))}
                      </div>
                      
                      <p className="testimonial-card-three__quote">"{item.message}"</p>
                      
                      <div className="testimonial-card-three__bottom">
                        <div className="testimonial-card-three__identity">
                          <h4 className="testimonial-card-three__name">{item.name}</h4>
                        </div>
                        
                        <svg className="testimonial-card-three__icon" viewBox="0 0 65 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M56.7143 27.6V26.6H55.7143H46.4286C41.8504 26.6 38.1429 22.9134 38.1429 18.4V9.2C38.1429 4.68663 41.8504 1 46.4286 1H55.7143C60.2924 1 64 4.68663 64 9.2V13.8V18.4V28.75C64 37.7196 56.6652 45 47.5893 45H46.4286C44.404 45 42.7857 43.3834 42.7857 41.4C42.7857 39.4166 44.404 37.8 46.4286 37.8H47.5893C52.6161 37.8 56.7143 33.7529 56.7143 28.75V27.6ZM19.5714 27.6V26.6H18.5714H9.28571C4.70758 26.6 1 22.9134 1 18.4V9.2C1 4.68663 4.70758 1 9.28571 1H18.5714C23.1496 1 26.8571 4.68663 26.8571 9.2V13.8V18.4V28.75C26.8571 37.7196 19.5223 45 10.4464 45H9.28571C7.26116 45 5.64286 43.3834 5.64286 41.4C5.64286 39.4166 7.26116 37.8 9.28571 37.8H10.4464C15.4732 37.8 19.5714 33.7529 19.5714 28.75V27.6Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Dots */}
          <div className="testimonials-pagination"></div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'John M., California',
    message: 'Speedy Loan Center made it so easy to get a personal loan. Funds were in my account the same day — highly recommend!',
  },
  {
    name: 'Samantha R., Texas',
    message: 'I was worried about my credit score, but they approved my loan quickly and hassle-free. Great service!',
  },
  {
    name: 'David L., Florida',
    message: 'The process was simple and transparent. I got exactly the amount I needed for unexpected expenses.',
  },
  {
    name: 'Emily K., New York',
    message: 'Fast, reliable, and friendly. I appreciated how quick the approval was and how easy everything felt.',
  },
  {
    name: 'Michael T., Illinois',
    message: 'Excellent experience. Applying online was quick, and the funds were transferred directly to my account.',
  },
];