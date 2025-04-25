import { Layout } from "@/components/Layout";
import { useVoiceControl } from "@/hooks/useVoiceControl";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { ControlPanel } from "@/components/solutions/ControlPanel";
import {
  FileCheck,
  Building,
  Scale,
  Shield,
  MapPin,
  MessageSquare,
  BookOpen,
  Globe
} from "lucide-react";

const solutions = [
  {
    title: "Step-by-Step Application Portal",
    description: "Simple forms with voice guidance in multiple languages",
    icon: <FileCheck className="h-8 w-8 text-ekalNari-orange" />,
    badge: "Most Popular",
    action: "Start Application",
    gesture: "Swipe right to start",
    voiceCommand: "Say 'start application'"
  },
  {
    title: "Digital Seva Corner Locator",
    description: "Find nearby centers with trained staff to help you apply",
    icon: <Building className="h-8 w-8 text-ekalNari-orange" />,
    action: "Find Centers",
    gesture: "Two finger tap to locate",
    voiceCommand: "Say 'find center'"
  },
  {
    title: "Legal Help Network",
    description: "Connect with pro-bono lawyers who can help with your case",
    icon: <Scale className="h-8 w-8 text-ekalNari-orange" />,
    action: "Get Legal Help",
    gesture: "Three finger tap for help",
    voiceCommand: "Say 'legal help'"
  },
  {
    title: "Emergency Button",
    description: "One-click contact with local support groups in crisis",
    icon: <Shield className="h-8 w-8 text-ekalNari-orange" />,
    badge: "Emergency",
    action: "Activate",
    gesture: "Double tap for emergency",
    voiceCommand: "Say 'emergency'"
  },
  {
    title: "Nearby Help Assistant",
    description: "Find and connect with local support workers and volunteers in your area",
    icon: <MapPin className="h-8 w-8 text-ekalNari-orange" />,
    action: "Find Help",
    gesture: "Double tap to locate",
    voiceCommand: "Say 'find help'"
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
  const { isListening, startListening, stopListening } = useVoiceControl();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-end mb-4">
            <select 
              className="px-4 py-2 rounded-md border border-ekalNari-orange text-ekalNari-dark"
              onChange={(e) => document.documentElement.lang = e.target.value}
              defaultValue="en"
            >
              <option value="en">🌐 English</option>
              <option value="hi">🌐 हिंदी</option>
              <option value="mr">🌐 मराठी</option>
              <option value="gu">🌐 ગુજરાતી</option>
              <option value="bn">🌐 বাংলা</option>
              <option value="ta">🌐 தமிழ்</option>
              <option value="te">🌐 తెలుగు</option>
              <option value="kn">🌐 ಕನ್ನಡ</option>
              <option value="ml">🌐 മലയാളം</option>
            </select>
          </div>
          <h1 className="text-3xl font-bold text-ekalNari-dark mb-4">Solutions for Single Women</h1>
          <p className="text-ekalNari-brown max-w-3xl mx-auto mb-4">
            Practical tools and resources designed to make accessing government schemes easier
            for single women across India.
          </p>
          <ControlPanel 
            isListening={isListening}
            onStartListening={startListening}
            onStopListening={stopListening}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              badge={solution.badge}
              action={solution.action}
              gesture={solution.gesture}
              voiceCommand={solution.voiceCommand}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsPage;
