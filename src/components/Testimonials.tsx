import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      company: "Fortune 500 Company",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      text: "AI Solution Mates transformed our customer service with their AI agents. We've reduced response time by 85% and increased customer satisfaction dramatically.",
      result: "85% faster response time"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "Global Manufacturing Corp",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      text: "Their automation solutions saved us over $2M annually. The AI agents handle complex logistics decisions that used to require a team of 20 people.",
      result: "$2M+ annual savings"
    },
    {
      name: "Emily Johnson",
      role: "CTO, FinanceNext",
      company: "Financial Services",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      text: "The AI fraud detection system they built is incredible. It catches patterns our previous systems missed and has reduced fraud losses by 95%.",
      result: "95% fraud reduction"
    },
    {
      name: "David Park",
      role: "Founder, RetailMax",
      company: "E-commerce Platform",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      text: "Their web development team created a stunning e-commerce platform, and the AI recommendation engine increased our sales by 60%.",
      result: "60% sales increase"
    },
    {
      name: "Lisa Thompson",
      role: "VP Marketing, GrowthCo",
      company: "Digital Marketing Agency",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      text: "The AI content generation and optimization agents have revolutionized our content strategy. We're producing 10x more personalized content.",
      result: "10x content output"
    },
    {
      name: "James Wilson",
      role: "COO, LogisticsPro",
      company: "Supply Chain Management",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      text: "Their AI route optimization agents reduced our delivery costs by 40% while improving delivery times. Absolutely game-changing technology.",
      result: "40% cost reduction"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 hover:border-brand-primary/50">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-brand-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Result Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 mb-6">
                  <span className="text-sm font-semibold text-brand-primary">{testimonial.result}</span>
                </div>

                {/* Author Info */}
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 border border-brand-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how AI agents can transform your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 bg-white/10 text-foreground border border-border rounded-lg font-semibold hover:bg-white/20 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;