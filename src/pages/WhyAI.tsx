import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhyAI from "@/components/WhyAI";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Users, Clock, Brain, Target, Shield, BarChart3, Cpu, Bot } from "lucide-react";

const WhyAIPage = () => {
  const aiEvolution = [
    {
      year: "2020",
      milestone: "AI Adoption Begins",
      description: "Early adopters start experimenting with AI tools and automation",
      percentage: "15%"
    },
    {
      year: "2021", 
      milestone: "Mainstream Recognition",
      description: "Major companies begin implementing AI solutions at scale",
      percentage: "35%"
    },
    {
      year: "2022",
      milestone: "AI Integration",
      description: "AI becomes essential for competitive advantage",
      percentage: "55%"
    },
    {
      year: "2023",
      milestone: "AI Revolution",
      description: "Generative AI transforms business operations globally",
      percentage: "73%"
    },
    {
      year: "2024",
      milestone: "AI-First Companies",
      description: "Market leaders are AI-native organizations",
      percentage: "89%"
    }
  ];

  const industryImpact = [
    {
      industry: "Healthcare",
      icon: "🏥",
      impact: "AI diagnoses diseases 40% faster than human doctors",
      savings: "$150B annually in operational efficiency",
      examples: ["Medical imaging analysis", "Drug discovery acceleration", "Patient monitoring systems"]
    },
    {
      industry: "Financial Services",
      icon: "🏦", 
      impact: "95% of fraud attempts detected and prevented",
      savings: "$220B annually in fraud prevention",
      examples: ["Real-time fraud detection", "Algorithmic trading", "Risk assessment automation"]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      impact: "30% reduction in production costs through optimization",
      savings: "$340B annually in efficiency gains",
      examples: ["Predictive maintenance", "Quality control automation", "Supply chain optimization"]
    },
    {
      industry: "Retail",
      icon: "🛒",
      impact: "Personalization increases sales by 60%",
      savings: "$180B annually in improved conversion",
      examples: ["Recommendation engines", "Inventory optimization", "Customer service automation"]
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Speed to Market",
      description: "AI-powered companies launch products 3x faster than traditional competitors",
      stat: "300% faster",
      icon: Zap
    },
    {
      title: "Cost Efficiency", 
      description: "Automation reduces operational costs while maintaining quality",
      stat: "40% cost reduction",
      icon: TrendingUp
    },
    {
      title: "24/7 Operations",
      description: "AI agents work continuously without breaks or human limitations",
      stat: "24/7 availability",
      icon: Clock
    },
    {
      title: "Scalability",
      description: "Handle 1000x more requests without proportional cost increase",
      stat: "Infinite scale",
      icon: BarChart3
    }
  ];

  const futureScenarios = [
    {
      scenario: "Companies Without AI",
      outcomes: [
        "Manual processes slow growth",
        "Higher operational costs", 
        "Limited scalability",
        "Falling behind competitors",
        "Reduced market share"
      ],
      trend: "declining",
      color: "text-red-500"
    },
    {
      scenario: "AI-Powered Companies",
      outcomes: [
        "Automated decision making",
        "Exponential growth potential",
        "Cost-effective operations",
        "Market leadership",
        "Sustainable competitive advantage"
      ],
      trend: "rising",
      color: "text-green-500"
    }
  ];

  const aiInnovations = [
    {
      technology: "Generative AI",
      description: "Creates content, code, and solutions automatically",
      applications: ["Content creation", "Code generation", "Design automation"],
      impact: "10x productivity increase"
    },
    {
      technology: "Autonomous Agents",
      description: "Independent AI systems that perform complex tasks",
      applications: ["Customer service", "Data analysis", "Process optimization"],
      impact: "24/7 intelligent operations"
    },
    {
      technology: "Predictive Analytics",
      description: "Forecasts trends and outcomes with high accuracy",
      applications: ["Demand forecasting", "Risk assessment", "Market analysis"],
      impact: "85% prediction accuracy"
    },
    {
      technology: "Natural Language Processing",
      description: "Understands and generates human-like communication",
      applications: ["Chatbots", "Document processing", "Translation"],
      impact: "Human-level communication"
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
              <Brain className="w-4 h-4 text-brand-primary mr-2" />
              <span className="text-sm font-medium text-foreground">The AI Revolution is Here</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Why <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">AI Agents</span> Are Essential
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Artificial Intelligence isn't the future anymore—it's the present. Companies that don't adapt 
              to AI-powered operations will be left behind in an increasingly competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* AI Evolution Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The AI Adoption Timeline
            </h2>
            <p className="text-xl text-muted-foreground">
              See how AI adoption has accelerated across industries
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-primary to-brand-secondary"></div>
            
            <div className="space-y-12">
              {aiEvolution.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-2xl font-bold text-brand-primary">{milestone.year}</div>
                          <div className="text-lg font-bold text-green-500">{milestone.percentage}</div>
                        </div>
                        <h3 className="font-bold text-foreground mb-2">{milestone.milestone}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI's Impact Across Industries
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world transformations happening right now
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryImpact.map((industry, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-foreground">{industry.industry}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-lg">
                      <p className="font-semibold text-foreground">{industry.impact}</p>
                    </div>
                    
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <p className="font-semibold text-green-600">{industry.savings}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Applications:</h4>
                      <ul className="space-y-1">
                        {industry.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Include the existing WhyAI component */}
      <WhyAI />

      {/* Competitive Advantages */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The AI Competitive Advantage
            </h2>
            <p className="text-xl text-muted-foreground">
              Why AI-powered companies outperform traditional businesses
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-primary mb-2">{advantage.stat}</div>
                  <h3 className="font-bold text-foreground mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Innovations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest AI Innovations
            </h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge technologies reshaping business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiInnovations.map((innovation, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mr-3">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{innovation.technology}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{innovation.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {innovation.applications.map((app, idx) => (
                          <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30">
                      <span className="text-sm font-semibold text-brand-primary">{innovation.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scenarios */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Tale of Two Futures
            </h2>
            <p className="text-xl text-muted-foreground">
              Where will your company be in 5 years?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureScenarios.map((scenario, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm ${scenario.trend === 'declining' ? 'border-red-200' : 'border-green-200'}`}>
                <CardContent className="p-0">
                  <h3 className={`text-xl font-bold mb-4 ${scenario.color}`}>{scenario.scenario}</h3>
                  
                  <ul className="space-y-3">
                    {scenario.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${scenario.trend === 'declining' ? 'bg-red-500' : 'bg-green-500'}`} />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 text-center">
                    <div className={`text-4xl ${scenario.trend === 'declining' ? 'text-red-500' : 'text-green-500'}`}>
                      {scenario.trend === 'declining' ? '📉' : '📈'}
                    </div>
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
            Don't Get Left Behind
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The AI revolution is happening now. Every day you wait is market share lost to AI-powered competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your AI Transformation Today
            </Button>
            <Button variant="glass" size="xl">
              Learn About Our AI Solutions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyAIPage;