import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp, Users, Award, MapPin } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      industry: "SaaS Technology",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "AI Solution Mates transformed our customer service with their AI agents. We've reduced response time by 85% and increased customer satisfaction dramatically. The ROI was visible within the first month.",
      result: "85% faster response time",
      metrics: ["$2.3M annual savings", "99.2% uptime", "85% faster response"]
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "Their automation solutions saved us over $2M annually. The AI agents handle complex logistics decisions that used to require a team of 20 people. Absolutely game-changing technology.",
      result: "$2M+ annual savings",
      metrics: ["20 FTE reduction", "40% efficiency gain", "24/7 operations"]
    },
    {
      name: "Emily Johnson",
      role: "CTO",
      company: "FinanceNext",
      industry: "Financial Services",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "The AI fraud detection system they built is incredible. It catches patterns our previous systems missed and has reduced fraud losses by 95%. The machine learning models continuously improve.",
      result: "95% fraud reduction",
      metrics: ["95% fraud detection", "$5M losses prevented", "Real-time analysis"]
    },
    {
      name: "David Park",
      role: "Founder",
      company: "RetailMax",
      industry: "E-commerce",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "Their web development team created a stunning e-commerce platform, and the AI recommendation engine increased our sales by 60%. The personalization is incredible.",
      result: "60% sales increase",
      metrics: ["60% sales boost", "40% higher AOV", "Mobile-first design"]
    },
    {
      name: "Lisa Thompson",
      role: "VP Marketing",
      company: "GrowthCo",
      industry: "Digital Marketing",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "The AI content generation and optimization agents have revolutionized our content strategy. We're producing 10x more personalized content with better engagement rates.",
      result: "10x content output",
      metrics: ["10x content volume", "300% engagement", "50% time savings"]
    },
    {
      name: "James Wilson",
      role: "COO",
      company: "LogisticsPro",
      industry: "Supply Chain",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "Their AI route optimization agents reduced our delivery costs by 40% while improving delivery times. The predictive analytics help us stay ahead of demand.",
      result: "40% cost reduction",
      metrics: ["40% cost savings", "25% faster delivery", "Predictive routing"]
    }
  ];

  const clientLogos = [
    { name: "TechFlow Solutions", logo: "/api/placeholder/120/60" },
    { name: "Global Manufacturing", logo: "/api/placeholder/120/60" },
    { name: "FinanceNext", logo: "/api/placeholder/120/60" },
    { name: "RetailMax", logo: "/api/placeholder/120/60" },
    { name: "GrowthCo", logo: "/api/placeholder/120/60" },
    { name: "LogisticsPro", logo: "/api/placeholder/120/60" },
    { name: "InnovateX", logo: "/api/placeholder/120/60" },
    { name: "DataDriven Inc", logo: "/api/placeholder/120/60" },
  ];

  const industries = [
    { name: "Financial Services", count: "25+ clients", icon: "🏦" },
    { name: "Manufacturing", count: "40+ clients", icon: "🏭" },
    { name: "E-commerce", count: "60+ clients", icon: "🛒" },
    { name: "Healthcare", count: "30+ clients", icon: "🏥" },
    { name: "Technology", count: "80+ clients", icon: "💻" },
    { name: "Logistics", count: "35+ clients", icon: "🚚" },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "99.2%", label: "Success Rate", icon: Award },
    { value: "$50M+", label: "Client Savings", icon: TrendingUp },
    { value: "25+", label: "Countries", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 backdrop-blur-sm">
              <Award className="w-4 h-4 text-brand-primary mr-2" />
              <span className="text-sm font-medium text-foreground">Trusted by Industry Leaders</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Success Stories</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped companies across industries transform their operations with AI automation
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{stat.value}</div>
                  <div className="font-semibold text-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              AI solutions tailored for every industry's unique challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-brand-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{industry.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses transformed by our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 hover:border-brand-primary/50">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-primary/30 mb-4" />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="space-y-3 mb-6">
                    {testimonial.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mr-2" />
                        <span className="text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 mb-6">
                    <span className="text-sm font-semibold text-brand-primary">{testimonial.result}</span>
                  </div>

                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      <div className="text-xs text-brand-primary">{testimonial.industry}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can transform your business with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your Transformation
            </Button>
            <Button variant="glass" size="xl">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;