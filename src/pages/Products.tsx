import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Cpu, Cloud, Zap, MessageSquare, BarChart3, Shield, Clock, ArrowRight, Star } from "lucide-react";

const Products = () => {
  const aiProducts = [
    {
      name: "CustomerCare AI",
      category: "Customer Service",
      icon: MessageSquare,
      description: "Intelligent customer service agents that handle inquiries, complaints, and support tickets 24/7 with human-like understanding.",
      features: [
        "Natural language processing",
        "Multi-channel integration",
        "Sentiment analysis",
        "Escalation management",
        "Real-time learning"
      ],
      benefits: [
        "85% reduction in response time",
        "24/7 availability",
        "90% customer satisfaction",
        "70% cost savings"
      ],
      pricing: "Starting at $499/month",
      badge: "Most Popular",
      demoUrl: "#"
    },
    {
      name: "SalesBot Pro",
      category: "Sales & Marketing",
      icon: BarChart3,
      description: "AI-powered sales agents that qualify leads, schedule meetings, and nurture prospects through personalized conversations.",
      features: [
        "Lead qualification",
        "Meeting scheduling",
        "Personalized outreach",
        "CRM integration",
        "Sales analytics"
      ],
      benefits: [
        "60% increase in qualified leads",
        "40% more meetings booked",
        "Automated follow-ups",
        "Higher conversion rates"
      ],
      pricing: "Starting at $799/month",
      badge: "High ROI",
      demoUrl: "#"
    },
    {
      name: "OptiFlow AI",
      category: "Operations",
      icon: Cpu,
      description: "Intelligent process automation agents that optimize workflows, manage inventory, and coordinate operations across departments.",
      features: [
        "Process optimization",
        "Inventory management",
        "Resource allocation",
        "Predictive analytics",
        "Workflow automation"
      ],
      benefits: [
        "40% operational efficiency gain",
        "Real-time decision making",
        "Reduced manual errors",
        "Cost optimization"
      ],
      pricing: "Starting at $1,299/month",
      badge: "Enterprise",
      demoUrl: "#"
    },
    {
      name: "FraudGuard AI",
      category: "Security",
      icon: Shield,
      description: "Advanced fraud detection agents that monitor transactions, identify suspicious patterns, and prevent financial losses in real-time.",
      features: [
        "Real-time monitoring",
        "Pattern recognition",
        "Risk scoring",
        "Automated blocking",
        "Compliance reporting"
      ],
      benefits: [
        "95% fraud detection rate",
        "Instant threat response",
        "Compliance automation",
        "Risk mitigation"
      ],
      pricing: "Starting at $999/month",
      badge: "Security",
      demoUrl: "#"
    },
    {
      name: "DataInsight AI",
      category: "Analytics",
      icon: BarChart3,
      description: "Business intelligence agents that analyze data, generate insights, and create automated reports with actionable recommendations.",
      features: [
        "Data analysis",
        "Automated reporting",
        "Predictive modeling",
        "Trend identification",
        "Custom dashboards"
      ],
      benefits: [
        "Faster decision making",
        "Predictive insights",
        "Automated reporting",
        "Strategic planning"
      ],
      pricing: "Starting at $699/month",
      badge: "Analytics",
      demoUrl: "#"
    },
    {
      name: "ContentGen AI",
      category: "Content & Marketing",
      icon: Bot,
      description: "Creative AI agents that generate marketing content, social media posts, and personalized communications at scale.",
      features: [
        "Content generation",
        "Brand voice training",
        "Multi-format output",
        "SEO optimization",
        "Performance tracking"
      ],
      benefits: [
        "10x content production",
        "Consistent brand voice",
        "SEO-optimized content",
        "Reduced creative costs"
      ],
      pricing: "Starting at $399/month",
      badge: "Creative",
      demoUrl: "#"
    }
  ];

  const customSolutions = [
    {
      title: "Custom AI Agent Development",
      description: "Tailored AI agents built specifically for your unique business processes and requirements.",
      features: ["Bespoke design", "Industry-specific training", "Custom integrations", "Ongoing support"]
    },
    {
      title: "AI Integration Services",
      description: "Seamlessly integrate AI agents into your existing systems and workflows.",
      features: ["System analysis", "API development", "Legacy system integration", "Training & support"]
    },
    {
      title: "AI Consulting & Strategy",
      description: "Expert consultation to identify AI opportunities and develop implementation roadmaps.",
      features: ["Business analysis", "AI readiness assessment", "Strategy development", "ROI planning"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Inc",
      text: "CustomerCare AI transformed our support operations. Response times dropped by 85% and customer satisfaction skyrocketed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "SalesForce Pro",
      text: "SalesBot Pro doubled our qualified leads in just 3 months. The ROI was incredible.",
      rating: 5
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
              <Bot className="w-4 h-4 text-brand-primary mr-2" />
              <span className="text-sm font-medium text-foreground">Intelligent AI Solutions for Every Business Need</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our AI <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Product Suite</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful AI agents and automation solutions designed to solve real business challenges 
              and drive measurable results across every department.
            </p>
          </div>
        </div>
      </section>

      {/* AI Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready-to-Deploy AI Agents
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from our library of pre-built AI solutions or request a custom agent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 hover:border-brand-primary/50 relative overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
                      {product.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-foreground">{product.name}</CardTitle>
                    <div className="text-sm text-brand-primary font-medium">{product.category}</div>
                    <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-xs bg-muted/50 rounded-md p-2 text-center">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-bold text-brand-primary mb-4">{product.pricing}</div>
                    <div className="space-y-2">
                      <Button className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        Request Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom AI Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Need something unique? We build custom AI agents tailored to your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customSolutions.map((solution, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <h3 className="font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Zap className="w-3 h-3 text-brand-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from companies using our AI products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Deploy AI in Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with a free trial of any AI agent or schedule a consultation for custom solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Free Trial
            </Button>
            <Button variant="glass" size="xl">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;