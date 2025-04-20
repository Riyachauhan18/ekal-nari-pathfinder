
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

const EligibilityPage = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    maritalStatus: "",
    age: "",
    belowPovertyLine: "",
    indianCitizen: ""
  });
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleAnswerChange = (question: string, answer: string) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const checkEligibility = () => {
    // Simple eligibility check based on the answers
    const eligible = 
      (answers.maritalStatus === "widow" || 
       answers.maritalStatus === "divorced" ||
       answers.maritalStatus === "separated" ||
       (answers.maritalStatus === "single" && answers.age === "35+")) &&
      answers.indianCitizen === "yes";
    
    setIsEligible(eligible);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center text-ekalNari-dark">Eligibility Checker</h1>
          <p className="text-center mb-8">
            Answer a few questions to check if you're eligible for the Ekal Nari Support Scheme
          </p>
          
          <Card className="shadow-lg">
            {isEligible === null ? (
              <>
                <CardHeader>
                  <CardTitle>Question {step} of 4</CardTitle>
                  <CardDescription>Please select the most appropriate answer</CardDescription>
                </CardHeader>
                
                <CardContent>
                  {step === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium">What is your marital status?</h2>
                      <RadioGroup 
                        value={answers.maritalStatus}
                        onValueChange={(value) => handleAnswerChange("maritalStatus", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="widow" id="widow" />
                          <Label htmlFor="widow">Widow</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="divorced" id="divorced" />
                          <Label htmlFor="divorced">Divorced</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="separated" id="separated" />
                          <Label htmlFor="separated">Separated</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="single" id="single" />
                          <Label htmlFor="single">Never married</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="married" id="married" />
                          <Label htmlFor="married">Currently married</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium">What is your age?</h2>
                      <RadioGroup 
                        value={answers.age}
                        onValueChange={(value) => handleAnswerChange("age", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="below35" id="below35" />
                          <Label htmlFor="below35">Below 35 years</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="35+" id="35+" />
                          <Label htmlFor="35+">35 years or older</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                  
                  {step === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium">Are you below the poverty line (BPL)?</h2>
                      <RadioGroup 
                        value={answers.belowPovertyLine}
                        onValueChange={(value) => handleAnswerChange("belowPovertyLine", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="bpl-yes" />
                          <Label htmlFor="bpl-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="bpl-no" />
                          <Label htmlFor="bpl-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="bpl-unknown" />
                          <Label htmlFor="bpl-unknown">I don't know</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                  
                  {step === 4 && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium">Are you an Indian citizen?</h2>
                      <RadioGroup 
                        value={answers.indianCitizen}
                        onValueChange={(value) => handleAnswerChange("indianCitizen", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="citizen-yes" />
                          <Label htmlFor="citizen-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="citizen-no" />
                          <Label htmlFor="citizen-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  {step > 1 && (
                    <Button 
                      variant="outline" 
                      onClick={handlePrevStep}
                    >
                      Previous
                    </Button>
                  )}
                  
                  {step < 4 ? (
                    <Button 
                      onClick={handleNextStep}
                      disabled={
                        (step === 1 && !answers.maritalStatus) ||
                        (step === 2 && !answers.age) ||
                        (step === 3 && !answers.belowPovertyLine)
                      }
                      className="ml-auto"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button 
                      onClick={checkEligibility}
                      disabled={!answers.indianCitizen}
                      className="ml-auto bg-ekalNari-purple hover:bg-ekalNari-purple/90"
                    >
                      Check Eligibility
                    </Button>
                  )}
                </CardFooter>
              </>
            ) : (
              <>
                <CardHeader className={isEligible ? "bg-ekalNari-teal/10" : "bg-ekalNari-orange/10"}>
                  <CardTitle className={isEligible ? "text-ekalNari-teal" : "text-ekalNari-orange"}>
                    {isEligible ? "You may be eligible!" : "You may not be eligible"}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-6">
                  {isEligible ? (
                    <div className="space-y-4">
                      <p>
                        Based on your answers, you may qualify for the Ekal Nari Support Scheme. 
                        The next step is to complete an application with your local district office.
                      </p>
                      <div className="bg-ekalNari-cream p-4 rounded-md">
                        <h3 className="font-medium mb-2">Required Documents:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Identity Proof (Aadhaar card/Voter ID)</li>
                          <li>Address Proof</li>
                          <li>Marital Status Proof (Death certificate/Divorce decree/Separation document)</li>
                          <li>Income Certificate or BPL Card (if applicable)</li>
                          <li>Bank Account Details</li>
                          <li>Recent Passport Size Photographs</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p>
                        Based on your answers, you may not be eligible for the Ekal Nari Support Scheme at this time.
                      </p>
                      <p>
                        However, there may be other government schemes that you qualify for. We recommend contacting your local district welfare office for more information.
                      </p>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setStep(1);
                      setIsEligible(null);
                    }}
                  >
                    Start Over
                  </Button>
                  
                  {isEligible && (
                    <Button asChild className="bg-ekalNari-purple hover:bg-ekalNari-purple/90">
                      <Link to="/apply">How to Apply</Link>
                    </Button>
                  )}
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EligibilityPage;
