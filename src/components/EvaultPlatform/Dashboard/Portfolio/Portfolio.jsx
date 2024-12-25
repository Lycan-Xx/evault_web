import React, { useState } from "react";
import AdminPage from "./portfolio-settings/AdminPage";
import HistoryList from "../TabContents/HistoryList";
import Services from "./portfolio-settings/Services/Services";

const Portfolio = () => {
  const [currentView, setCurrentView] = useState("home"); // State to track the current view
  const [profileImage, setProfileImage] = useState(null); // State to store the uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // Set the uploaded image URL
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "admin":
        return <AdminPage />;
      case "home":
      default:
        return (
          <>
            {/* Services Section */}
            <div className="bg-blue-600 p-6 rounded-lg shadow my-4">
              <h2 className="text-xl font-semibold mb-4 text-black">Services Offered  <span className="text-[1rem] font-bold font-mono "> (E.G classes in a school, meals in a restaurant, services form a mechanic)</span> </h2>
              <div className="flex items-center justify-center">
                <Services />
              </div>
            </div>

            {/* Transaction History Section */}
            <div className="bg-blue-600 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-black">Transaction History</h2>
              <div>
                <HistoryList />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Personal Information Section */}
      <div className="bg-white p-6 rounded-lg shadow text-black">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Portfolio Details</h2>

          {/* Profile Photo Upload */}
          <div className="relative flex flex-col items-center">
            <div
              className="w-20 h-20 border-2 border-white rounded-2xl overflow-hidden bg-gray-700 flex items-center justify-center"
              style={{ width: "4cm", height: "4cm" }}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-sm">No Image</span>
              )}
            </div>

            <label
              htmlFor="profile-upload"
              className="mt-2 px-4 py-2 bg-white text-blue-600 rounded-lg text-sm flex items-center space-x-2 hover:bg-blue-100 cursor-pointer"
            >
              <span>Upload</span>
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>
        <p className="mt-4 text-lg font-medium">Musa Audu</p>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => setCurrentView("home")}
            className={`px-4 py-3 rounded-lg flex-1 ${
              currentView === "home"
                ? "bg-white text-blue-600 border border-blue-600"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
          >
            Info
          </button>

          <button
            onClick={() => setCurrentView("admin")}
            className={`px-4 py-3 rounded-lg flex-1 ${
              currentView === "admin"
                ? "bg-white text-red-600 border border-red-600"
                : "bg-blue-700 text-white hover:bg-red-600 transition duration-200"
            }`}
          >
            Admin Portal
          </button>
        </div>
      </div>

      {/* Render Content Below Personal Information */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default Portfolio;
