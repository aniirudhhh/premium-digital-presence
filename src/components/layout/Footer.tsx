import { FadeUp } from '@/components/animations/ScrollAnimations';
import { ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#pricing' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Social Media', href: '#services' },
    { name: 'SEO Optimization', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Packages', href: '#pricing' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-padding mx-auto max-w-7xl section-padding">
        <FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4 sm:mb-6">
                <span className="font-display text-xl sm:text-2xl font-bold text-primary">NUMERO</span>
              </a>
              <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 max-w-sm">
                Digital Presence & Web Development
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 max-w-sm">
                We focus on giving the most cost-effective solutions to our clients, enabling them to navigate towards success in the digital space.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p className="break-all">
                  <span className="text-foreground font-medium">EMAIL:</span>{' '}
                  <a href="mailto:hello@alphanumerouno.digital" className="hover:text-primary transition-colors">
                    hello@alphanumerouno.digital
                  </a>
                </p>
                <p className="break-all">
                  <span className="text-foreground font-medium">SUPPORT:</span>{' '}
                  <a href="mailto:support@alphanumerouno.digital" className="hover:text-primary transition-colors">
                    support@alphanumerouno.digital
                  </a>
                </p>
                <p>
                  <span className="text-foreground font-medium">CALL/WHATSAPP:</span>{' '}
                  <a href="tel:+919902633980" className="hover:text-primary transition-colors">
                    (+91) 9902633980
                  </a>
                </p>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
            Copyright © 2025 Numero Uno Marketing Pvt. Ltd.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};
