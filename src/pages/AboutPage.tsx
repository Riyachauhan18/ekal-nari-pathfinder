
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee } from "lucide-react";

const AboutPage = () => {
  const benefits = [
    {
      title: "Monthly Pension",
      description: "Regular financial assistance through pension schemes for single women above 35 years",
      icon: <IndianRupee className="h-8 w-8 text-ekalNari-orange" />,
      color: "bg-ekalNari-orange/10"
    },
    {
      title: "Housing Support",
      description: "Access to affordable housing schemes and property rights assistance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekalNari-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      color: "bg-ekalNari-purple/10"
    },
    {
      title: "Vocational Training",
      description: "Skill development programs to enhance employment opportunities",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekalNari-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      color: "bg-ekalNari-teal/10"
    },
    {
      title: "Healthcare Benefits",
      description: "Access to free or subsidized medical care and health insurance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekalNari-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      color: "bg-ekalNari-pink/10"
    },
    {
      title: "Legal Aid",
      description: "Free legal assistance for property, pension, and other legal matters",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekalNari-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      color: "bg-ekalNari-brown/10"
    },
    {
      title: "Education Support",
      description: "Scholarships and educational aid for children of single women",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekalNari-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      color: "bg-ekalNari-orange/10"
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-ekalNari-dark">About the Ekal Nari Support Scheme</h1>
          <p className="text-lg mb-6">
            The Ekal Nari Support Scheme is a comprehensive program designed to provide financial, social, and legal support to single women in India. 
            This includes widows, divorced, separated, and never-married women who are facing social and economic challenges.
          </p>
          <div className="bg-ekalNari-purple/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-ekalNari-purple">Who is eligible?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Women who are widowed, divorced, or separated</li>
              <li>Single women who have never married and are above 35 years</li>
              <li>Women facing financial hardship</li>
              <li>Indian citizens with proper identification</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-ekalNari-dark">Benefits of the Scheme</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className={`${benefit.color} rounded-t-lg`}>
                <div className="flex items-center gap-3">
                  {benefit.icon}
                  <CardTitle>{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-base text-ekalNari-dark">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-ekalNari-cream p-6 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-ekalNari-dark">About ENSS (Ekal Nari Sashakti Sangathan)</h2>
          <p className="mb-4">
            ENSS is a grassroots organization working for the rights and welfare of single women across India. 
            Founded in 2000, it has grown into a powerful collective voice that advocates for policy changes 
            and implementation of welfare schemes for single women.
          </p>
          <p>
            Through community meetings, awareness campaigns, and direct intervention, ENSS has helped 
            thousands of single women access government schemes, fight legal battles, and regain their dignity and rights.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
