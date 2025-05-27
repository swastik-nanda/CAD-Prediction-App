import { Activity, AlertCircle, BookOpen, Heart } from "lucide-react";

function InfoSection() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-teal-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Understanding Diabetes</h2>
        <p className="text-teal-100 text-sm mt-1">
          Key information about diabetes risk factors and prevention
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-5">
            <div className="flex items-center mb-3">
              <BookOpen className="text-blue-600 mr-2" size={20} />
              <h3 className="font-semibold text-blue-800">What is Diabetes?</h3>
            </div>
            <p className="text-gray-700">
              Diabetes is a chronic health condition that affects how your body
              turns food into energy. If you have diabetes, your body either
              doesn't make enough insulin or can't use the insulin it makes as
              well as it should.
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-5">
            <div className="flex items-center mb-3">
              <AlertCircle className="text-red-600 mr-2" size={20} />
              <h3 className="font-semibold text-red-800">
                Common Risk Factors
              </h3>
            </div>
            <ul className="text-gray-700 space-y-1">
              <li>• Being overweight or obese</li>
              <li>• Physical inactivity</li>
              <li>• Family history of diabetes</li>
              <li>• Age (45 years or older)</li>
              <li>• High blood pressure</li>
              <li>• Abnormal cholesterol levels</li>
              <li>• History of gestational diabetes</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <div className="flex items-center mb-3">
              <Heart className="text-green-600 mr-2" size={20} />
              <h3 className="font-semibold text-green-800">Prevention Tips</h3>
            </div>
            <ul className="text-gray-700 space-y-1">
              <li>• Maintain a healthy weight</li>
              <li>• Exercise regularly (at least 30 minutes, 5 days a week)</li>
              <li>
                • Eat a balanced diet rich in fruits, vegetables, and whole
                grains
              </li>
              <li>• Limit processed foods and added sugars</li>
              <li>• Quit smoking</li>
              <li>• Moderate alcohol consumption</li>
              <li>• Regular health check-ups</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-5">
            <div className="flex items-center mb-3">
              <Activity className="text-purple-600 mr-2" size={20} />
              <h3 className="font-semibold text-purple-800">Warning Signs</h3>
            </div>
            <ul className="text-gray-700 space-y-1">
              <li>• Frequent urination</li>
              <li>• Increased thirst</li>
              <li>• Unexplained weight loss</li>
              <li>• Blurred vision</li>
              <li>• Extreme fatigue</li>
              <li>• Slow-healing sores</li>
              <li>• Frequent infections</li>
              <li>• Tingling or numbness in hands or feet</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Important Note
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This prediction tool is designed for educational purposes only
                  and should not replace professional medical advice. If you're
                  concerned about your diabetes risk, please consult with a
                  healthcare provider for proper screening and diagnosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
