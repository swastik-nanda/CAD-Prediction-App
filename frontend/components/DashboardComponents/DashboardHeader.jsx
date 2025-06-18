import { useNavigate } from "react-router-dom";
import { Activity, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { logout } from "../../../backend/utils/authLogout";
function DashboardHeader() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // or sessionStorage
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Activity size={28} className="text-white" />
          <h1 className="text-xl md:text-2xl font-bold">DiabetesPredict</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline text-sm md:text-base font-medium">
            Early Detection for Better Health
          </span>
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="flex cursor-pointer hover:scale-105 transition-all duration-300 items-center space-x-1 bg-white text-blue-700 px-3 py-1 rounded-md hover:bg-blue-100"
            >
              <LogOut size={16} />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
