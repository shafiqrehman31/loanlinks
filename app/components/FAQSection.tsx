'use client';

import { useState } from 'react';

const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General' },
  { id: 'application', name: 'Application' },
  { id: 'payment', name: 'Payment' },
  { id: 'eligibility', name: 'Eligibility' },
];

const faqItems = [
  {
    id: 1,
    question: "What documents are required for a loan application?",
    answer: "Typically, you'll need proof of identity (passport/driver's license), proof of income (pay stubs/tax returns), bank statements, and proof of address. Specific requirements may vary based on the loan type.",
    category: 'application',
    isOpen: false,
  },
  {
    id: 2,
    question: "How long does the loan approval process take?",
    answer: "Our standard loan approval process takes 24-48 hours for most applications. However, some specialized loans or applications requiring additional documentation may take 3-5 business days.",
    category: 'application',
    isOpen: false,
  },
  {
    id: 3,
    question: "What interest rates do you offer?",
    answer: "Interest rates vary based on loan type, amount, term length, and your credit profile. Our rates start from 4.5% APR for secured loans and 6.5% APR for unsecured loans. Contact us for a personalized rate quote.",
    category: 'payment',
    isOpen: false,
  },
  {
    id: 4,
    question: "Can I apply for a loan with bad credit?",
    answer: "Yes, we consider applications from all credit backgrounds. While credit score affects terms, we evaluate multiple factors including income stability, employment history, and debt-to-income ratio.",
    category: 'eligibility',
    isOpen: false,
  },
  {
    id: 5,
    question: "What is the maximum loan amount I can borrow?",
    answer: "Maximum loan amounts vary by loan type: Personal loans up to $50,000, Business loans up to $500,000, and Home loans up to $2,000,000. Actual approval depends on your financial profile.",
    category: 'general',
    isOpen: false,
  },
  {
    id: 6,
    question: "Are there any hidden fees or charges?",
    answer: "No hidden fees. All charges are clearly outlined in your loan agreement. This includes origination fees (0-5%), late payment fees, and prepayment penalties (if applicable). We believe in complete transparency.",
    category: 'payment',
    isOpen: false,
  },
  {
    id: 7,
    question: "Can I pay off my loan early?",
    answer: "Yes, you can pay off your loan early without any prepayment penalties. Early repayment can save you money on interest charges.",
    category: 'payment',
    isOpen: false,
  },
  {
    id: 8,
    question: "What happens if I miss a payment?",
    answer: "If you miss a payment, we recommend contacting us immediately. We offer grace periods and flexible payment arrangements to help you get back on track without damaging your credit score.",
    category: 'payment',
    isOpen: false,
  },
];

interface FAQItemProps {
  item: {
    id: number;
    question: string;
    answer: string;
    category: string;
    isOpen: boolean;
  };
  toggleFAQ: (id: number) => void;
}

function FAQItem({ item, toggleFAQ }: FAQItemProps) {
  return (
    <div className="faq-one__item">
      <div 
        className={`faq-one__header ${item.isOpen ? 'active' : ''}`}
        onClick={() => toggleFAQ(item.id)}
      >
        <h3 className="faq-one__title">{item.question}</h3>
        <div className="faq-one__icon">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`faq-one__content ${item.isOpen ? 'active' : ''}`}>
        <div className="faq-one__text">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState(faqItems);
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleFAQ = (id: number) => {
    setFaqs(faqs.map(item => ({
      ...item,
      isOpen: item.id === id ? !item.isOpen : false
    })));
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(item => item.category === activeCategory);

  return (
    <section className="faq-one section-space" id="faq">
      <div className="container">
        <div className="sec-title sec-title--center wow fadeInUp" data-wow-duration="1500ms">
          <div className="sec-title__top">
            <div className="sec-title__shape">
              <div className="sec-title__shape__one"></div>
              <div className="sec-title__shape__two"></div>
            </div>
            <h6 className="sec-title__tagline">frequently asked questions</h6>
            <div className="sec-title__shape">
              <div className="sec-title__shape__one"></div>
              <div className="sec-title__shape__two"></div>
            </div>
          </div>
          <h3 className="sec-title__title">
            answers to your <br /> common questions
          </h3>
        </div>
        
        {/* FAQ Categories Filter */}
        <div className="faq-one__filter wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
          <ul className="faq-one__filter__list">
            {faqCategories.map((category) => (
              <li key={category.id} className={`faq-one__filter__item ${activeCategory === category.id ? 'active' : ''}`}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className="faq-one__filter__btn"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="row">
          <div className="col-lg-12">
            <div className="faq-one__accordion">
              {filteredFaqs.map((item) => (
                <FAQItem key={item.id} item={item} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="faq-one__cta wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
          <div className="faq-one__cta__inner">
            <div className="faq-one__cta__content">
              <h3 className="faq-one__cta__title">Still have questions?</h3>
              <p className="faq-one__cta__text">Can t find the answer you re looking for? Please chat to our friendly team.</p>
            </div>
            <div className="faq-one__cta__button">
              <a href="/contact" className="easilon-btn easilon-btn--white">
                <span>Get in touch</span>
                <span className="easilon-btn__icon">
                  <i className="icon-right-arrow"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}