import { Link } from "react-router-dom";
import { FaTachometerAlt, FaPlusCircle, FaClipboardList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-52 bg-gray-200 p-4 space-y-4">
      <h1 className="text-xl font-bold italic text-teal-600 mb-4">Helpdesk</h1>
      <nav className="space-y-2">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-teal-600">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/new-ticket" className="flex items-center gap-2 hover:text-teal-600">
          <FaPlusCircle /> New Ticket
        </Link>
        <Link to="/my-ticket" className="flex items-center gap-2 hover:text-teal-600">
          <FaClipboardList /> My Ticket
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
