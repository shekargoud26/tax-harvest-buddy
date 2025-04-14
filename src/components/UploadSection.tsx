
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { useToast } from "@/hooks/use-toast";
import { LTCGData } from "@/types/ltcg";

interface UploadSectionProps {
  onDataReceived: (data: LTCGData) => void;
}

const UploadSection = ({ onDataReceived }: UploadSectionProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast("Please select a file to upload");
      return;
    }
    
    setIsUploading(true);
    
    try {
      // In a real implementation, this would be an actual API call
      // For now, we'll simulate the API response with a mock delay
      setTimeout(() => {
        // Mock API response
        const mockResponse = {
          "status": "success",
          "data": {
            "120197": {
              "scheme_name": "ICICI Prudential Liquid Fund - Direct Plan - Growth",
              "total_purchased_ltcg_eligible": 0.338,
              "total_sold_all_time": 0.336,
              "remaining_ltcg_eligible": 0.002,
              "latest_nav": 385.1518,
              "inr_value": 0.77,
              "eligible_cost": 100,
              "ltcg": -99.23
            },
            "120594": {
              "scheme_name": "ICICI Prudential Technology Fund - Direct Plan - Growth",
              "total_purchased_ltcg_eligible": 126.159,
              "total_sold_all_time": 0,
              "remaining_ltcg_eligible": 126.159,
              "latest_nav": 193.29,
              "inr_value": 24385.27,
              "eligible_cost": 20498.98,
              "ltcg": 3886.29
            },
            "120716": {
              "scheme_name": "UTI Nifty 50 Index Fund - Direct Plan",
              "total_purchased_ltcg_eligible": 1180.542,
              "total_sold_all_time": 369.18,
              "remaining_ltcg_eligible": 811.362,
              "latest_nav": 158.115,
              "inr_value": 128288.5,
              "eligible_cost": 146992.75,
              "ltcg": -18704.25
            },
            "122639": {
              "scheme_name": "Parag Parikh Flexi Cap Fund - Direct Plan",
              "total_purchased_ltcg_eligible": 1726.834,
              "total_sold_all_time": 0,
              "remaining_ltcg_eligible": 1726.834,
              "latest_nav": 84.3987,
              "inr_value": 145742.54,
              "eligible_cost": 93495.34,
              "ltcg": 52247.2
            },
            "135781": {
              "scheme_name": "Mirae Asset ELSS Tax Saver Fund - Direct Plan",
              "total_purchased_ltcg_eligible": 2689.426,
              "total_sold_all_time": 0,
              "remaining_ltcg_eligible": 2689.426,
              "latest_nav": 48.573,
              "inr_value": 130633.49,
              "eligible_cost": 90495.48,
              "ltcg": 40138.01
            },
            "147622": {
              "scheme_name": "Motilal Oswal Nifty Midcap 150 Index Fund - Direct Plan Growth",
              "total_purchased_ltcg_eligible": 3495.741,
              "total_sold_all_time": 0,
              "remaining_ltcg_eligible": 3495.741,
              "latest_nav": 33.5567,
              "inr_value": 117305.53,
              "eligible_cost": 81995.92,
              "ltcg": 35309.61
            }
          }
        };
        
        onDataReceived(mockResponse.data);
        toast("File processed successfully!");
        
        setIsUploading(false);
      }, 2000);
    } catch (error) {
      console.error("Upload error:", error);
      toast("An error occurred while processing your file");
      setIsUploading(false);
    }
  };
  
  return (
    <section className="scroll-section bg-gradient-to-b from-mild-green-50 to-white p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Upload your Consolidated Account Statement (CAS) and we'll analyze your portfolio to identify 
          tax-saving opportunities through LTCG harvesting.
        </p>
        
        <div className="mb-10 text-center">
          <a 
            href="https://www.camsonline.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Fetch CAS from CAMS
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer bg-mild-green-50 hover:bg-mild-green-100 transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <p className="text-lg font-medium mb-2">
                {file ? file.name : "Drop your CAS file here"}
              </p>
              <p className="text-sm text-gray-500">
                {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "or click to browse"}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Supports password-protected PDF files
              </p>
            </div>
          </div>

          <div>
            <Label htmlFor="password">PDF Password (if any)</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password if your PDF is protected"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="text-center">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-2" 
              disabled={isUploading}
            >
              {isUploading ? "Processing..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadSection;
