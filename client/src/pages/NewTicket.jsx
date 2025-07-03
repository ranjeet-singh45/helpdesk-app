import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPaperclip } from "react-icons/fa";

const NewTicket = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-2xl text-center mb-6">Create New Ticket</h2>
          <form className="space-y-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Ticket No." />
              <InputField label="Date" type="date" />
              <InputField label="Name" />
              <InputField label="Department" />
            </div>

            <InputField label="Subject" full />

            <div className="grid grid-cols-2 gap-4">
              <InputField label="Category" />
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Description:</label>
                <div className="relative">
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 rounded p-2 pr-10"
                    placeholder="Enter description"
                  ></textarea>
                  <FaPaperclip className="absolute bottom-2 right-2 text-teal-500 cursor-pointer" />
                </div>
              </div>
              <InputField label="Type" />
              <InputField label="Priority" />
            </div>

            <div className="my-4">
              <div className="border border-gray-400 rounded p-4 w-fit">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>I'm not a robot</span>
                  {/* Replace with actual reCAPTCHA widget in production */}
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const InputField = ({ label, type = "text", full = false }) => (
  <div className={`flex flex-col ${full ? "col-span-2" : ""}`}>
    <label className="mb-1 text-sm font-medium">{label}:</label>
    <input
      type={type}
      className="border border-gray-300 rounded p-2"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

export default NewTicket;
