import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FunfactSection from './components/FunfactSection';
import WorkProcessSection from './components/WorkProcessSection';
import WhyChooseSection from './components/WhyChooseSection';
import LoanApplySection from './components/LoanApplySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';


export default function Home() {
  return (
    <>
       <HeroSection />
       <AboutSection />
       <FunfactSection />
       <WorkProcessSection />
       <WhyChooseSection />
       <LoanApplySection />
       <TestimonialsSection />
       <FAQSection />
     
    </>
  );
}