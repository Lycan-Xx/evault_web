import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import remita from "../assets/remitaBanner.png";

const Remita = ({ onBack }) => {
  const [rrr, setRrr] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!rrr.trim()) errors.rrr = "RRR number is required.";
    if (!phone.trim() || !/^\d+$/.test(phone)) errors.phone = "Valid phone number is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      errors.email = "Valid email address is required.";
    return errors;
  };

  const handleProceed = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join("\n"));
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDialogOpen(true);
    }, 3000);
  };

  const handleBackClick = () => {
    onBack();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
	{/* Back Button */}
		<button
		  className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 mb-4"
		  aria-label="Back to Dashboard"
		  onClick={handleBackClick}
		>
		  <ArrowLeft className="w-5 h-5" />
		  <span>Back to Dashboard</span>
		</button>

		{/* Banner */}
		<div
		  className="w-full h-64 bg-cover bg-center rounded-lg mb-6"
		  style={{ backgroundImage: `url(${remita})` }}
		></div>

		{/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Remita Payment</h1>
        <p className="text-gray-600 mb-6 text-center">
          Pay securely through Remita. Please provide your RRR number, phone number, and email to
          proceed.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">RRR Number</label>
            <input
              type="text"
              value={rrr}
              onChange={(e) => setRrr(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your RRR number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <button
            onClick={handleProceed}
            disabled={isLoading}
            className={`w-full px-6 py-3 mt-4 rounded-lg text-white font-semibold ${
              isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            } transition duration-300`}
          >
            {isLoading ? "Loading..." : "Proceed"}
          </button>
        </div>
      </div>

      {/* Popup Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Redirecting...</h2>
            <p className="text-gray-700 mb-6 text-center">Redirecting to the Remita portal...</p>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Remita;
