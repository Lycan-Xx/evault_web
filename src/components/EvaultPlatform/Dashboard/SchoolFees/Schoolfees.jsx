import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";
import SchoolSearch from "./SchoolSearch"; // Import the SchoolSearch component

const SchoolFees = ({ onBack }) => {
  const [selectedSchool, setSelectedSchool] = useState(null); // Holds the selected school object
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  // Reset form and handle back navigation
  const handleBackClick = () => {
    if (selectedSchool) {
      setSelectedSchool(null); // Deselect the school
    } else {
      onBack(); // Navigate back to the Dashboard
    }
    // Reset form data
    setStudentName("");
    setEmail("");
    setText("");
    setAmount("");
    setClassLevel("");
  };

  const handleProceed = () => {
    if (!classLevel || !studentName || !amount) return;
    setIsPaymentDialogOpen(true); // Open payment popup
  };

  return (
    <div className="max-w-6xl mx-auto p-6">


      {/* Back Button */}
      <button
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 mb-4"
        aria-label="Go back"
        onClick={handleBackClick}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>{selectedSchool ? "Back" : "Go to Dashboard"}</span>
      </button>

      <div className="grid grid-cols-1 gap-8">
        {/* School Search Component */}
        {!selectedSchool && (
          <SchoolSearch onSelectSchool={(school) => setSelectedSchool(school)} />
        )}

        {/* Selected School Page */}
        {selectedSchool && (
          <div>
            {/* Top Banner Section */}
            <div
            className="w-full h-56 sm:h-64 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://picsum.photos/1200/400?random=${selectedSchool.name}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl text-white font-bold">{selectedSchool.name}</h2>
            </div>

            {/* Profile Picture Positioned to the Right */}
            <div className="absolute -bottom-12 right-4 sm:right-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-4 border-white overflow-hidden shadow-lg">
                <img
                  src={`https://picsum.photos/100?random=${selectedSchool.name}`}
                  alt={`${selectedSchool.name} Owner`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

			 

			{/* Description */}
			<div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800">About {selectedSchool.name}</h3>
          <p className="mt-2 text-gray-600">{selectedSchool.description}</p>
        </div>

            {/* Payment Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 min-h-[500px]">
              {/* Left Column: Image Section */}
              <div
                className="rounded-lg bg-cover bg-center text-white flex flex-col items-center justify-center h-72 sm:h-96 md:h-full w-13"
                style={{
                  backgroundImage: `url('https://picsum.photos/600/800?random=${selectedSchool.name}')`,
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-black bg-opacity-50 p-1 md:p-2 rounded-md">
                  {selectedSchool.name}
                </h3>

				
              </div>

			  

              {/* Payment Form Section */}
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-lg sm:text-xl font-bold">Enter Payment Details</h3>

                {/* Class Level Selection */}
                <label className="block text-sm font-medium">Select Class</label>
                <select
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                  className="border p-2 rounded w-full"
                >
                  <option value="" disabled>
                    Select class
                  </option>
                  {["Class 1", "Class 2", "Class 3", "Class 4"].map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </select>

                {/* Student Name Input */}
                <label className="block text-sm font-medium">Student's Name</label>
                <input
                  type="text"
                  placeholder="Enter student's name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="border p-2 rounded w-full"
                />

                {/* Email Address Input */}
                <label className="block text-sm font-medium">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 rounded w-full"
                />

                {/* Payment Purpose */}
                <label className="block text-sm font-medium">
                  What are you paying for (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter the payment info."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="border p-2 rounded w-full"
                />

                {/* Amount Input */}
                <label className="block text-sm font-medium">Amount</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border p-2 rounded w-full"
                />

                {/* Proceed Button */}
                <button
                  onClick={handleProceed}
                  disabled={!studentName || !classLevel || !amount || loading}
                  className={clsx(
                    "mt-6 px-6 py-3 rounded-md text-white font-bold text-sm transition duration-500",
                    studentName && classLevel && amount
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-300 cursor-not-allowed"
                  )}
                >
                  {loading ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    "Proceed"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

	  {/* Payment Summary Popup */}
      {isPaymentDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-600">Payment Summary</h2>
              <button
                className="text-gray-600 hover:text-red-600 text-xl"
                onClick={() => setIsPaymentDialogOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="border-b mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm font-bold text-gray-700">
                <div>School:</div>
                <div>{selectedSchool.name}</div> {/* Render a property like `name` */}
                <div>Class:</div>
                <div>{classLevel}</div>
                <div>Student:</div>
                <div>{studentName}</div>
                <div>Email:</div>
                <div>{email || "N/A"}</div>
                <div>Amount:</div>
                <div>${amount}</div>
              </div>
            </div>


			{/* Payment Methods */}
			<div>
          <div className="flex border-b">
            <button
              className={`w-1/3 py-2 ${
                paymentMethod === "card" ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              Card
            </button>
            <button
              className={`w-1/3 py-2 ${
                paymentMethod === "transfer" ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setPaymentMethod("transfer")}
            >
              Transfer
            </button>
            <button
              className={`w-1/3 py-2 ${
                paymentMethod === "ussd" ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setPaymentMethod("ussd")}
            >
              USSD
            </button>
          </div>

          {/* Payment Method Content */}
          <div className="mt-4">
		  {paymentMethod === "card" && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Card Payment</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                      placeholder="Enter Card Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <button
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                  onClick={() => console.log("Proceed with Card Payment")}
                >
                  Proceed
                </button>
              </div>
            )}


            {paymentMethod === "transfer" && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Bank Transfer Details</h3>
                <p className="text-gray-700 text-sm">Account Number: 1234567890</p>
                <p className="text-gray-700 text-sm">Account Name: John Doe</p>
                <p className="text-gray-700 text-sm">Bank Name: ABC Bank</p>
                <button
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
                  onClick={() => console.log("Proceed with Bank Transfer")}
                >
                  Proceed
                </button>
              </div>
            )}


            {paymentMethod === "ussd" && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">USSD Payment</h3>
                <p className="text-sm text-gray-700">Dial *123*456# to proceed with the payment.</p>
                <button
                  className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700"
                  onClick={() => console.log("Proceed with USSD Payment")}
                >
                  Proceed
                </button>
              </div>
            )}
			</div>
			</div>
          </div>
        </div>
      )}

      {/* Help Dialog */}
	  <button
        onClick={() => setIsDialogOpen(!isDialogOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
      >
        ?
      </button>
	  {isDialogOpen && (
  <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-lg p-4 w-64">
    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
    <div className="flex flex-col space-y-2">
      <button
        onClick={() => window.location.href = "mailto:contact@school.com"}
        className="border p-2 rounded-lg bg-white hover:bg-blue-300 transition duration-200 flex items-center space-x-2"
      >
        <span>📧</span>
        <span>Email: contact@school.com</span>
      </button>
      <button
        onClick={() => window.location.href = "tel:+1234567890"}
        className="border p-2 rounded-lg bg-white hover:bg-blue-300 transition duration-200 flex items-center space-x-2"
      >
        <span>📞</span>
        <span>Phone: +1234567890</span>
      </button>
      <button
        onClick={() => window.location.href = "/livechat"}
        className="border p-2 rounded-lg bg-white hover:bg-blue-300 transition duration-200 flex items-center space-x-2"
      >
        <span>💬</span>
        <span>Live Chat</span>
      </button>
    </div>
    <button
      onClick={() => setIsDialogOpen(false)}
      className="mt-4 text-sm text-gray-500 underline"
    >
      Close
    </button>
  </div>
)}


    </div>
  );
};

export default SchoolFees;