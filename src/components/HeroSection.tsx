
import { ArrowDown, TrendingUp, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        
        {/* Graphics depicting money saving */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-mild-green-200 rounded-full p-4 animate-bounce-subtle">
              <PiggyBank className="h-12 w-12 text-primary" />
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 border border-mild-green-100">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Tax Savings</h3>
                <p className="text-gray-600">Optimize your investments</p>
              </div>
              <div className="flex items-center justify-center gap-4 p-4 bg-mild-green-50 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Without Harvesting</p>
                  <p className="font-bold text-xl text-destructive">₹25,000</p>
                </div>
                <div className="text-4xl text-gray-400">→</div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">With Harvesting</p>
                  <p className="font-bold text-xl text-primary">₹5,000</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center text-primary">
                <TrendingUp className="h-6 w-6 mr-2" />
                <span className="font-semibold">Save ₹20,000 in taxes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 animate-bounce-subtle z-10">
        <ArrowDown className="h-8 w-8 text-gray-500 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
