import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"; // ✅ import it

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex h-screen">
      {showSidebar && <Sidebar />}

      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar with toggle */}
        <Navbar onToggleSidebar={() => setShowSidebar((prev) => !prev)} />

        {/* Main content */}
        <div className="p-6 overflow-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
