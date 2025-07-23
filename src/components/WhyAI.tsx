import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from "lucide-react";

const WhyAI = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "73%",
      label: "Productivity Increase",
      description: "Companies using AI agents report significant productivity gains"
    },
    {
      icon: Clock,
      value: "40hrs",
      label: "Weekly Time Saved",
      description: "Average time saved per employee through AI automation"
    },
    {
      icon: DollarSign,
      value: "30%",
      label: "Cost Reduction",
      description: "Operational cost savings achieved through intelligent automation"
    },
    {
      icon: Users,
      value: "95%",
      label: "Employee Satisfaction",
      description: "Workers prefer focusing on creative tasks over repetitive ones"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Instant Decision Making",
      description: "AI agents process information and make decisions in milliseconds, not hours."
    },
    {
      icon: Shield,
      title: "Error-Free Operations",
      description: "Eliminate human errors with consistent, accurate AI-powered processes."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI agents work around the clock, ensuring continuous operations."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Scale your operations instantly without hiring additional staff."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why AI Agents Are <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Mandatory</span> for Every Company
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The future of business is here. Companies that don't adopt AI automation will be left behind.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              The AI Revolution is Here
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Companies across every industry are racing to implement AI solutions. Those who act now gain a competitive advantage that becomes harder to overcome with each passing day.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="hero" size="lg">
                Start Your AI Transformation
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-primary/20">
              <h4 className="text-xl font-bold text-foreground mb-6">AI Market Growth</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2023</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="w-1/4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full h-2"></div>
                  </div>
                  <span className="text-foreground font-semibold">$150B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2024</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="w-1/2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full h-2"></div>
                  </div>
                  <span className="text-foreground font-semibold">$300B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2025</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="w-3/4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full h-2"></div>
                  </div>
                  <span className="text-foreground font-semibold">$500B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2030</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full h-2"></div>
                  </div>
                  <span className="text-foreground font-semibold">$1.8T</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Global AI market size projected growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAI;