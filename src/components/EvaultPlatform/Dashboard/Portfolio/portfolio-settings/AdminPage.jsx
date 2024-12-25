import React, { useState } from "react";
import Accounts from "./Services/Accounts";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    topBanner: "",
    leftBanner: "",
    businessName: "",
    contactEmail: "",
    contactPhone: "",
    paymentOptions: {
      card: false,
      transfer: false,
      ussd: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      paymentOptions: {
        ...formData.paymentOptions,
        [name]: checked,
      },
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, [name]: event.target.result });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const vendorId = "vendor-id"; // Replace with actual vendor ID
      alert("Vendor updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update vendor.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col space-y-8"
    >
      <h1 className="text-[2.4rem] font-extrabold text-red-600 mb-4">Portal Preference</h1>

      {/* Top Banner Section */}
      <div className="w-full h-56 sm:h-64 bg-cover bg-center relative border border-gray-300 rounded-lg">
        <label className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-lg text-sm font-semibold cursor-pointer">
          Upload Top Banner
          <input
            name="topBanner"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {formData.topBanner && (
          <div
            className="w-full h-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${formData.topBanner})` }}
          />
        )}
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Banner Section */}
        <div className="md:w-1/3 h-72 sm:h-96 bg-gray-200 rounded-lg bg-cover bg-center relative border border-gray-300">
          <label className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-lg text-sm font-semibold cursor-pointer">
            Upload Left Banner
            <input
              name="leftBanner"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {formData.leftBanner && (
            <div
              className="w-full h-full bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${formData.leftBanner})` }}
            />
          )}
        </div>

        {/* Contact Info Section */}
        <div className="md:w-2/3 flex flex-col space-y-4">
          <input
            name="businessName"
            placeholder="Business Name"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            name="contactEmail"
            placeholder="Contact Email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            name="contactPhone"
            placeholder="Contact Phone"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
      </div>

      {/* Payment Options Section */}
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Payment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { option: "card", title: "Credit/Debit Card", description: "Pay using your credit or debit card." },
            { option: "transfer", title: "Bank Transfer", description: "Transfer funds directly from your bank." },
            { option: "ussd", title: "USSD Payment", description: "Use USSD codes for quick payments." },
          ].map(({ option, title, description }) => (
            <div
              key={option}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <h3 className="text-md font-bold mb-2">{title}</h3>
              <p className="text-sm mb-4">{description}</p>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      paymentOptions: {
                        ...prevData.paymentOptions,
                        [option]: !prevData.paymentOptions[option], // Toggle state
                      },
                    }))
                  }
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                    formData.paymentOptions[option] ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1/2 left-1 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                      formData.paymentOptions[option]
                        ? "translate-x-6"
                        : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h4 className="text-2xl font-extrabold">Account Details</h4>

      <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
        <h4>
          <span className="text-lg font-bold">Active Accounts</span>
        </h4>
        <Accounts />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-1/4 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition duration-200"
      >
        Update Vendor
      </button>
    </form>
  );
};

export default AdminPage;

