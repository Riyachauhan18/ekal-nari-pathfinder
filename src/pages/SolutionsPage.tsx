
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileCheck,
  Building,
  Scale,
  Shield,
  Users,
  MessageSquare,
  BookOpen
} from "lucide-react";

const solutions = [
  {
    title: "Step-by-Step Application Portal",
    description: "Simple forms with voice guidance in multiple languages",
    icon: <FileCheck className="h-8 w-8 text-ekalNari-orange" />,
    badge: "Most Popular",
    action: "Start Application"
  },
  {
    title: "Digital Seva Corner Locator",
    description: "Find nearby centers with trained staff to help you apply",
    icon: <Building className="h-8 w-8 text-ekalNari-orange" />,
    action: "Find Centers"
  },
  {
    title: "Legal Help Network",
    description: "Connect with pro-bono lawyers who can help with your case",
    icon: <Scale className="h-8 w-8 text-ekalNari-orange" />,
    action: "Get Legal Help"
  },
  {
    title: "Emergency Button",
    description: "One-click contact with local support groups in crisis",
    icon: <Shield className="h-8 w-8 text-ekalNari-orange" />,
    badge: "Emergency",
    action: "Activate"
  },
  {
    title: "Community Wall",
    description: "Connect with other single women in your district",
    icon: <Users className="h-8 w-8 text-ekalNari-orange" />,
    action: "Join Community"
  },
  {
    title: "Application Tracking",
    description: "Check the status of your pension or housing application",
    icon: <FileCheck className="h-8 w-8 text-ekalNari-orange" />,
    action: "Track Status"
  },
  {
    title: "Anonymous Chatbot Guide",
    description: "Ask questions privately without sharing your identity",
    icon: <MessageSquare className="h-8 w-8 text-ekalNari-orange" />,
    action: "Start Chat"
  },
  {
    title: "Resources for Daughters",
    description: "Education scholarships and skill training programs",
    icon: <BookOpen className="h-8 w-8 text-ekalNari-orange" />,
    action: "Explore Programs"
  }
];

const SolutionsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-ekalNari-dark mb-4">Solutions for Single Women</h1>
          <p className="text-ekalNari-brown max-w-3xl mx-auto">
            Practical tools and resources designed to make accessing government schemes easier
            for single women across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="bg-ekalNari-cream p-3 rounded-lg">
                    {solution.icon}
                  </div>
                  {solution.badge && (
                    <Badge variant={solution.badge === "Emergency" ? "destructive" : "default"}>
                      {solution.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold mt-4 text-ekalNari-dark">{solution.title}</h3>
                <p className="text-sm text-ekalNari-brown mt-2 mb-4">{solution.description}</p>
                <Button className="w-full">{solution.action}</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsPage;
