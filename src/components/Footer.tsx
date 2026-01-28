import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "AI Products", href: "/products" },
    { name: "Web Services", href: "/services" },
    { name: "Why AI", href: "/why-ai" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Custom AI Agents",
    "Process Automation",
    "Machine Learning",
    "Full-Stack Development",
    "WordPress Development",
    "E-commerce Solutions",
  ];

  const contact = [
    { icon: Mail, text: "aisolutionsmate@gmail.com", href: "mailto:aisolutionsmate@gmail.com" },
    { icon: Phone, text: "+91 (741) 203-0210", href: "tel:+917412030210" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ];

  const social = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                AI Solution Mates
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses with intelligent AI agents and cutting-edge automation solutions. 
              We build the future of work, today.
            </p>
            <div className="flex space-x-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="w-10 h-10 bg-muted hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Get In Touch</h3>
            <ul className="space-y-4 mb-6">
              {contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-brand-primary transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="hero" className="w-full">
              Start Your AI Journey
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 AI Solution Mates. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-brand-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-brand-primary transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-muted-foreground hover:text-brand-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
