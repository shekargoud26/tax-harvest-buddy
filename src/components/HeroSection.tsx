
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onSaveNowClick: () => void;
}

const HeroSection = ({ onSaveNowClick }: HeroSectionProps) => {
  return (
    <section className="scroll-section bg-gradient-to-b from-white to-mild-green-50 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Save upto <span className="text-primary">1L in taxes</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
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
        <div className="mt-16 animate-bounce-subtle">
          <ArrowDown className="h-8 w-8 text-gray-500 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
