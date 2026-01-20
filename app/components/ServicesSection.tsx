import Link from 'next/link';

const services = [
  {
    title: 'Car Insurance',
    description: 'Comprehensive coverage for your vehicle with competitive rates.',
    icon: '🚗',
  },
  {
    title: 'Home Insurance',
    description: 'Protect your home and belongings with our reliable coverage.',
    icon: '🏠',
  },
  {
    title: 'Life Insurance',
    description: 'Secure your family\'s future with our life insurance plans.',
    icon: '❤️',
  },
  {
    title: 'Health Insurance',
    description: 'Quality healthcare coverage for you and your family.',
    icon: '⚕️',
  },
  {
    title: 'Travel Insurance',
    description: 'Travel with peace of mind knowing you\'re protected.',
    icon: '✈️',
  },
  {
    title: 'Business Insurance',
    description: 'Protect your business assets and mitigate risks.',
    icon: '💼',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Our Insurance Services</h2>
          <p className="text-muted">
            Comprehensive insurance solutions tailored to your needs
          </p>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="mb-3" style={{ fontSize: '2.5rem' }}>
                  {service.icon}
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-muted mb-4">{service.description}</p>
                <Link href="/contact" className="text-primary text-decoration-none">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}