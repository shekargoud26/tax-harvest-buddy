
import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import ResultsTable from "@/components/ResultsTable";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LTCGData } from "@/types/ltcg";

const Index = () => {
  const [ltcgData, setLtcgData] = useState<LTCGData | null>(null);
  const uploadSectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToUploadSection = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleDataReceived = (data: LTCGData) => {
    setLtcgData(data);
  };
  
  return (
    <div className="scroll-container">
      <Toaster />
      
      {/* Hero Section */}
      <HeroSection onSaveNowClick={scrollToUploadSection} />
      
      {/* Upload Section */}
      <div ref={uploadSectionRef}>
        <UploadSection onDataReceived={handleDataReceived} />
      </div>
      
      {/* Results Table */}
      {ltcgData && <ResultsTable data={ltcgData} />}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
