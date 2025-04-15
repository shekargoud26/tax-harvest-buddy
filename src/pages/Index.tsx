
import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import ResultsTable from "@/components/ResultsTable";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LTCGData } from "@/types/ltcg";

const Index = () => {
  const [ltcgData, setLtcgData] = useState<LTCGData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const uploadSectionRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const scrollToUploadSection = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleDataProcessing = () => {
    setIsLoading(true);
    scrollToResults();
  };

  const handleDataReceived = (data: LTCGData) => {
    setLtcgData(data);
    setIsLoading(false);
  };
  
  return (
    <div>
      <Toaster />
      
      {/* Hero Section */}
      <HeroSection onSaveNowClick={scrollToUploadSection} />
      
      {/* Upload Section */}
      <div ref={uploadSectionRef} className="scroll-section">
        <UploadSection 
          onDataProcessing={handleDataProcessing} 
          onDataReceived={handleDataReceived} 
        />
      </div>
      
      {/* Results Table */}
      <div ref={resultsRef}>
        {(isLoading || ltcgData) && <ResultsTable data={ltcgData} isLoading={isLoading} />}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
