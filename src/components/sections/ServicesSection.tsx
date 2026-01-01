import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '@/components/animations/ScrollAnimations';
import { Globe, Megaphone, TrendingUp, Users, Zap, BarChart3, Plus, Minus } from 'lucide-react';

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="section-padding bg-background relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="container-padding mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <FadeUp className="text-center mb-10 sm:mb-16 px-2">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">Digital Marketing</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Digital Presence & Marketing
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            We focus on giving the most cost-effective solutions to our clients, enabling them to navigate towards success in the digital space.
          </p>
        </FadeUp>

        {/* Netflix-style FAQ Accordion */}
        <div className="space-y-2 sm:space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleService(index)}
                className="w-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              >
                <div className="flex items-center justify-between p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-background/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground text-left">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-background/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <AnimatePresence mode="wait">
                      {openIndex === index ? (
                        <motion.div
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-secondary/50 border-t border-border/30 p-4 sm:p-5 md:p-6">
                      <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="text-xs sm:text-sm text-muted-foreground bg-background/50 border border-border/50 px-3 py-1.5 rounded-full"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
