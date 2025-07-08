import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaPlusCircle, FaClipboardList } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer ${
      location.pathname === path ? "bg-gray-400 text-white" : "hover:text-teal-600"
    }`;

  return (
    <div className="w-52 bg-gray-200 p-4 space-y-4">
      <h1 className="text-xl font-bold italic text-teal-600 mb-4">Helpdesk</h1>
      <nav className="space-y-2">
        <Link to="/dashboard" className={linkClasses("/dashboard")}>
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/new-ticket" className={linkClasses("/new-ticket")}>
          <FaPlusCircle /> New Ticket
        </Link>
        <Link to="/my-ticket" className={linkClasses("/my-ticket")}>
          <FaClipboardList /> My Ticket
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
