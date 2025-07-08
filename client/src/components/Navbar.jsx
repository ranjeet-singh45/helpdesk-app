import { useState } from "react";
import {
  FaUserCircle,
  FaBell,
  FaSignOutAlt,
  FaCog,
  FaBars,
} from "react-icons/fa";
import UserProfileModal from "./UserProfileModal";

const Navbar = ({ onToggleSidebar }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>
      <div className="bg-teal-400 flex justify-between items-center px-6 py-2 shadow-md h-10">
        {/* Toggle button on the left */}
        <button
          onClick={onToggleSidebar}
          className="text-white text-xl hover:bg-teal-500 rounded-md"
        >
          <FaBars />
        </button>

        {/* Right-side icons */}
        <div className="flex items-center gap-4 text-white text-lg">
          <FaCog className="cursor-pointer" />
          <FaBell className="cursor-pointer" />
          <FaUserCircle
            className="cursor-pointer"
            onClick={() => setShowProfileModal(true)}
          />
          <FaSignOutAlt className="cursor-pointer" />
        </div>
      </div>

      {showProfileModal && (
        <UserProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </>
  );
};

export default Navbar;
