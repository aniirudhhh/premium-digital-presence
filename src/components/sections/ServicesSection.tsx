import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Globe, Megaphone, TrendingUp, Palette, Search, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technology. Fast, secure, and scalable solutions.',
    features: ['React / Next.js', 'E-commerce', 'Custom CMS', 'API Integration'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that deliver real ROI. From social media to paid advertising.',
    features: ['Social Media', 'PPC Campaigns', 'Email Marketing', 'Content Strategy'],
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Create a memorable brand that stands out. Logo design, brand guidelines, and visual identity systems.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with proven SEO strategies. Technical SEO, content optimization, and link building.',
    features: ['Technical SEO', 'Content SEO', 'Link Building', 'Local SEO'],
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Strategic consulting to accelerate your business growth. Market analysis and go-to-market strategies.',
    features: ['Market Research', 'Competitor Analysis', 'Growth Hacking', 'KPI Tracking'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Turn data into actionable insights. Custom dashboards, reporting, and performance tracking.',
    features: ['Custom Dashboards', 'Data Analysis', 'Performance Reports', 'Conversion Tracking'],
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What We Do Best
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From concept to execution, we handle it all.
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
