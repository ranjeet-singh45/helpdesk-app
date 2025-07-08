import { useState } from "react";
import { FaUserCircle, FaStar, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const UserProfileModal = ({ onClose }) => {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        email: "",
        realName: "",
        accessLevel: "",
        projectAccessLevel: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-40" onClick={onClose} />
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="relative bg-white p-0 rounded shadow-md w-[95%] max-w-4xl">
                    {/* Close Button */}
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        onClick={onClose}
                    >
                        <FaTimes size={18} />
                    </button>

                    {/* Header */}
                    <div className="border-b px-6 pt-4 pb-2">
                        <h2 className="text-2xl text-gray-700">User Profile</h2>
                    </div>

                    {/* Toggle Button */}
                    <div className="px-6 mt-2">
                        <button
                            className={`px-4 py-1 rounded-t text-sm text-white bg-teal-400 ${editMode ? "" : "font-bold"
                                }`}
                            onClick={() => setEditMode(!editMode)}
                        >
                            {editMode ? "Back to Profile" : "Edit Account"}
                        </button>
                    </div>

                    <div className="p-6 bg-[#84dfdb33]">
                        <AnimatePresence mode="wait">
                            {editMode ? (
                                <motion.div 
                                    key="edit"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* === EDIT MODE === */}
                                    <div className="border rounded shadow overflow-hidden">
                                        <div className="bg-teal-400 text-white px-4 py-2 font-semibold text-sm">
                                            Edit Account
                                        </div>
                                        <div className="text-sm">
                                            {[
                                                "Username",
                                                "Current Password",
                                                "New Password",
                                                "Confirm Password",
                                                "Email",
                                                "Real Name",
                                                "Access Level",
                                                "Project Access Level",
                                            ].map((label, i) => {
                                                const name = label.toLowerCase().replace(/ /g, "");
                                                const isPassword = label.toLowerCase().includes("password");
                                                return (
                                                    <div key={i} className="flex border-t border-gray-300">
                                                        <label className="w-1/3 bg-gray-400 text-white px-4 py-2">
                                                            {label}
                                                        </label>
                                                        <input
                                                            type={isPassword ? "password" : "text"}
                                                            name={name}
                                                            value={formData[name]}
                                                            onChange={handleChange}
                                                            className="w-2/3 px-4 py-2 bg-white border-l text-gray-800"
                                                        />
                                                    </div>
                                                );
                                            })}
                                            <div className="flex border-t border-gray-300">
                                                <div className="w-1/3 bg-gray-400"></div>
                                                <div className="w-2/3 px-4 py-3">
                                                    <button className="bg-teal-500 text-white px-4 py-1 rounded hover:bg-teal-600">
                                                        Update User
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="view"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* === VIEW MODE === */}
                                    <div className="flex justify-between gap-6">
                                        {/* User Card */}
                                        <div className="bg-white shadow rounded p-4 w-1/2 text-center">
                                            <FaUserCircle className="text-6xl text-gray-500 mx-auto mb-4" />
                                            <div className="text-sm space-y-1">
                                                <p><strong>Username</strong></p>
                                                <p>Contact Number</p>
                                                <p>Email</p>
                                                <p>Department</p>
                                            </div>
                                        </div>

                                        {/* Feedback */}
                                        <div className="bg-white shadow rounded p-4 w-1/2 text-center space-y-4">
                                            <h3 className="font-semibold text-sm">Give Your Feedback</h3>
                                            <textarea
                                                rows="3"
                                                className="w-full border rounded p-2 text-sm"
                                                placeholder="[Lorem Ipsum]"
                                            />
                                            <div className="flex justify-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="text-gray-400 text-lg hover:text-yellow-400" />
                                                ))}
                                            </div>
                                            <button className="bg-teal-500 text-white px-4 py-1 rounded hover:bg-teal-600">
                                                Submit Feedback
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileModal;
