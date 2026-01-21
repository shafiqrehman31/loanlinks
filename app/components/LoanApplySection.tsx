'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoanApplySection() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(6);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayback, setTotalPayback] = useState(0);
  
  const interestRate = 15; // 15% annual interest rate
  const minAmount = 1000;
  const maxAmount = 50000;
  const minTerm = 1;
  const maxTerm = 12;

  const amountSliderRef = useRef<HTMLDivElement>(null);
  const termSliderRef = useRef<HTMLDivElement>(null);

  // Calculate loan payments
  useEffect(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / numberOfPayments);
    } else {
      const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(Number(payment.toFixed(2)));
    }
    
    setTotalPayback(Number((monthlyPayment * numberOfPayments).toFixed(2)));
  }, [loanAmount, loanTerm, monthlyPayment]);

  // Initialize noUiSlider after component mounts
  useEffect(() => {
    // Check if noUiSlider is available
    if (typeof window !== 'undefined' && (window as any).noUiSlider) {
      const noUiSlider = (window as any).noUiSlider;
      
      // Initialize amount slider
      if (amountSliderRef.current) {
        const amountSlider = noUiSlider.create(amountSliderRef.current, {
          start: [loanAmount],
          connect: [true, false],
          range: {
            'min': minAmount,
            'max': maxAmount
          },
          step: 1000
        });

        amountSlider.on('update', function(values: any) {
          const value = parseInt(values[0]);
          setLoanAmount(value);
          document.getElementById('loan-calculator-01-min-count')?.setAttribute('value', value.toString());
        });

        // Cleanup on unmount
        return () => {
          amountSlider.destroy();
        };
      }
    } else {
      console.warn('noUiSlider not found. Make sure to include the noUiSlider library in your project.');
    }
  }, []);

  // Initialize term slider
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).noUiSlider && termSliderRef.current) {
      const noUiSlider = (window as any).noUiSlider;
      
      const termSlider = noUiSlider.create(termSliderRef.current, {
        start: [loanTerm],
        connect: [true, false],
        range: {
          'min': minTerm,
          'max': maxTerm
        },
        step: 1
      });

      termSlider.on('update', function(values: any) {
        const value = parseInt(values[0]);
        setLoanTerm(value);
        document.getElementById('loan-calculator-01-min-month')?.setAttribute('value', value.toString());
      });

      // Cleanup on unmount
      return () => {
        termSlider.destroy();
      };
    }
  }, []);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
   
    <section className="loan-two loan-two--home" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="container">
        {/* Title Section - Added like other sections */}
        <div className="sec-title sec-title--center wow fadeInUp" data-wow-duration="1500ms">
          <div className="sec-title__top">
            <div className="sec-title__shape">
              <div className="sec-title__shape__one"></div>
              <div className="sec-title__shape__two"></div>
            </div>
            <h6 className="sec-title__tagline">loan calculator</h6>
            <div className="sec-title__shape">
              <div className="sec-title__shape__one"></div>
              <div className="sec-title__shape__two"></div>
            </div>
          </div>
          <h3 className="sec-title__title">
            calculate your loan <br /> payments easily
          </h3>
        </div>
        
        <div 
          className="loan-two__inner wow fadeInUp" 
          data-wow-duration="1500ms"
          style={{ backgroundImage: "url(/assets/images/resources/why-choose-2-1.png)" }}
        >
          <div className="loan-two__form">
            <div 
              className="loan-two__form__bg" 
              style={{ backgroundImage: "url(/assets/images/shapes/loan-calculator-form-bg-1-1.png)" }}
            ></div>
            
            <form 
              action="#" 
              id="loan-calculator-01" 
              data-form-direction="ltr" 
              data-interest-rate={interestRate} 
              className="loan-calculator-form" 
            >
              <h3 className="loan-calculator-form__title">How Much Do You Need?</h3>
              
              <div className="loan-calculator-form__content">
                {/* Loan Amount Slider */}
                <div className="input-box__top">
                  <span>${minAmount.toLocaleString()}</span>
                  <span>${maxAmount.toLocaleString()}</span>
                </div>
                
                <div className="input-box">
                  {/* noUiSlider will be initialized here */}
                  <div 
                    ref={amountSliderRef} 
                    className="range-slider-count" 
                    id="loan-calculator-01-count"
                  ></div>
                  <input 
                    type="hidden" 
                    value={loanAmount} 
                    className="min-count" 
                    id="loan-calculator-01-min-count" 
                  />
                  <input 
                    type="hidden" 
                    value={maxAmount} 
                    className="max-count" 
                    id="loan-calculator-01-max-count" 
                  />
                </div>

                {/* Loan Term Slider */}
                <div className="input-box__top input-box__top-border">
                  <span>{minTerm} Month</span>
                  <span>{maxTerm} Months</span>
                </div>
                
                <div className="input-box">
                  {/* noUiSlider will be initialized here */}
                  <div 
                    ref={termSliderRef} 
                    className="range-slider-month" 
                    id="loan-calculator-01-month"
                  ></div>
                  <input 
                    type="hidden" 
                    value={loanTerm} 
                    className="min-month" 
                    id="loan-calculator-01-min-month" 
                  />
                  <input 
                    type="hidden" 
                    value={maxTerm} 
                    className="max-month" 
                    id="loan-calculator-01-max-month" 
                  />
                </div>

                {/* Calculation Results */}
                <p>
                  <span>Pay Monthly</span>
                  <b>$<i className="loan-monthly-pay">{formatCurrency(monthlyPayment)}</i></b>
                </p>
                <p>
                  <span>Term of Use</span>
                  <b><i className="loan-month">{loanTerm}</i> Month{loanTerm > 1 ? 's' : ''}</b>
                </p>
                <p>
                  <span>Total Pay Back amount</span>
                  <b>$<i className="loan-total">{formatCurrency(totalPayback)}</i></b>
                </p>

                {/* Apply Button */}
                <Link href="/apply-loan" className="easilon-btn loan-calculator-form__btn">
                  <span>Apply for loan</span>
                  <span className="easilon-btn__icon">
                    <i className="icon-right-arrow"></i>
                  </span>
                </Link>
              </div>
            </form>
          </div>
          
          {/* Money Image */}
          <Image
            src="/assets/images/shapes/loan-money-2-1.png"
            alt="money"
            className="loan-two__money"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}