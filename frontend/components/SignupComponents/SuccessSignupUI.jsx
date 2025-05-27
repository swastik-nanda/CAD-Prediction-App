import { CheckCircle } from "lucide-react";
import DashBoardButton from "./DashBoardButton";

function SuccessSignupUI({ formData, setSubmitted }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-600 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 transform transition-all">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Account Created!</h2>
          <p className="text-gray-600 text-center">
            Thank you for signing up, {formData.fullName}. We've sent a
            confirmation email to {formData.email}.
          </p>
          <DashBoardButton setSubmitted={setSubmitted}></DashBoardButton>
        </div>
      </div>
    </div>
  );
}

export default SuccessSignupUI;
