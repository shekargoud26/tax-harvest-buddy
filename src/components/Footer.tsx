import { Github, Bitcoin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mild-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">LTCG Harvester</h3>
            <p className="text-mild-green-100">
              Maximize your tax savings with our intelligent LTCG harvesting tool.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-mild-green-100">Developed by Lovable</p>
            <p className="text-mild-green-100">Email: info@ltcgharvester.com</p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://github.com/username/ltcg-harvester" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-end text-mild-green-100 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub Repository
              </a>
              <div className="inline-flex items-center justify-center md:justify-end text-mild-green-100">
                <Bitcoin className="h-5 w-5 mr-2" />
                <span className="text-xs md:text-sm break-all">
                  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-mild-green-500 pt-8 text-center">
          <p className="text-sm text-mild-green-100 flex items-center justify-center">
            &copy; {new Date().getFullYear()} LTCG Harvester. All rights reserved.
          </p>
          <p className="text-sm text-mild-green-100 mt-2 flex items-center justify-center">
            Made with <Heart className="text-red-500 mx-1 h-4 w-4 fill-red-500" /> with AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
