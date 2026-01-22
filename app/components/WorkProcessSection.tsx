import Image from 'next/image';

const processSteps = [
  {
    id: 1,
    image: "/assets/images/working-process/1.png",
    title: "Minute Quick Form",
    description: "Apply in just 60 seconds for your personal loan fast, simple, no credit worries.",
    delay: 0,
    isDown: false,
  },
  {
    id: 2,
    image: "/assets/images/working-process/2.png",
    title: "Your Loan, Your Choice",
    description: "Select the personal loan option that fits your needs with full control.",
    delay: 100,
    isDown: true,
  },
  {
    id: 3,
    image: "/assets/images/working-process/3.png",
    title: "Instant Updates",
    description: "Stay informed at every step with real-time email or SMS notifications.",
    delay: 200,
    isDown: false,
  },
  {
    id: 4,
    image: "/assets/images/working-process/4.png",
    title: "Funds When You Need Them",
    description: "Get your approved personal loan in your account quickly flexible and hassle-free.",
    delay: 300,
    isDown: true,
  },
];

// SVG components
const ProcessShape = () => (
  <svg className="work-process-one__item__shape" viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M239.497 33.8939L207.961 65.4318H4L35.5698 33.8939L4 2.35596H207.961L239.497 33.8939Z" />
  </svg>
);

const ProcessCircle = () => (
  <svg className="work-process-one__item__circle" width="136" height="32" viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M67.9555 0.758301C105.486 0.758301 135.894 7.52133 135.894 15.8938C135.894 24.2491 105.469 31.0292 67.9555 31.0292C30.425 31.0292 7.21871e-06 24.2491 7.21871e-06 15.8938C-0.0171143 7.53845 30.425 0.758301 67.9555 0.758301Z" />
  </svg>
);

interface ProcessStepProps {
  step: {
    id: number;
    image: string;
    title: string;
    description: string;
    delay: number;
    isDown: boolean;
  };
}

function ProcessStep({ step }: ProcessStepProps) {
  return (
    <div  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${step.delay}ms`}>
      <div className={`work-process-one__item ${step.isDown ? 'work-process-one__item--down' : ''}`}>
        <div className="work-process-one__item__image">
          <Image
            src={step.image}
            alt={step.title}
            width={130}
            height={130}
          />
          <div className="work-process-one__item__number">step</div>
          <ProcessShape />
          <ProcessCircle />
        </div>
        
        <div className="work-process-one__item__content">
          <h3 className="work-process-one__item__title">{step.title}</h3>
          <p className="work-process-one__item__text">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WorkProcessSection() {
  return (
    <section id="how-it-work" className="work-process-one section-space">
      <div className="container">
        <div className="sec-title sec-title--center">
          <div className="sec-title__top">
            <div className="sec-title__shape">
              <div className="sec-title__shape__one"></div>
              <div className="sec-title__shape__two"></div>
            </div>
            
            <h6 className="sec-title__tagline">how it works</h6>
            
            <div className="sec-title__shape">
              <div className="sec-title__shape__one"></div>
              <div className="sec-title__shape__two"></div>
            </div>
          </div>
          
          <h3 className="sec-title__title">our working process</h3>
        </div>
        
        <div className="row gutter-y-30">
          {processSteps.map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}