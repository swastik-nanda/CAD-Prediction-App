import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import DashboardHeader from "../components/DashboardComponents/DashboardHeader";

export default function LoginPage() {
  const navigate = useNavigate(); // <-- ADD this hook
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token and user to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.result));

        setLoading(false);
        navigate("/dashboard");
      } else {
        setLoading(false);
        alert(data.message || "Login failed");
      }
    } catch (error) {
      setLoading(false);
      alert("Network error, please try again.");
    }
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-600 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-center mt-2">
            You are now logged in as {formData.email}
          </p>
          <button
            className="mt-6 w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <DashboardHeader></DashboardHeader>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-600 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="mt-2 opacity-80">Access your account</p>
          </div>

          <form className="p-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 py-3"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 pr-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 py-3"
                  placeholder="Enter your password"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-indigo-700"
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
