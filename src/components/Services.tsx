import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Code, Smartphone, Database, Cloud, Cpu, ArrowRight } from "lucide-react";

const Services = () => {
  const aiServices = [
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Intelligent agents that automate your specific business processes and decision-making.",
      features: ["Process Automation", "Decision Support", "24/7 Operations", "Custom Training"]
    },
    {
      icon: Cpu,
      title: "Machine Learning Solutions",
      description: "Advanced ML models for prediction, classification, and pattern recognition.",
      features: ["Predictive Analytics", "Data Classification", "Anomaly Detection", "Custom Models"]
    },
    {
      icon: Cloud,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: ["API Integration", "Legacy System Upgrade", "Cloud Deployment", "Scalable Architecture"]
    }
  ];

  const webServices = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web applications using MERN stack, Laravel, and modern frameworks.",
      technologies: ["React", "Node.js", "Laravel", "MongoDB"]
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Mobile-first, responsive websites that work perfectly on all devices.",
      technologies: ["Tailwind CSS", "Next.js", "TypeScript", "PWA"]
    },
    {
      icon: Database,
      title: "CMS & E-commerce",
      description: "Custom content management systems and e-commerce solutions.",
      technologies: ["WordPress", "Shopify", "Custom CMS", "Payment Integration"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Automation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with cutting-edge AI agents and automation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aiServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-brand-primary/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Web Development Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Web Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web development services to establish your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {webServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-brand-secondary/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;