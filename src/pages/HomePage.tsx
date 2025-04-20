
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, IndianRupee } from "lucide-react";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-ekalNari-orange2 to-ekalNari-orange py-20 px-4 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Supporting Single Women Across India
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Access government schemes, pensions, housing support, and more. 
            Your pathway to empowerment starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-ekalNari-purple hover:bg-ekalNari-purple/90">
              <Link to="/eligibility">Check Your Eligibility</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn About the Scheme</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-ekalNari-dark">How Can We Help You?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ekalNari-light p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-ekalNari-purple flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Support</h3>
              <p className="text-ekalNari-dark">Access government pension schemes and financial aid programs</p>
            </div>
            
            <div className="bg-ekalNari-light p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-ekalNari-teal flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Housing Assistance</h3>
              <p className="text-ekalNari-dark">Find housing schemes and property rights support</p>
            </div>
            
            <div className="bg-ekalNari-light p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-ekalNari-pink flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Training</h3>
              <p className="text-ekalNari-dark">Discover vocational training and employment opportunities</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-ekalNari-orange hover:bg-ekalNari-orange/90">
              <Link to="/about">Start Here</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stories preview section */}
      <section className="py-16 px-4 bg-ekalNari-cream">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-ekalNari-dark">Community Stories</h2>
          <p className="text-center text-ekalNari-brown mb-12 max-w-2xl mx-auto">
            Read about women who have found support and changed their lives through our resources and community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-ekalNari-purple">Sushila's Journey</h3>
              <p className="mb-4">
                "After becoming a widow, I struggled to care for my in-laws. Joining ENSS helped me understand my rights and access a pension. Now I help other women like me."
              </p>
              <Link to="/stories" className="text-ekalNari-purple font-medium hover:underline">Read her full story →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-ekalNari-teal">Hansa's Transformation</h3>
              <p className="mb-4">
                "After being abandoned, I fell into depression. With support from the community, I was able to reclaim my identity and now advocate for single women's rights."
              </p>
              <Link to="/stories" className="text-ekalNari-teal font-medium hover:underline">Read her full story →</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
