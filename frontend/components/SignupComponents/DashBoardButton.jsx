import { useNavigate } from "react-router-dom";

function DashBoardButton({ setSubmitted }) {
  const navigate = useNavigate(); // <-- Move hook inside the component

  return (
    <button
      className="mt-6 w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
      onClick={() => {
        setSubmitted(false);
        navigate("/dashboard");
      }}
    >
      Go to Dashboard
    </button>
  );
}

export default DashBoardButton;
