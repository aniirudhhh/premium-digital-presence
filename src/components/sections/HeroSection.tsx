import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding mx-auto max-w-7xl pt-32 pb-20">
        <div className="flex w-full flex-col items-center text-center min-w-0 overflow-x-hidden">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Creative Firepower | Strategic Precision
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6 max-w-5xl px-2"
          >
            NUMERO UNO
            <span className="block text-primary">MARKETING</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground w-full max-w-full sm:max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed px-4 whitespace-normal min-w-0 [overflow-wrap:anywhere]"
          >
            Growth Solutions For All — MICRO • SMALL • MID • ENTERPRISE
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-muted-foreground w-full max-w-full sm:max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4 whitespace-normal min-w-0 [overflow-wrap:anywhere]"
          >
            End-to-End Digital strategy ensures that every effort is Cohesive, Targeted, and Impactful. 
            Get marketing strategy that enables your business to identify ideal customers, analyze their behavior, and create personalized content that resonates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              LET'S MEET!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule Meeting
            </Button>
          </motion.div>

          {/* Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full mt-10 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-border"
          >
            {/* Mobile: Horizontal scroll */}
            <div className="flex sm:hidden overflow-x-auto gap-6 pb-2 px-2 scrollbar-hide">
              {[
                'Quick Setup',
                'Easy To Use',
                'CRM Integrated',
                'Social Compatible',
                'Robust & Fast',
                'SEO Compliant',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{feature}</span>
                </div>
              ))}
            </div>

            {/* Desktop: Centered row */}
            <div className="hidden sm:flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {[
                'Quick Setup',
                'Easy To Use',
                'CRM Integrated',
                'Social Compatible',
                'Robust & Fast',
                'SEO Compliant',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-lg flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
