import React, { useState } from "react";
import clsx from "clsx";
import { PlugZap, ArrowLeft } from "lucide-react";

// icon imports
import yedc from "../assets/power/yedc.jpeg";
import phcn from "../assets/power/phcn.jpeg";
import kedco from "../assets/power/kedco.png";
import aedc from "../assets/power/aedc.png";

// banner imports
import yedcBanner from "../assets/power/banner/yedcBanner.jpeg";
import phcnBanner from "../assets/power/banner/phcnBanner.jpeg";
import kedcoBanner from "../assets/power/banner/kedcoBanner.png";
import aedcBanner from "../assets/power/banner/aedcBanner.png";

const services = [
  { title: "YEDC", description: "Yola Electricity Distribution Company", icon: yedc, image: yedcBanner },
  { title: "PHCN", description: "Power Holding Company of Nigeria", icon: phcn, image: phcnBanner },
  { title: "KEDCO", description: "Kaduna Electricity Distribution Company", icon: kedco, image: kedcoBanner },
  { title: "AEDC", description: "Abuja Electricity Distribution Company", icon: aedc, image: aedcBanner },
];

const Electricity = ({ onBack }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [meterId, setMeterId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    if (selectedService) setSelectedService(null);
    else onBack();
    setMeterId("");
    setPhoneNumber("");
    setEmail("");
    setAmount("");
  };

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Transaction completed successfully!");
    }, 5000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Electricity</h1>
      <button
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
        aria-label="Go back"
        onClick={handleBackClick}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>{selectedService ? "Back" : "Go to Dashboard"}</span>
      </button>

      {!selectedService ? (
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Please choose your Service provider</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg transition-transform duration-500 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
<img src={service.icon} alt={`${service.title} logo`} className="w-12 h-12" />
<h4 className="text-lg font-bold">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
          <div
            className="flex flex-col items-center rounded-lg justify-center bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${selectedService.image})`,
            }}
          >

          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-bold">Enter your details</h3>

            <label className="block text-sm font-medium">Enter your Meter ID</label>
            <input
              type="text"
              placeholder="Enter Meter ID"
              value={meterId}
              onChange={(e) => setMeterId(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <label className="block text-sm font-medium">Enter your Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 11))
              }
              className="border p-2 rounded w-full"
            />
            {phoneNumber.length !== 11 && phoneNumber.length > 0 && (
              <p className="text-red-500 text-sm">Phone number must be 11 digits.</p>
            )}

            <label className="block text-sm font-medium">Enter your Email (optional)</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <label className="block text-sm font-medium">Enter Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <button
              onClick={handleProceed}
              disabled={!meterId || phoneNumber.length !== 11 || !amount}
              className={clsx(
                "mt-6 px-6 py-3 rounded-md text-white font-bold text-sm transition duration-500",
                meterId && phoneNumber.length === 11 && amount
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-300 cursor-not-allowed"
              )}
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                  <span>Processing...</span>
                </div>
              ) : (
                "Proceed"
              )}
            </button>


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
        </div>
      )}
    </div>
  );
};

export default Electricity;
