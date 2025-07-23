import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-brand-primary mr-2" />
            <span className="text-sm font-medium text-foreground">Revolutionizing Business with AI Automation</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Transform Your Business</span>
              <span className="block bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                with AI Agents
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We create intelligent AI agents that automate your processes, solve complex problems, 
              and scale your business operations. Plus, we build stunning websites that convert.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Bot, title: "AI Automation", desc: "Custom AI agents for any business process" },
              { icon: Target, title: "Problem Solving", desc: "Intelligent solutions for complex challenges" },
              { icon: Zap, title: "Scale Fast", desc: "Accelerate growth with smart automation" }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-brand-primary/50 transition-all duration-300 group">
                <feature.icon className="w-8 h-8 text-brand-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="glass" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
            {[
              { value: "500+", label: "AI Agents Deployed" },
              { value: "100+", label: "Happy Clients" },
              { value: "99%", label: "Automation Success" },
              { value: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Hero;