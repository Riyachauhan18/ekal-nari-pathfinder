
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book } from "lucide-react";

const StoriesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Book className="w-8 h-8 text-ekalNari-purple" />
          <h1 className="text-3xl md:text-4xl font-bold text-ekalNari-dark">Community Stories</h1>
        </div>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Real stories of women who found support, strength, and a new beginning through the Ekal Nari network and government schemes.
        </p>
        
        <Tabs defaultValue="stories" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
            <TabsTrigger value="impact">ENSS Impact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stories" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-none shadow-md overflow-hidden">
                <CardHeader className="bg-ekalNari-purple/10">
                  <CardTitle className="text-ekalNari-purple">Sushila's Journey</CardTitle>
                  <CardDescription>From Rajasthan</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="bg-ekalNari-light rounded-md p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 mt-3 ml-3 w-6 h-6 text-ekalNari-purple opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                      <div className="ml-10 text-ekalNari-dark">
                        After becoming a widow at the young age of 28, I had to care for both my children and my in-laws. 
                        Society made me feel invisible, and I struggled to access even basic government support.
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-3">
                    Sushila joined the Ekal Nari Sashakti Sangathan (ENSS) in her village in Rajasthan, where she learned about her rights and the government schemes available for widowed women.
                  </p>
                  
                  <p className="mb-3">
                    With the help of ENSS volunteers, she applied for and received a widow pension, housing assistance, and free medical insurance. Her children were enrolled in scholarship programs that covered their educational expenses.
                  </p>
                  
                  <p>
                    Today, Sushila is not only financially independent but also helps other single women in her village understand and access their rights. She has become a community leader and mentor for many widowed women.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-ekalNari-cream/50">
                  <div className="italic text-ekalNari-brown">
                    "I went from feeling powerless to becoming a source of strength for others. Now I teach other women about their rights and how to access government support."
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="border-none shadow-md overflow-hidden">
                <CardHeader className="bg-ekalNari-teal/10">
                  <CardTitle className="text-ekalNari-teal">Hansa's Transformation</CardTitle>
                  <CardDescription>From Gujarat</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="bg-ekalNari-light rounded-md p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 mt-3 ml-3 w-6 h-6 text-ekalNari-teal opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                      <div className="ml-10 text-ekalNari-dark">
                        I was abandoned by my husband after 15 years of marriage. I had no identity of my own, not even my own surname. 
                        I fell into deep depression and couldn't see a way forward.
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-3">
                    Hansa was directed to an ENSS meeting by a concerned neighbor. There, she found a supportive community of women who had faced similar challenges but had rebuilt their lives.
                  </p>
                  
                  <p className="mb-3">
                    With legal support from ENSS, Hansa was able to claim her share of property, change her surname, and establish her own legal identity. She received training in tailoring and entrepreneurship.
                  </p>
                  
                  <p>
                    Today, Hansa runs a small but successful tailoring business and has regained her confidence and independence. She has become an advocate for abandoned women and regularly speaks at community gatherings about women's rights.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-ekalNari-cream/50">
                  <div className="italic text-ekalNari-brown">
                    "Finding ENSS was like finding a family that believed in me when I had stopped believing in myself. Now I have my own identity, my own business, and my own voice."
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="border-none shadow-md overflow-hidden lg:col-span-2">
                <CardHeader className="bg-ekalNari-orange/10">
                  <CardTitle className="text-ekalNari-orange">Meera's Educational Journey</CardTitle>
                  <CardDescription>From Uttarakhand</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <div className="relative mb-6">
                        <div className="bg-ekalNari-light rounded-md p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 mt-3 ml-3 w-6 h-6 text-ekalNari-orange opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                          </svg>
                          <div className="ml-10 text-ekalNari-dark">
                            I had to leave school after my father passed away. As an unmarried woman caring for my elderly mother, I had no income and felt trapped.
                          </div>
                        </div>
                      </div>
                      
                      <p className="mb-3">
                        Meera, an unmarried woman in her 40s, had given up her education to care for her family. When she connected with ENSS, she learned about educational scholarships and vocational training programs for single women.
                      </p>
                      
                      <p>
                        With support from the government's skill development program, Meera completed a computer training course and received certification. This opened up new job opportunities that were previously unavailable to her.
                      </p>
                    </div>
                    
                    <div>
                      <p className="mb-3">
                        Meera now works as an administrative assistant at a local school, earning a stable income. She has also been able to continue her education through distance learning and is pursuing a bachelor's degree.
                      </p>
                      
                      <p className="mb-3">
                        The housing assistance scheme for single women helped Meera secure a small home for herself and her mother, providing them with stability and security.
                      </p>
                      
                      <p>
                        Meera has become an inspiration in her community, encouraging other single women to pursue education regardless of age. She volunteers on weekends to teach basic computer skills to women in her village.
                      </p>
                      
                      <div className="mt-4 bg-ekalNari-cream/50 p-4 rounded-md italic text-ekalNari-brown">
                        "It's never too late to learn and grow. Education has given me independence and dignity. Now I can support myself and my mother without depending on relatives."
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-ekalNari-purple hover:bg-ekalNari-purple/90">Share Your Story</Button>
              <p className="mt-2 text-sm text-ekalNari-brown">
                Your story could inspire others and help us improve our support programs.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="impact" className="mt-8">
            <div className="space-y-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-ekalNari-dark">Collective Campaign in Jharkhand</h2>
                
                <p className="mb-4">
                  In 2019, the ENSS Jharkhand chapter organized village-level meetings across 15 districts to identify single women who were eligible for government schemes but had not received benefits.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="bg-ekalNari-light p-4 rounded-md text-center">
                    <div className="text-3xl font-bold text-ekalNari-orange mb-2">500+</div>
                    <p>Single women identified who were eligible for pensions</p>
                  </div>
                  
                  <div className="bg-ekalNari-light p-4 rounded-md text-center">
                    <div className="text-3xl font-bold text-ekalNari-purple mb-2">15</div>
                    <p>Districts covered through grassroots mobilization</p>
                  </div>
                  
                  <div className="bg-ekalNari-light p-4 rounded-md text-center">
                    <div className="text-3xl font-bold text-ekalNari-teal mb-2">85%</div>
                    <p>Success rate in securing benefits</p>
                  </div>
                </div>
                
                <p className="mb-4">
                  Through coordinated efforts with local administration, ENSS volunteers helped women complete applications, gather necessary documents, and follow up with officials. As a result, over 400 women started receiving monthly pensions and other benefits.
                </p>
                
                <p>
                  The campaign also resulted in policy changes at the district level, simplifying the application process and reducing bureaucratic hurdles for single women applicants.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-ekalNari-dark">Housing Rights Campaign in Rajasthan</h2>
                
                <p className="mb-4">
                  In 2021, ENSS identified that many widowed women in rural Rajasthan were being denied property rights after their husbands' deaths, with in-laws often forcing them out of their homes.
                </p>
                
                <p className="mb-4">
                  ENSS organized legal awareness camps and provided pro bono legal assistance through partner organizations. They also engaged with local panchayats to intervene in property disputes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-ekalNari-light p-4 rounded-md">
                    <h3 className="font-semibold mb-2 text-ekalNari-purple">Legal Support</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Legal literacy workshops conducted in 30 villages</li>
                      <li>Pro bono legal representation for 85 women</li>
                      <li>75% of property disputes resolved in favor of widows</li>
                    </ul>
                  </div>
                  
                  <div className="bg-ekalNari-light p-4 rounded-md">
                    <h3 className="font-semibold mb-2 text-ekalNari-teal">Housing Scheme Access</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>120 widows helped to apply for housing schemes</li>
                      <li>90 women received housing assistance</li>
                      <li>Community support system established for ongoing cases</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  This campaign not only helped individual women secure their housing rights but also created a lasting precedent in the region. Local panchayats now actively support widows in property matters, and awareness about women's property rights has significantly increased.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-ekalNari-dark">Policy Advocacy Success</h2>
                
                <p className="mb-4">
                  Through persistent advocacy efforts at state and national levels, ENSS has helped bring about significant policy changes that benefit single women across India.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-ekalNari-orange flex items-center justify-center text-white font-medium text-sm">✓</div>
                    <div>
                      <h4 className="font-medium">Increased Pension Amounts</h4>
                      <p className="text-sm">Successful advocacy led to an increase in widow pension amounts in multiple states</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-ekalNari-orange flex items-center justify-center text-white font-medium text-sm">✓</div>
                    <div>
                      <h4 className="font-medium">Simplified Documentation</h4>
                      <p className="text-sm">Reduced paperwork requirements for scheme applications in 7 states</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-ekalNari-orange flex items-center justify-center text-white font-medium text-sm">✓</div>
                    <div>
                      <h4 className="font-medium">Expanded Eligibility</h4>
                      <p className="text-sm">Inclusion of separated and abandoned women in welfare schemes previously limited to widows</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-ekalNari-orange flex items-center justify-center text-white font-medium text-sm">✓</div>
                    <div>
                      <h4 className="font-medium">Priority in Housing Schemes</h4>
                      <p className="text-sm">Special category created for single women in government housing programs</p>
                    </div>
                  </div>
                </div>
                
                <p>
                  These policy changes have impacted hundreds of thousands of single women across India, making support more accessible and comprehensive. ENSS continues to work with policymakers to further improve schemes and their implementation.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default StoriesPage;
