import { FadeUp } from '@/components/animations/ScrollAnimations';

const stats = [
  { value: '150+', label: 'Projects Completed', description: 'Across 25+ industries' },
  { value: '98%', label: 'Client Retention', description: 'Long-term partnerships' },
  { value: '$50M+', label: 'Revenue Generated', description: 'For our clients' },
  { value: '12+', label: 'Years Experience', description: 'Industry expertise' },
];

const clients = [
  'TechCorp', 'GlobalBrand', 'InnovateCo', 'FutureLabs', 'NextGen', 'Elevate'
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Digital Experiences Since 2012
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We're a team of strategists, designers, and developers who believe in the power of great design to transform businesses. Our approach combines creative thinking with data-driven strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From startups to Fortune 500 companies, we've helped businesses across industries achieve their digital goals. Our work isn't just about looking good—it's about delivering measurable results.
            </p>

            {/* Mission Points */}
            <div className="space-y-4">
              {[
                'Strategy-first approach to every project',
                'Transparent communication throughout',
                'Results-driven, data-backed decisions',
              ].map((point, index) => (
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
                  <p className="font-display text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-foreground font-medium mb-1">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Trusted By */}
        <FadeUp delay={0.4}>
          <div className="text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clients.map((client, index) => (
                <span 
                  key={index}
                  className="text-2xl font-display font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
