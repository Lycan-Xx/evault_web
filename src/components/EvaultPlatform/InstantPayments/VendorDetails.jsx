import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx"; // Ensure you have clsx installed if you're using it

const VendorDetails = ({ vendor, onBack }) => {
  const [classLevel, setClassLevel] = useState("");
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!vendor) return null;

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Payment successful!");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar Section */}
      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-xl font-bold text-blue-600">{vendor.name}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Banner Section */}
          <div
            className="w-full h-56 sm:h-64 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://picsum.photos/1200/400?random=${vendor.name}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl text-white font-bold">{vendor.name}</h2>
            </div>

            {/* Profile Picture Positioned to the Right */}
            <div className="absolute -bottom-12 right-4 sm:right-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-4 border-white overflow-hidden shadow-lg">
                <img
                  src={`https://picsum.photos/100?random=${vendor.name}`}
                  alt={`${vendor.name} Owner`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 py-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800">About {vendor.name}</h3>
              <p className="mt-2 text-gray-600">{vendor.description}</p>
            </div>

            {/* Responsive Form Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div
                className="rounded-lg bg-cover bg-center h-72 sm:h-96 shadow-md"
                style={{
                  backgroundImage: `url('https://picsum.photos/600/800?random=${vendor.name}')`,
                }}
              ></div>

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
                <label className="block text-sm font-medium">What are you paying for (Optional)</label>
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
        </div>
      </div>

      {/* Help Button */}
      <button
        onClick={() => setIsDialogOpen(!isDialogOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
      >
        ?
      </button>

      {/* Contact Us Dialog */}
      {isDialogOpen && (
        <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-lg p-4 w-64">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span>📧 Email:</span>
              <a href="mailto:contact@school.com" className="text-blue-500">contact@school.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📞 Phone:</span>
              <a href="tel:+1234567890" className="text-blue-500">+1234567890</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>💬 Live Chat:</span>
              <a href="/livechat" className="text-blue-500">Start Chat</a>
            </li>
          </ul>
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

export default VendorDetails;
