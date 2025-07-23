import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Target, Award, Lightbulb, Code, Bot, Globe, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & AI Strategist",
      avatar: "/api/placeholder/120/120",
      bio: "10+ years in AI/ML, former Google AI researcher. Passionate about democratizing AI for businesses.",
      expertise: ["AI Strategy", "Machine Learning", "Business Development"]
    },
    {
      name: "Sarah Chen",
      role: "CTO & Lead Developer",
      avatar: "/api/placeholder/120/120",
      bio: "Full-stack expert with deep AI integration experience. Built scalable systems for Fortune 500 companies.",
      expertise: ["System Architecture", "AI Integration", "Full-Stack Development"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Engineering",
      avatar: "/api/placeholder/120/120",
      bio: "PhD in Computer Science, specializing in autonomous agents and natural language processing.",
      expertise: ["AI Agents", "NLP", "Automation Systems"]
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      avatar: "/api/placeholder/120/120",
      bio: "Award-winning designer with expertise in user experience and brand development for tech companies.",
      expertise: ["UI/UX Design", "Brand Strategy", "Creative Direction"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay at the cutting edge of AI technology to deliver solutions that give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results that transform your business."
    },
    {
      icon: Heart,
      title: "Ethical AI",
      description: "We build responsible AI solutions that are transparent, fair, and beneficial for both businesses and society."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "The AI landscape evolves rapidly. We invest heavily in research and development to stay ahead."
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded AI Solution Mates", description: "Started with a vision to democratize AI for businesses" },
    { year: "2021", event: "First 100 Clients", description: "Reached our first major milestone with successful AI implementations" },
    { year: "2022", event: "AI Agent Platform Launch", description: "Launched our proprietary platform for building custom AI agents" },
    { year: "2023", event: "International Expansion", description: "Expanded services to serve clients across 25+ countries" },
    { year: "2024", event: "500+ Success Stories", description: "Celebrating over 500 successful AI transformation projects" }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed", icon: Award },
    { value: "50+", label: "Team Members", icon: Users },
    { value: "25+", label: "Countries Served", icon: Globe },
    { value: "99.2%", label: "Client Satisfaction", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 backdrop-blur-sm">
              <Users className="w-4 h-4 text-brand-primary mr-2" />
              <span className="text-sm font-medium text-foreground">Meet the Team Behind the Innovation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">AI Solution Mates</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of AI experts, developers, and innovators dedicated to transforming businesses 
              through intelligent automation and cutting-edge web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize AI technology and make intelligent automation accessible to businesses of all sizes. 
                We believe every company should have the power of AI agents to solve complex problems, 
                automate processes, and accelerate growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Since 2020, we've been at the forefront of the AI revolution, helping companies transform 
                their operations with custom AI agents and modern web solutions. Our expertise spans across 
                industries, from startups to Fortune 500 companies.
              </p>
              <div className="flex space-x-4">
                <Button variant="hero" size="lg">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-brand-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The visionaries and experts driving AI innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-brand-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="inline-block px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground mr-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to democratize AI
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-primary to-brand-secondary"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-brand-primary mb-2">{milestone.year}</div>
                        <h3 className="font-bold text-foreground mb-2">{milestone.event}</h3>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of companies that have already started their AI transformation journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Free Consultation
            </Button>
            <Button variant="glass" size="xl">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;