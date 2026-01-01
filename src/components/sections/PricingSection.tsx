import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started online.',
    price: '2,500',
    period: 'project',
    features: [
      '5-page responsive website',
      'Mobile-first design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month support',
      'Content upload assistance',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Comprehensive solution for growing businesses.',
    price: '7,500',
    period: 'project',
    features: [
      'Up to 15-page website',
      'Custom UI/UX design',
      'Advanced SEO optimization',
      'CMS integration',
      'E-commerce ready (up to 50 products)',
      '3 months support',
      'Analytics dashboard',
      'Social media integration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Full-scale digital transformation for established brands.',
    price: '15,000+',
    period: 'project',
    features: [
      'Unlimited pages',
      'Custom web application',
      'Advanced integrations',
      'Dedicated project manager',
      'Priority support (12 months)',
      'Performance optimization',
      'Security hardening',
      'Monthly strategy calls',
      'Content strategy included',
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">Pricing</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the package that fits your needs and budget.
          </p>
        </FadeUp>

        {/* Pricing Cards */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <StaggerItem key={index}>
              <div 
                className={`relative bg-card border rounded-lg p-8 h-full flex flex-col card-hover ${
                  plan.popular 
                    ? 'border-primary shadow-glow' 
                    : 'border-border'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-md">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-xl">$</span>
                    <span className="font-display text-5xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">per {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={plan.popular ? "hero" : "heroOutline"} 
                  size="lg" 
                  className="w-full group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Custom Quote */}
        <FadeUp delay={0.5} className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every business is unique. Let's discuss your specific requirements and create a tailored package just for you.
            </p>
            <Button variant="hero" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
