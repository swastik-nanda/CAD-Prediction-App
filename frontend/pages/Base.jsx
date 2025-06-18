import { useState } from "react";
import { ArrowRight, Activity, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <Header></Header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0.1, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Early Detection,</span>
                  <span className="block text-indigo-600">Better Health</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  DiabetesPredict uses advanced AI to help predict your risk of
                  diabetes. Get personalized insights and recommendations based
                  on your health data.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow w-full max-sm:w-[200px] sm:mb-2.5 sm:w-auto hover:scale-105 transition-all duration-300">
                      <div
                        onClick={() => navigate("/dashboard")}
                        className="lg:w-full max-sm:w-[200px] cursor-pointer flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 max-sm:mb-4  w-full max-sm:w-[200px] sm:w-auto hover:scale-105 transition-all duration-300">
                      <a
                        href="#"
                        className="lg:w-full max-sm:w-[200px] flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition"
                        onClick={() => setShowFeatures(!showFeatures)}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-indigo-100 flex items-center justify-center">
            <img
              src="/diabetes_base.webp"
              alt="Health monitoring"
              className="rounded-lg shadow-lg max-w-md mx-auto"
            />
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`py-12 bg-white ${showFeatures ? "block" : "block"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How DiabetesPredict Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform combines medical expertise with cutting-edge
              technology to provide accurate diabetes risk assessment.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Accurate Prediction
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Our algorithm has been trained on extensive medical data to
                  provide highly accurate diabetes risk predictions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Privacy Focused
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Your health data is encrypted and securely stored. We never
                  share your information with third parties.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Expert Support
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Our team of healthcare professionals is available to help
                  interpret your results and provide guidance.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Personalized Insights
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Receive tailored recommendations based on your health profile
                  and risk factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Process
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Easy to use, comprehensive health assessment in just a few steps.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  Create an Account
                </h3>
                <p className="text-base text-gray-500">
                  Sign up to access our diabetes prediction tool and securely
                  store your health information.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  Input Your Data
                </h3>
                <p className="text-base text-gray-500">
                  Enter key health metrics like age, BMI, blood pressure, and
                  family history of diabetes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  Get Your Assessment
                </h3>
                <p className="text-base text-gray-500">
                  Receive your personalized diabetes risk score with detailed
                  insights and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials/Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Results
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making a Difference
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
            <div className="bg-indigo-50 rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <p className="text-4xl font-bold text-indigo-600">85%</p>
              <p className="mt-2 text-gray-600">Accuracy Rate</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <p className="text-4xl font-bold text-indigo-600">10,000+</p>
              <p className="mt-2 text-gray-600">Users Helped</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <p className="text-4xl font-bold text-indigo-600">85%</p>
              <p className="mt-2 text-gray-600">Early Detection Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-lg:w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to take control of your health?</span>
            <span className="block text-indigo-200">
              Start your diabetes risk assessment today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <div
                onClick={() => navigate("/signup")}
                className="inline hover:scale-105 transition-all duration-300 cursor-pointer-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 cursor-pointer"
              >
                Sign Up
              </div>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center  hover:scale-105 transition-all duration-300 cursor-pointer justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Diabetes Risk Assessment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Health Monitoring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Preventive Care
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 DiabetesPredict. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
