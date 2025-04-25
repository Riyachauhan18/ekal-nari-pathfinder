
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ListOrdered, 
  Headphones, 
  Video, 
  AlertCircle, 
  MessageSquare,
  FileSearch,
  MessageCircle,
  Users,
  PhoneCall,
  PoliceIcon,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-ekalNari-dark">
            Solutions of the Ekal Nari Yojana
          </h1>
          <p className="text-lg text-ekalNari-brown max-w-3xl mx-auto">
            Comprehensive support systems designed to assist single women in accessing benefits, 
            getting help, and connecting with the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Step-by-Step Portal */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-orange hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-orange w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <ListOrdered className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">Step-by-Step Portal</h2>
                  <p className="text-ekalNari-brown mt-1">
                    Interactive website with infographics and voice navigation
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-cream p-4 rounded-md mt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-orange rounded-full"></div>
                    <span>Guided application process with audio support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-orange rounded-full"></div>
                    <span>Visual aids for document preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-orange rounded-full"></div>
                    <span>Simple language instructions in multiple languages</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/apply">Access Step-by-Step Guide</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Digital Seva Corners */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-purple hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-purple w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Headphones className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">Digital Seva Corners</h2>
                  <p className="text-ekalNari-brown mt-1">
                    Offline support via panchayat/NGOs and SMS updates
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-cream p-4 rounded-md mt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-purple rounded-full"></div>
                    <span>Help desks at local panchayat offices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-purple rounded-full"></div>
                    <span>SMS alerts for application status and updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-purple rounded-full"></div>
                    <span>Toll-free helpline for assistance</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Find Nearest Seva Corner</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Legal Help Section */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-teal hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-teal w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Video className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">Legal Help Section</h2>
                  <p className="text-ekalNari-brown mt-1">
                    Video explainers and a legal aid helpline
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-cream p-4 rounded-md mt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-teal rounded-full"></div>
                    <span>Easy-to-understand legal rights videos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-teal rounded-full"></div>
                    <span>Free consultation with legal experts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-teal rounded-full"></div>
                    <span>Document templates for common legal needs</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="flex-1 gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Helpline</span>
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Video className="w-4 h-4" />
                  <span>Watch Videos</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Emergency 'Red Button' */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-pink hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-pink w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <AlertCircle className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">Emergency 'Red Button'</h2>
                  <p className="text-ekalNari-brown mt-1">
                    SOS feature to get location-based safety support
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-pink/10 p-4 rounded-md mt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-pink rounded-full"></div>
                    <span>One-tap emergency alert system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-pink rounded-full"></div>
                    <span>Alerts sent to nearby police and support staff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-pink rounded-full"></div>
                    <span>Works offline with last known location</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Button className="w-full bg-destructive hover:bg-destructive/90 gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Emergency SOS Button</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Community Wall */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-orange hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-orange w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">Community Wall</h2>
                  <p className="text-ekalNari-brown mt-1">
                    Space for women to share stories and connect
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-cream p-4 rounded-md mt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-orange rounded-full"></div>
                    <span>Share personal journeys and successes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-orange rounded-full"></div>
                    <span>Connect with other women in similar situations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-orange rounded-full"></div>
                    <span>Access resources shared by community members</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/stories">Join Community</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Track My Application */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-purple hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-purple w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <FileSearch className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">Track My Application</h2>
                  <p className="text-ekalNari-brown mt-1">
                    Check application status and raise complaints
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-cream p-4 rounded-md mt-2">
                <div className="mb-3">
                  <label htmlFor="application-id" className="block text-sm font-medium mb-1">
                    Enter Application ID:
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      id="application-id"
                      placeholder="e.g. ENSS-123456" 
                      className="px-3 py-2 border rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-ekalNari-purple" 
                    />
                    <Button size="sm" className="bg-ekalNari-purple hover:bg-ekalNari-purple/90">
                      <FileCheck className="w-4 h-4 mr-1" /> Track
                    </Button>
                  </div>
                </div>
                <Badge variant="outline" className="mb-2">Status tracking available 24/7</Badge>
                <p className="text-sm">
                  Track your application status, get updates, and raise concerns if needed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Anonymous Chatbot */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-teal hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-teal w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">Anonymous Chatbot</h2>
                  <p className="text-ekalNari-brown mt-1">
                    Provides anonymous and empathetic assistance
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-cream p-4 rounded-md mt-2 mb-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-white p-2 rounded-lg rounded-tl-none self-start max-w-[80%] shadow-sm">
                    How can I apply for the housing benefit?
                  </div>
                  <div className="bg-ekalNari-teal/10 p-2 rounded-lg rounded-tr-none self-end max-w-[80%] shadow-sm">
                    You'll need to submit Form B along with your ID proof at your local panchayat office. I can guide you through the process step by step.
                  </div>
                </div>
              </div>
              <Button className="w-full bg-ekalNari-teal hover:bg-ekalNari-teal/90">
                Start Anonymous Chat
              </Button>
            </CardContent>
          </Card>

          {/* For Daughters */}
          <Card className="overflow-hidden border-t-4 border-t-ekalNari-pink hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-ekalNari-pink w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Users className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ekalNari-dark">For Daughters</h2>
                  <p className="text-ekalNari-brown mt-1">
                    Teaches young women how to assist their mothers
                  </p>
                </div>
              </div>
              <div className="bg-ekalNari-cream p-4 rounded-md mt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-pink rounded-full"></div>
                    <span>Learn how to help with documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-pink rounded-full"></div>
                    <span>Guide for navigating government offices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-ekalNari-pink rounded-full"></div>
                    <span>Resource videos made especially for young adults</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Explore Resources for Daughters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-ekalNari-brown mb-4">
            Need help understanding which solution is right for you?
          </p>
          <Button asChild size="lg" className="bg-ekalNari-orange hover:bg-ekalNari-orange/90">
            <Link to="/contact">Get Personalized Help</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsPage;
