import { Heart } from "lucide-react";

function DashboardFooter() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} DiabetesPredict. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm mr-2">Created with</p>
            <Heart size={16} className="text-red-500 mr-2" />
            <p className="text-sm">for better health outcomes</p>
          </div>
        </div>
        <div className="mt-4 text-xs text-center md:text-left">
          <p>
            Disclaimer: This tool is for educational purposes only and should
            not replace professional medical advice. Always consult with
            healthcare professionals for diagnosis and treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default DashboardFooter;
