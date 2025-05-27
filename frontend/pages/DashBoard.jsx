import DashboardFooter from "../components/DashboardComponents/DashboardFooter";
import DashboardHeader from "../components/DashboardComponents/DashboardHeader";
import DiabetesForm from "../components/DashboardComponents/DiabetesForm";

function DashBoard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <DiabetesForm />
      </main>
      <DashboardFooter />
    </div>
  );
}

export default DashBoard;
