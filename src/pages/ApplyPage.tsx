
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApplyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-ekalNari-dark">How to Apply</h1>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Follow these simple steps to apply for the Ekal Nari Support Scheme. You can choose to download the forms, 
          visit the district office, or get help from a local NGO.
        </p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <Tabs defaultValue="steps">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="steps">Step-by-Step Guide</TabsTrigger>
              <TabsTrigger value="documents">Required Documents</TabsTrigger>
              <TabsTrigger value="offices">Where to Apply</TabsTrigger>
            </TabsList>
            
            <TabsContent value="steps" className="mt-6">
              <div className="space-y-6">
                <div className="relative pl-8 pb-8 border-l-2 border-ekalNari-orange">
                  <div className="absolute top-0 left-0 w-6 h-6 -translate-x-3 rounded-full bg-ekalNari-orange flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-2">Check Your Eligibility</h3>
                  <p>
                    Use our eligibility checker to confirm if you qualify for the scheme. Eligibility criteria include marital status,
                    age, and financial condition.
                  </p>
                </div>
                
                <div className="relative pl-8 pb-8 border-l-2 border-ekalNari-purple">
                  <div className="absolute top-0 left-0 w-6 h-6 -translate-x-3 rounded-full bg-ekalNari-purple flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-2">Gather Required Documents</h3>
                  <p>
                    Collect all necessary documents as listed in the Documents tab.
                    Make sure all copies are clear and properly attested if required.
                  </p>
                </div>
                
                <div className="relative pl-8 pb-8 border-l-2 border-ekalNari-teal">
                  <div className="absolute top-0 left-0 w-6 h-6 -translate-x-3 rounded-full bg-ekalNari-teal flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-2">Fill the Application Form</h3>
                  <p>
                    Download the application form or collect it from your district office.
                    Fill it completely with accurate information. Use blue or black pen only.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" className="text-ekalNari-teal">
                      Download Application Form (PDF)
                    </Button>
                  </div>
                </div>
                
                <div className="relative pl-8 pb-8 border-l-2 border-ekalNari-pink">
                  <div className="absolute top-0 left-0 w-6 h-6 -translate-x-3 rounded-full bg-ekalNari-pink flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-xl font-semibold mb-2">Submit Your Application</h3>
                  <p>
                    Submit your completed form and all required documents to the District Social Welfare Office.
                    Make sure to get an acknowledgment receipt.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute top-0 left-0 w-6 h-6 -translate-x-3 rounded-full bg-ekalNari-orange flex items-center justify-center text-white font-bold">5</div>
                  <h3 className="text-xl font-semibold mb-2">Track Your Application</h3>
                  <p>
                    Use your acknowledgment receipt number to track the status of your application.
                    You can check online or visit the district office.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Documents Checklist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <div className="min-w-5 h-5 rounded-full bg-ekalNari-orange mt-0.5"></div>
                        <div>
                          <h4 className="font-medium">Identity Proof (any one)</h4>
                          <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Aadhaar Card</li>
                            <li>Voter ID Card</li>
                            <li>PAN Card</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="min-w-5 h-5 rounded-full bg-ekalNari-purple mt-0.5"></div>
                        <div>
                          <h4 className="font-medium">Address Proof (any one)</h4>
                          <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Aadhaar Card</li>
                            <li>Ration Card</li>
                            <li>Electricity/Water Bill</li>
                            <li>Bank Passbook</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="min-w-5 h-5 rounded-full bg-ekalNari-teal mt-0.5"></div>
                        <div>
                          <h4 className="font-medium">Marital Status Proof</h4>
                          <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Death certificate (for widows)</li>
                            <li>Divorce decree (for divorced women)</li>
                            <li>Separation document (for separated women)</li>
                            <li>Self-declaration (for never married)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <div className="min-w-5 h-5 rounded-full bg-ekalNari-pink mt-0.5"></div>
                        <div>
                          <h4 className="font-medium">Income Certificate</h4>
                          <ul className="list-disc pl-5 text-sm mt-1">
                            <li>BPL Card (if applicable)</li>
                            <li>Income certificate from Tehsildar</li>
                            <li>Self-declaration of income</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="min-w-5 h-5 rounded-full bg-ekalNari-brown mt-0.5"></div>
                        <div>
                          <h4 className="font-medium">Bank Details</h4>
                          <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Bank passbook first page copy</li>
                            <li>Cancelled cheque</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="min-w-5 h-5 rounded-full bg-ekalNari-orange mt-0.5"></div>
                        <div>
                          <h4 className="font-medium">Other</h4>
                          <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Recent passport size photographs (3-4)</li>
                            <li>Mobile number linked with Aadhaar</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-ekalNari-cream rounded-md">
                    <p className="text-sm">
                      <strong>Note:</strong> All photocopies should be self-attested. Original documents will be required for verification at the time of submission.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="offices" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Where to Submit Your Application</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg text-ekalNari-purple mb-2">District Social Welfare Office</h4>
                      <p className="mb-2">
                        Visit your District Social Welfare Office with all required documents. This is the primary place where applications are accepted.
                      </p>
                      <p className="text-sm text-ekalNari-brown">
                        To find the office in your district, contact your local panchayat or municipal office.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg text-ekalNari-orange mb-2">Common Service Centers</h4>
                      <p className="mb-2">
                        Many villages have Common Service Centers (CSCs) where you can get assistance with filling and submitting your application.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg text-ekalNari-teal mb-2">Online Application</h4>
                      <p className="mb-2">
                        Some states offer online application through their e-governance portals. Visit your state government's official website to check this option.
                      </p>
                      <Button className="bg-ekalNari-teal hover:bg-ekalNari-teal/90 mt-2">
                        Check Online Application
                      </Button>
                    </div>
                    
                    <div className="bg-ekalNari-cream p-4 rounded-md">
                      <h4 className="font-semibold mb-2">Need Assistance?</h4>
                      <p className="mb-2">
                        If you need help with filling or submitting your application, you can:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Contact a local NGO working with ENSS</li>
                        <li>Visit your nearest ENSS branch</li>
                        <li>Call our helpline for guidance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="max-w-3xl mx-auto bg-ekalNari-light p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Listen to Application Instructions</h2>
          <p className="text-center mb-6">
            If you prefer to listen to the instructions, click the play button below:
          </p>
          
          <div className="flex justify-center mb-6">
            <button className="w-16 h-16 rounded-full bg-ekalNari-orange flex items-center justify-center shadow-md hover:bg-ekalNari-orange/90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
          
          <div className="text-center">
            <p className="font-medium mb-2">Need more help?</p>
            <p>
              Contact our support team for personalized assistance with your application.
            </p>
            <Button className="mt-4 bg-ekalNari-purple hover:bg-ekalNari-purple/90">Contact Support</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyPage;
