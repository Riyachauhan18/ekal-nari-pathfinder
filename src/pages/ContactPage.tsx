
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-ekalNari-dark">Contact & Support</h1>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Need assistance or have questions about the Ekal Nari Support Scheme? 
          Reach out to us or find local support organizations near you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-md border-none">
            <CardHeader className="bg-ekalNari-orange/10">
              <CardTitle className="text-ekalNari-orange">Helpline Numbers</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">National Helpline</h3>
                  <p className="text-lg font-semibold">1800-XXX-XXXX</p>
                  <p className="text-sm text-ekalNari-brown">Available 9 AM to 6 PM (Monday to Saturday)</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Women's Helpline</h3>
                  <p className="text-lg font-semibold">1800-XXX-YYYY</p>
                  <p className="text-sm text-ekalNari-brown">24/7 Support Available</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">ENSS Central Office</h3>
                  <p className="text-lg font-semibold">0XX-XXXX-XXXX</p>
                  <p className="text-sm text-ekalNari-brown">Available 10 AM to 5 PM (Monday to Friday)</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-none">
            <CardHeader className="bg-ekalNari-purple/10">
              <CardTitle className="text-ekalNari-purple">Digital Support</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Email Support</h3>
                  <p className="text-lg font-semibold">support@ekalnari.org</p>
                  <p className="text-sm text-ekalNari-brown">Response within 48 hours</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">WhatsApp Assistance</h3>
                  <p className="text-lg font-semibold">+91 XXXXX XXXXX</p>
                  <p className="text-sm text-ekalNari-brown">Send a message with your query</p>
                </div>
                
                <div className="pt-2">
                  <Button className="w-full bg-ekalNari-purple hover:bg-ekalNari-purple/90">
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-none">
            <CardHeader className="bg-ekalNari-teal/10">
              <CardTitle className="text-ekalNari-teal">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">ENSS Central Office</h3>
                  <p>XXX, Civil Lines,</p>
                  <p>New Delhi - 110054</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <p>Monday to Friday: 9:30 AM - 5:30 PM</p>
                  <p>Saturday: 9:30 AM - 1:00 PM (By Appointment)</p>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="w-full text-ekalNari-teal border-ekalNari-teal">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-md border-none lg:col-span-2">
            <CardHeader className="bg-ekalNari-orange/10">
              <CardTitle className="text-ekalNari-orange">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-1">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                  <Input id="subject" placeholder="Subject of your message" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="Please describe how we can help you" rows={5} />
                </div>
                
                <div>
                  <Button className="bg-ekalNari-orange hover:bg-ekalNari-orange/90">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-none">
            <CardHeader className="bg-ekalNari-purple/10">
              <CardTitle className="text-ekalNari-purple">Find Local Support</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="state" className="block font-medium mb-1">Select Your State</label>
                  <select 
                    id="state" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="">-- Select --</option>
                    <option value="delhi">Delhi</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="jharkhand">Jharkhand</option>
                    <option value="bihar">Bihar</option>
                    <option value="up">Uttar Pradesh</option>
                  </select>
                </div>
                
                <div>
                  <Button className="w-full bg-ekalNari-purple hover:bg-ekalNari-purple/90">
                    Find NGOs Near Me
                  </Button>
                </div>
                
                <div className="bg-ekalNari-cream p-4 rounded-md">
                  <h3 className="font-medium mb-2">Featured Support Organizations:</h3>
                  <ul className="space-y-2">
                    <li>
                      <div className="font-medium">ENSS Rajasthan</div>
                      <div className="text-sm">Jaipur: 0141-XXXXXXX</div>
                    </li>
                    <li>
                      <div className="font-medium">Mahila Shakti Kendra</div>
                      <div className="text-sm">Delhi: 011-XXXXXXX</div>
                    </li>
                    <li>
                      <div className="font-medium">Widow Welfare Society</div>
                      <div className="text-sm">Lucknow: 0522-XXXXXXX</div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-ekalNari-light p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Emergency Support</h2>
          <p className="text-center mb-6">
            If you are facing any immediate crisis or emergency situation, please contact these helplines:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-ekalNari-pink mb-1">Women's Emergency Helpline</h3>
              <p className="text-xl font-bold">1098</p>
              <p className="text-sm text-ekalNari-brown">24/7 Support for women in distress</p>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-ekalNari-orange mb-1">Police Helpline</h3>
              <p className="text-xl font-bold">100</p>
              <p className="text-sm text-ekalNari-brown">For immediate police assistance</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
