import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Bot, MessageSquare, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    urgency: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours with a customized solution.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
      urgency: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@aisolutionmates.com",
      action: "Send Email",
      href: "mailto:hello@aisolutionmates.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      action: "Call Now",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "San Francisco, CA",
      action: "Get Directions",
      href: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Mon-Fri: 9AM-6PM PST",
      action: "Schedule Call",
      href: "#"
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
              <MessageSquare className="w-4 h-4 text-brand-primary mr-2" />
              <span className="text-sm font-medium text-foreground">Ready to Transform Your Business?</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Build Your AI Solution
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a free consultation and discover how AI agents can revolutionize your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <Bot className="w-6 h-6 text-brand-primary mr-2" />
                    Tell Us About Your Project
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out this form and we'll get back to you with a customized AI solution proposal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="bg-background/50 border-border focus:border-brand-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Business Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="bg-background/50 border-border focus:border-brand-primary"
                        />
                      </div>
                    </div>

                    {/* Company and Phone Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground font-medium">Company Name *</Label>
                        <Input
                          id="company"
                          placeholder="Your Company Inc."
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          required
                          className="bg-background/50 border-border focus:border-brand-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="bg-background/50 border-border focus:border-brand-primary"
                        />
                      </div>
                    </div>

                    {/* Service and Budget Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-foreground font-medium">Service Needed *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="bg-background/50 border-border focus:border-brand-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-agents">Custom AI Agents</SelectItem>
                            <SelectItem value="automation">Process Automation</SelectItem>
                            <SelectItem value="ml-solutions">Machine Learning Solutions</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="full-stack">Full-Stack Development</SelectItem>
                            <SelectItem value="consultation">AI Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-foreground font-medium">Project Budget</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger className="bg-background/50 border-border focus:border-brand-primary">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="text-foreground font-medium">Project Timeline</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                        <SelectTrigger className="bg-background/50 border-border focus:border-brand-primary">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">Flexible timeline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your current challenges, what you want to automate, expected outcomes, and any specific requirements..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        rows={5}
                        className="bg-background/50 border-border focus:border-brand-primary resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white font-semibold py-3 h-12"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message & Get Free Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 hover:border-brand-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground mb-3">{info.description}</p>
                        <a 
                          href={info.href}
                          className="text-brand-primary hover:text-brand-secondary transition-colors text-sm font-medium"
                        >
                          {info.action} →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Why Choose Us */}
              <Card className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 border-brand-primary/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3" />
                      Free initial consultation
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3" />
                      24-hour response guarantee
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3" />
                      Custom AI solution proposal
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3" />
                      500+ successful implementations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;