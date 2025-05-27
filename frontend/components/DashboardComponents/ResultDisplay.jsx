import { AlertTriangle, CheckCircle, ArrowLeft } from "lucide-react";

const ResultDisplay = ({ result, onReset }) => {
  return (
    <div className="p-6 animate-fadeIn">
      <div className={`rounded-lg p-6 ${result ? "bg-red-50" : "bg-green-50"}`}>
        <div className="flex flex-col items-center text-center">
          {result ? (
            <>
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <AlertTriangle size={48} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                Higher Risk of Diabetes Detected
              </h3>
              <p className="text-red-600 mb-4">
                Based on the information provided, our model predicts a higher
                risk of diabetes.
              </p>
              <div className="bg-white rounded-lg p-4 border border-red-200 text-left w-full mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Next Steps:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Consult with a healthcare professional for a proper
                    diagnosis
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Discuss appropriate testing options with your doctor
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Consider lifestyle modifications like diet and exercise
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Regular monitoring of blood glucose levels
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Lower Risk of Diabetes Detected
              </h3>
              <p className="text-green-600 mb-4">
                Based on the information provided, our model predicts a lower
                risk of diabetes.
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-200 text-left w-full mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Healthy Habits to Maintain:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Continue regular check-ups with your healthcare provider
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Maintain a balanced diet rich in vegetables and fruits
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Stay physically active with regular exercise
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Monitor your weight and maintain a healthy BMI
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onReset}
            className="flex items-center cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            <ArrowLeft size={16} className="mr-2" />
            Start New Assessment
          </button>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          <strong>Disclaimer:</strong> This prediction is based on a statistical
          model and should not be considered a medical diagnosis. Always consult
          with healthcare professionals for proper medical advice.
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;
