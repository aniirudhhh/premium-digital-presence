import { useState } from 'react';
import { FadeUp, SlideInLeft, SlideInRight } from '@/components/animations/ScrollAnimations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background relative">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <SlideInLeft>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Let's Build a Great Online Presence!
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Ready to transform your digital presence? We focus on giving the most cost-effective solutions to our clients, enabling them to navigate towards success in the digital space.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email us at</p>
                  <a href="mailto:hello@alphanumerouno.digital" className="text-foreground font-medium hover:text-primary transition-colors">
                    hello@alphanumerouno.digital
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Support</p>
                  <a href="mailto:support@alphanumerouno.digital" className="text-foreground font-medium hover:text-primary transition-colors">
                    support@alphanumerouno.digital
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Call/WhatsApp</p>
                  <a href="tel:+919902633980" className="text-foreground font-medium hover:text-primary transition-colors">
                    (+91) 9902633980
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-card border border-border rounded-lg p-6 inline-flex items-center gap-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <p className="text-muted-foreground">
                Average response time: <span className="text-foreground font-medium">Under 24 hours</span>
              </p>
            </div>
          </SlideInLeft>

          {/* Right Column - Form */}
          <SlideInRight delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">
                    NAME
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
                    EMAIL ADDRESS
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground text-sm font-medium mb-2">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      SUBMIT
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-muted-foreground text-xs text-center">
                  By submitting, you agree to our privacy policy. We'll never share your information.
                </p>
              </div>
            </form>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
