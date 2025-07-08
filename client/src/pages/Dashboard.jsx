import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-1">
        <main className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-2xl text-center mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            <StatCard title="Total Tickets" value="12" color="bg-blue-500" />
            <StatCard title="Total Solved" value="8" color="bg-green-500" />
            <StatCard title="Total Awaiting Approval" value="2" color="bg-red-400" />
            <StatCard title="Total In Progress" value="2" color="bg-yellow-300" />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className={`p-4 w-40 rounded-lg shadow-lg text-center text-white ${color}`}>
    <div className="text-sm font-semibold mb-2">{title}</div>
    <div className="text-3xl font-bold">{value}</div>
  </div>
);

export default Dashboard;
