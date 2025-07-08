import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaStar, FaSearch } from "react-icons/fa";

const ticketData = [
  { id: "1234", subject: "Login issue", status: "In Progress", team: "Tech support", date: "13/08/21", rating: 0 },
  { id: "1124", subject: "New ticket issue", status: "On hold", team: "Operation Team", date: "14/08/21", rating: 0 },
  { id: "1224", subject: "New request", status: "Closed", team: "Tech support", date: "13/08/21", rating: 4 },
  { id: "1244", subject: "Ticket submission", status: "In Progress", team: "Operation Team", date: "14/08/21", rating: 0 },
  { id: "1114", subject: "Login issue", status: "In Progress", team: "Tech support", date: "3/08/21", rating: 0 },
];

const getStatusColor = (status) => {
  switch (status) {
    case "In Progress": return "bg-green-500";
    case "On hold": return "bg-blue-500";
    case "Closed": return "bg-gray-700";
    default: return "bg-gray-400";
  }
};

const MyTicket = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-1">
        <main className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-2xl text-center mb-6">List of Ticket</h2>

          {/* Search and entries */}
          <div className="flex items-center mb-4 space-x-4">
            <div className="relative">
              <input type="text" placeholder="Find ticket" className="border rounded p-2 pl-10" />
              <FaSearch className="absolute top-3 left-3 text-gray-500" />
            </div>
            <label className="text-sm">Show:</label>
            <select className="border rounded p-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span className="text-sm">Entries</span>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Ticket No.</th>
                  <th className="p-2">Subject</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Support by</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Rate</th>
                </tr>
              </thead>
              <tbody>
                {ticketData.map((ticket, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td
                      className="p-2 text-blue-600 underline cursor-pointer"
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      {ticket.id}
                    </td>
                    <td className="p-2">{ticket.subject}</td>
                    <td className="p-2">
                      <span className={`text-white px-2 py-1 text-sm rounded ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-2">{ticket.team}</td>
                    <td className="p-2">{ticket.date}</td>
                    <td className="p-2 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${i < ticket.rating ? "text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Info */}
          <div className="text-sm mt-4 flex justify-between">
            <span>Showing 1 to 5 of 5 entries</span>
            <span>{`≪ 1 ≫`}</span>
          </div>
        </main>

        <Footer />

        {/* Ticket Detail Modal */}
        {selectedTicket && (
          <>
            {/* Transparent overlay */}
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40" />

            {/* Modal content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">
                <h2 className="text-xl font-bold text-center mb-4">Ticket Details</h2>

                <div className="text-sm space-y-1">
                  <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
                  <p><strong>Date:</strong> {selectedTicket.date}</p>
                  <p><strong>Name:</strong> John Doe</p>
                  <p><strong>Dept:</strong> Tech</p>
                  <p><strong>Title:</strong> {selectedTicket.subject}</p>
                  <p><strong>Description:</strong> Ticket needs further clarification.</p>
                  <p><strong>Category:</strong> General</p>
                  <p><strong>Type:</strong> Query</p>
                  <p><strong>Priority:</strong> Medium</p>
                  <p><strong>Status:</strong> {selectedTicket.status}</p>
                  <p><strong>Attachment:</strong> None</p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setSelectedTicket(null)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-1 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyTicket;
