import { Activity, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // adjust the path as needed

function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              onClick={() => navigate("/")}
              className="flex-shrink-0 flex items-center cursor-pointer"
            >
              <Activity className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                DiabetesPredict
              </span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>

            {user ? (
              <>
                <span className="ml-4 text-gray-700 font-medium">
                  Hi {user.fullName}!
                </span>
                <div
                  className="cursor-pointer ml-2 px-4 py-2 border border-red-500 hover:scale-105 transition-all duration-300 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer ml-4 px-4 py-2 border border-transparent hover:scale-105 transition-all duration-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
                <div
                  className="cursor-pointer ml-2 px-4 py-2 border hover:scale-105 transition-all duration-300 border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>

            {user ? (
              <>
                <span className="block px-3 py-2 text-gray-700 font-medium">
                  Hi {user.name || user.username || user.email}
                </span>
                <div
                  className="cursor-pointer mt-1 px-3 py-2 border border-red-500 w-[150px] mb-2.5 rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer mt-1 px-3 py-2 border border-transparent w-[150px] mb-2.5 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Login
                </div>
                <div
                  className="cursor-pointer mt-1 px-3 py-2 border border-indigo-600 w-[150px] mb-2.5 rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
