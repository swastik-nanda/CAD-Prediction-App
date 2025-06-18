import DashboardFooter from "../components/DashboardComponents/DashboardFooter";
import DiabetesForm from "../components/DashboardComponents/DiabetesForm";
import Header from "../components/Header";

function DashBoard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header></Header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <DiabetesForm />
      </main>
      <DashboardFooter />
    </div>
  );
}

export default DashBoard;
