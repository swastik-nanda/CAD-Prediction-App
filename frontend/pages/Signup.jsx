import { useState } from "react";
import SuccessSignupUI from "../components/SignupComponents/SuccessSignupUI";
import SignupHeader from "../components/SignupComponents/SignupHeader";
import SignupFormStepDetail from "../components/SignupComponents/SignupFormStepDetail";
import SignupForm from "../components/SignupComponents/SignupForm";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext"; // <-- 1. Import useAuth

export default function SignupPage() {
  const { login } = useAuth(); // <-- 2. Get login from context

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSignup = async () => {
    const { fullName, email, password } = formData;
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Signup failed: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      console.log("Signup successful:", data);

      // ✅ Use AuthContext's login to update context and localStorage
      // Adjust this line if your backend returns a different structure
      login(data.result, data.token);

      setSubmitted(true);
    } catch (error) {
      console.error("Error during signup:", error.message);
      // Optionally show user-friendly error message
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      return;
    }

    setLoading(true);

    try {
      await handleSignup();
      // No need to setSubmitted(true) here, it's done inside handleSignup
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };
  const passwordStrength = () => {
    const { password } = formData;
    if (!password) return 0;

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
  };

  const getPasswordStrengthText = () => {
    const strength = passwordStrength();
    if (strength === 0) return "";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    const strength = passwordStrength();
    if (strength === 0) return "bg-gray-200";
    if (strength === 1) return "bg-red-500";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-blue-500";
    return "bg-green-500";
  };

  if (submitted) {
    return <SuccessSignupUI formData={formData} setSubmitted={setSubmitted} />;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-600 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
          {/* Header */}
          <SignupHeader />

          {/* Form */}
          <div className="p-8">
            <SignupFormStepDetail step={step} />
            <SignupForm
              handleChange={handleChange}
              loading={loading}
              showPassword={showPassword}
              passwordStrength={passwordStrength}
              togglePasswordVisibility={togglePasswordVisibility}
              getPasswordStrengthColor={getPasswordStrengthColor}
              getPasswordStrengthText={getPasswordStrengthText}
              formData={formData}
              step={step}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
