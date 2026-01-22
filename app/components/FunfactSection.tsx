'use client';

import { useState, useEffect } from 'react';

const funfactItems = [
  {
    value: 8.5,
    suffix: 'k',
    title: 'Happy Customers',
    delay: 0,
  },
  {
    prefix: '$',
    value: 95,
    suffix: 'k',
    title: 'Daily Payments',
    delay: 100,
  },
  {
    value: 99,
    suffix: '%',
    title: 'We Approve Loans',
    delay: 200,
  },
  {
    value: 25,
    suffix: '+',
    title: 'staff members',
    delay: 300,
  },
];

interface FunfactItemProps {
  item: {
    prefix?: string;
    value: number;
    suffix?: string;
    title: string;
    delay: number;
  };
}

function CounterItem({ item }: FunfactItemProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, item.delay);
    
    return () => clearTimeout(timer);
  }, [item.delay]);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const end = item.value;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const animationTimer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(animationTimer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(animationTimer);
    }
  }, [hasStarted, item.value]);

  return (
    <div className="funfact-one__item">
      <h3 className="funfact-one__item__number count-box">
        {item.prefix && <span>{item.prefix}</span>}
        <span className="count-text">
          {item.value % 1 === 0 ? count : count.toFixed(1)}
        </span>
        {item.suffix && <span>{item.suffix}</span>}
      </h3>
      <h4 className="funfact-one__item__title">{item.title}</h4>
    </div>
  );
}

export default function FunfactSection() {
  return (
    <section className="funfact-one">
      <div 
        className="funfact-one__bg" 
        style={{ backgroundImage: "url(/assets/images/shapes/funfact-bg-1-1.jpg)" }}
      ></div>
      
      <div className="container">
        <div className="row gutter-y-40">
          {funfactItems.map((item, index) => (
            <div 
              key={index} 
              className="funfact-one__col col-lg-3 col-sm-6 wow fadeInUp" 
              data-wow-duration="1500ms" 
              data-wow-delay={`${item.delay}ms`}
            >
              <CounterItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}