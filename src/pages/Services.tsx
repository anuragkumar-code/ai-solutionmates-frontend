import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Globe, Zap, Users, ArrowRight, Star, CheckCircle } from "lucide-react";

const Services = () => {
  const webServices = [
    {
      name: "Full-Stack Web Development",
      icon: Code,
      description: "Complete web applications built with modern technologies like React, Node.js, Laravel, and more. From concept to deployment.",
      technologies: ["React", "Node.js", "Laravel", "MongoDB", "PostgreSQL", "TypeScript"],
      features: [
        "Custom web applications",
        "RESTful API development",
        "Database design & optimization",
        "Cloud deployment",
        "Performance optimization",
        "Security implementation"
      ],
      projects: [
        { name: "E-commerce Platform", description: "Built a scalable e-commerce solution handling 10k+ orders/day" },
        { name: "SaaS Dashboard", description: "Created analytics dashboard serving 50k+ users" },
        { name: "Booking System", description: "Developed real-time booking platform for hospitality" }
      ],
      pricing: "Starting at $5,000",
      timeline: "4-12 weeks",
      badge: "Most Popular"
    },
    {
      name: "Mobile-First Responsive Design",
      icon: Smartphone,
      description: "Beautiful, responsive websites that work perfectly on all devices with modern UI/UX principles.",
      technologies: ["Tailwind CSS", "CSS3", "JavaScript", "Bootstrap", "Figma", "Adobe XD"],
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "SEO optimization",
        "Fast loading speeds",
        "Accessibility compliance",
        "Modern UI/UX design"
      ],
      projects: [
        { name: "Corporate Website", description: "Redesigned Fortune 500 company website with 300% speed improvement" },
        { name: "Portfolio Site", description: "Created stunning portfolio increasing client conversions by 60%" },
        { name: "Landing Pages", description: "Built high-converting landing pages for marketing campaigns" }
      ],
      pricing: "Starting at $2,500",
      timeline: "2-6 weeks",
      badge: "Fast Delivery"
    },
    {
      name: "CMS & E-commerce Solutions",
      icon: Database,
      description: "Custom content management systems and e-commerce platforms tailored to your business needs.",
      technologies: ["WordPress", "Shopify", "WooCommerce", "Custom CMS", "Stripe", "PayPal"],
      features: [
        "Content management systems",
        "E-commerce functionality",
        "Payment integration",
        "Inventory management",
        "User authentication",
        "Admin dashboards"
      ],
      projects: [
        { name: "Online Store", description: "Built custom e-commerce platform processing $1M+ annually" },
        { name: "News Portal", description: "Created CMS handling 100k+ daily visitors" },
        { name: "Marketplace", description: "Developed multi-vendor marketplace with advanced features" }
      ],
      pricing: "Starting at $3,500",
      timeline: "3-8 weeks",
      badge: "E-commerce"
    },
    {
      name: "API Development & Integration",
      icon: Globe,
      description: "Robust API development and third-party integrations to connect your systems and automate workflows.",
      technologies: ["REST API", "GraphQL", "Node.js", "Laravel", "Python", "Docker"],
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "Third-party integrations",
        "Webhook development",
        "API documentation",
        "Rate limiting & security"
      ],
      projects: [
        { name: "Payment Gateway", description: "Integrated multiple payment providers for seamless transactions" },
        { name: "CRM Integration", description: "Connected sales systems with automated data sync" },
        { name: "Social Media API", description: "Built social media management platform with multi-platform posting" }
      ],
      pricing: "Starting at $2,000",
      timeline: "1-4 weeks",
      badge: "Integration"
    }
  ];

  const portfolioProjects = [
    {
      name: "FinTech Dashboard",
      category: "SaaS Platform",
      image: "/api/placeholder/400/300",
      description: "Advanced financial analytics dashboard serving 10,000+ users with real-time data processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      results: ["50% faster data processing", "99.9% uptime", "10k+ active users"]
    },
    {
      name: "E-learning Platform",
      category: "Education Technology",
      image: "/api/placeholder/400/300",
      description: "Comprehensive online learning platform with video streaming, assessments, and progress tracking.",
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
      results: ["5000+ students enrolled", "95% completion rate", "Mobile responsive"]
    },
    {
      name: "Healthcare Management",
      category: "Healthcare",
      image: "/api/placeholder/400/300",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      results: ["HIPAA compliant", "1000+ patients managed", "Real-time updates"]
    },
    {
      name: "Real Estate Portal",
      category: "Property Management",
      image: "/api/placeholder/400/300",
      description: "Property listing and management platform with advanced search, virtual tours, and lead management.",
      technologies: ["Next.js", "Python", "PostgreSQL", "Stripe"],
      results: ["500+ property listings", "Lead generation system", "Virtual tour integration"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create detailed technical specifications."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes, mockups, and interactive prototypes for your approval."
    },
    {
      step: "03", 
      title: "Development & Testing",
      description: "Our developers build your solution using best practices, with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "We deploy your application to production and ensure everything runs smoothly for launch."
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your application running at peak performance."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "StartupTech Inc",
      role: "CEO",
      text: "They delivered our MVP in just 6 weeks. The quality and attention to detail exceeded our expectations.",
      rating: 5,
      project: "SaaS Platform"
    },
    {
      name: "Robert Martinez",
      company: "Retail Solutions",
      role: "CTO",
      text: "The e-commerce platform they built handles our peak traffic flawlessly. ROI was immediate.",
      rating: 5,
      project: "E-commerce Site"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 backdrop-blur-sm">
              <Code className="w-4 h-4 text-brand-primary mr-2" />
              <span className="text-sm font-medium text-foreground">Professional Web Development Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Expert <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Web Development</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From modern web applications to e-commerce platforms, we build scalable, 
              secure, and high-performance solutions using cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive web solutions to power your digital presence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 hover:border-brand-primary/50 relative overflow-hidden">
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white">
                      {service.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-foreground">{service.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted/50 text-xs rounded-md text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-brand-secondary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Examples */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Recent Projects</h4>
                    <div className="space-y-2">
                      {service.projects.map((project, idx) => (
                        <div key={idx} className="p-3 bg-muted/30 rounded-lg">
                          <div className="font-medium text-foreground text-sm">{project.name}</div>
                          <div className="text-xs text-muted-foreground">{project.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-brand-secondary">{service.pricing}</div>
                        <div className="text-sm text-muted-foreground">{service.timeline}</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-secondary/90 hover:to-brand-accent/90 text-white">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing some of our recent web development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-card/80 backdrop-blur-sm">
                <div className="aspect-video bg-muted/50 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-brand-secondary font-medium mb-1">{project.category}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      View Project Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-secondary to-brand-accent lg:block hidden"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'} text-center lg:text-left`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="text-4xl font-bold text-brand-secondary mb-2">{step.step}</div>
                        <h3 className="font-bold text-foreground mb-2 text-xl">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 lg:block hidden">
                    <div className="w-6 h-6 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="lg:w-1/2 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              What our clients say about our web development services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                    </div>
                    <div className="text-xs bg-brand-secondary/20 text-brand-secondary px-2 py-1 rounded">
                      {testimonial.project}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your web development needs and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your Project
            </Button>
            <Button variant="glass" size="xl">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;