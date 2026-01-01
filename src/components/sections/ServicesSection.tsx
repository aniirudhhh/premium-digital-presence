import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Globe, Megaphone, TrendingUp, Users, Zap, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technology. Responsive, SEO-optimized, and fast-loading solutions.',
    features: ['Responsive Ready', 'SEO Friendly', 'Optimized for Speed', 'CRM Integrated'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies leveraging the power of technology and the internet to engage with audiences effectively.',
    features: ['AI Assisted Content', 'Campaign Centric', 'Social Media Growth', 'Content Strategy'],
  },
  {
    icon: Users,
    title: 'Social Media Management',
    description: 'Platform-optimized content that rides trends, builds community, and drives fan loyalty. Let us engineer your engagement.',
    features: ['Content Planning', 'Community Building', 'Trend Analysis', 'Analytics Dashboard'],
  },
  {
    icon: Zap,
    title: 'Vyaraa Creator Suite',
    description: 'Robust strategy-driven roadmaps for creators. Embracing innovations like AI-driven analytics and voice search optimization.',
    features: ['Creator Content Launch', 'AI Analytics', 'Voice Search', 'Growth Strategy'],
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Strategic consulting to accelerate your business growth. Data integration from various digital sources for clear insights.',
    features: ['Market Research', 'Competitor Analysis', 'KPI Tracking', 'Performance Reports'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Great marketing presence starts with data integration. Turn data into actionable insights with custom dashboards.',
    features: ['Custom Dashboards', 'Data Analysis', 'Google Analytics', 'Conversion Tracking'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="container-padding mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">Digital Marketing</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Digital Presence & Marketing
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We focus on giving the most cost-effective solutions to our clients, enabling them to navigate towards success in the digital space.
          </p>
        </FadeUp>

        {/* Services Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group bg-card border border-border rounded-lg p-8 h-full card-hover">
                {/* Icon */}
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-md"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
