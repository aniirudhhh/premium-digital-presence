import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Clock } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter Web Presence',
    description: 'For freelancers, solopreneurs, and small shops needing a quick online identity.',
    price: '7,999',
    currency: 'INR',
    deliveryTime: '7 Days',
    features: [
      'Single Page Responsive website',
      'Responsive ready',
      'SEO Ready',
      'Full Data Ownership',
      '"Home" and "Landing + Thankyou" Pages',
    ],
    popular: false,
  },
  {
    name: 'Growth Essentials',
    description: 'For small businesses ready to capture leads & engage customers.',
    price: '12,999',
    currency: 'INR',
    deliveryTime: '14 Days',
    features: [
      'CRM-integrated forms',
      'SEO-optimized structure',
      'WhatsApp integration for instant chats',
      'Google Analytics dashboard for insights',
      'Freemium CRM to track inquiries',
      'High impact content for site and marketing',
    ],
    popular: true,
  },
  {
    name: 'Professional Business Suite',
    description: 'For scaling businesses wanting a strong, lead-driven online presence.',
    price: '17,999',
    currency: 'INR',
    deliveryTime: '28 Days',
    features: [
      'Advanced CRM integration',
      'Google Business Profile integration',
      'Ecommerce / Booking / Payment Gateway integration',
      'Custom web apps (dashboards, calculators, tools)',
      'Multi-language & multi-region support',
      'Enterprise-grade hosting & security',
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">Website Packages</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Compare Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Affordable Suite — Online Presence and measurable growth. Get your Business website and storefront launch ready at unmatched pricing.
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
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-lg">{plan.currency}</span>
                    <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">*/-</span>
                  </div>
                  <span className="text-primary text-sm font-medium">Starts at</span>
                </div>

                {/* Delivery Time */}
                <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">Delivered in: <span className="text-foreground font-medium">{plan.deliveryTime}</span></span>
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
                  Schedule Meeting
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Enterprise CTA */}
        <FadeUp delay={0.5} className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Enterprise Digital Advantage
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For enterprises and brands needing customized, data-driven digital ecosystems. 
              Fully customized website architecture (10+ pages or portals).
            </p>
            <Button variant="hero" size="lg">
              Schedule Consultation
            </Button>
            <p className="text-muted-foreground text-xs mt-6">
              *Website Packages Do Not include Domain and hosting. We do this to ensure that the client has the full ownership of the content and data.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
