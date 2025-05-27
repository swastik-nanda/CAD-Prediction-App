function SignupFormStepDetail({ step }) {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
        >
          1
        </div>
        <span className="ml-2 text-sm font-medium text-gray-600">Details</span>
      </div>
      <div className="w-16 h-[2px] bg-gray-200 self-center mx-2" />
      <div className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
        >
          2
        </div>
        <span className="ml-2 text-sm font-medium text-gray-600">Security</span>
      </div>
    </div>
  );
}

export default SignupFormStepDetail;
