
import { ArrowDown, TrendingUp, PiggyBank, BarChart3, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface HeroSectionProps {
  onSaveNowClick: () => void;
}

const HeroSection = ({ onSaveNowClick }: HeroSectionProps) => {
  return (
    <section className="scroll-section bg-gradient-to-b from-white via-mild-green-50 to-mild-green-100 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Abstract shapes in the background */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-mild-green-200 blur-xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 rounded-full bg-mild-green-300 blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-mild-green-100 blur-xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Save upto <span className="text-primary">1L in taxes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
            Leverage your long-term capital gains tax harvest potential by identifying and
            efficiently managing your mutual fund investments with our LTCG Harvester tool.
          </p>
          <Button 
            onClick={onSaveNowClick} 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-medium text-lg px-8 py-6"
          >
            Save Now
          </Button>
        </div>
        
        {/* Enhanced Tax Savings visualization */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          <Card className="w-full max-w-md border-mild-green-100 shadow-lg overflow-hidden">
            <div className="bg-mild-green-100 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-3">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Tax Savings Calculator</h3>
              </div>
              <div className="bg-primary rounded-full p-2 animate-bounce-subtle">
                <PiggyBank className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="mb-6 text-left border-b border-mild-green-100 pb-4">
                <p className="text-gray-600 mb-1">Total Pre-tax Gains</p>
                <p className="text-2xl font-bold text-gray-800">₹3,00,000</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg border border-red-100 p-4 text-left">
                  <p className="text-sm text-gray-500 mb-1">Without Harvesting</p>
                  <div className="flex items-center">
                    <div className="bg-red-50 p-1 rounded mr-2">
                      <BarChart3 className="h-5 w-5 text-destructive" />
                    </div>
                    <span className="font-bold text-xl text-destructive">₹2,78,000</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">After 7.5% LTCG tax</p>
                </div>
                
                <div className="bg-white rounded-lg border border-mild-green-200 p-4 text-left">
                  <p className="text-sm text-gray-500 mb-1">With Harvesting</p>
                  <div className="flex items-center">
                    <div className="bg-mild-green-50 p-1 rounded mr-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-bold text-xl text-primary">₹3,00,000</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">0% tax with harvesting</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-mild-green-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Total Savings:</span>
                  <span className="text-xl font-bold text-primary">₹22,000</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '7.5%' }}></div>
                </div>
                <p className="text-xs text-right mt-1 text-gray-500">7.5% of your gains saved</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-16 animate-bounce-subtle z-10">
        <ArrowDown className="h-8 w-8 text-gray-500 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
