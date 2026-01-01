import { FadeUp } from '@/components/animations/ScrollAnimations';

const stats = [
  { value: 'Quick Setup', label: 'Fast Delivery', description: 'Website ready in days' },
  { value: 'Easy To Use', label: 'Intuitive', description: 'User-friendly solutions' },
  { value: 'CRM Integrated', label: 'Connected', description: 'Track all inquiries' },
  { value: 'SEO Compliant', label: 'Optimized', description: 'Rank higher on search' },
];

const features = [
  'Professional Team integrated with Your Social Channels',
  'Easy and Intuitive platform management',
  'Data-driven approach for measurable growth',
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <FadeUp>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">Website Features</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Affordable Suite
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Online Presence and measurable growth. We build websites that are not just beautiful but also functional, fast, and optimized for search engines.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From startups to enterprises, we've helped businesses across industries achieve their digital goals. Our work isn't just about looking good—it's about delivering measurable results.
            </p>

            {/* Mission Points */}
            <div className="space-y-4">
              {features.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Stats Grid */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-lg p-6 card-hover"
                >
                  <p className="font-display text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-foreground font-medium mb-1">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Business Sizes */}
        <FadeUp delay={0.4}>
          <div className="text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
              Growth Solutions For All Business Sizes
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['MICRO', 'SMALL', 'MID', 'ENTERPRISE'].map((size, index) => (
                <span 
                  key={index}
                  className="text-2xl font-display font-semibold text-muted-foreground/40 hover:text-primary transition-colors duration-300"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
