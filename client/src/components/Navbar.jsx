import { FaUserCircle, FaBell, FaSignOutAlt, FaCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-teal-400 flex justify-between items-center px-6 py-2">
      <div />
      <div className="flex items-center gap-4 text-white text-lg">
        <FaCog />
        <FaBell />
        <FaUserCircle />
        <FaSignOutAlt />
      </div>
    </div>
  );
};

export default Navbar;
