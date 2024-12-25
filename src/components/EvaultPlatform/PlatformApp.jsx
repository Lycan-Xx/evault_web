import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import {
  MessageCircle,
  Headphones,
  Search,
  SlidersHorizontal,
  Smartphone,
  Signal,
  Wifi,
  Tv,
} from "lucide-react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import ConfigureSecurity from "./security/ConfigureSecurity";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer";
import VendorDetails from "./InstantPayments/VendorDetails";
import VendorList from "./InstantPayments/VendorList/VendorList"; // Ensure correct path
import InstantPaymentBusiness from "./InstantPaymentBusiness";
import { useDebounce } from "use-debounce";
import Databundles from "./Dashboard/Databundles";
import Airtime from "./Dashboard/Airtime";
import Electricity from "./Dashboard/Electricity";
import Cable from "./Dashboard/Cable";

function App() {
  const [currentView, setCurrentView] = useState("instant-payments");
  const [selectedVendor, setSelectedVendor] = useState(null); // Track selected vendor
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [debouncedQuery] = useDebounce(searchQuery, 300);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const filters = ["List", "Favorite", "Schools", "Recents"];

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // React Spring transitions
  const transitions = useTransition(currentView, {
    from: { opacity: 0, transform: "translate3d(50%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const handleNavigation = (view, vendor = null) => {
    setTimeout(() => {
      setSelectedVendor(view === "vendor-details" ? vendor : null);
      setCurrentView(view);
    }, 500);
  };

  const categoryData = [
    {
      icon: <Smartphone className="w-12 h-20 text-orange-500" />,
      title: "Data Bundles",
      description: "Affordable data plans for all networks.",
      component: "databundles"
    },
    {
      icon: <Signal className="w-12 h-20 text-purple-500" />,
      title: "Airtime",
      description: "Instant airtime top-ups for all carriers.",
      component: "airtime"
    },
    {
      icon: <Wifi className="w-12 h-20 text-teal-500" />,
      title: "Electricity",
      description: "Pay your electricity bills seamlessly.",
      component: "electricity"
    },
    {
      icon: <Tv className="w-12 h-20 text-blue-500" />,
      title: "Cable Subscriptions",
      description: "Renew your Cable TV subscriptions instantly.",
      component: "cable"
    },
  ];

  const CategoryCard = ({ icon, title, description, component }) => (
    <div
      className="category-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => handleNavigation(component)}
      tabIndex={0}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  // Add this conditional rendering section
  const renderComponent = () => {
    switch (currentView) {
      case 'databundles':
        return <Databundles onBack={() => handleNavigation('instant-payments')} />;
      case 'airtime':
        return <Airtime onBack={() => handleNavigation('instant-payments')} />;
      case 'electricity':
        return <Electricity onBack={() => handleNavigation('instant-payments')} />;
      case 'cable':
        return <Cable onBack={() => handleNavigation('instant-payments')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      {currentView !== "dashboard" &&
        currentView !== "instant-payment-business" &&
        currentView !== "vendor-details" &&
        currentView !== "databundles" &&
        currentView !== "airtime" &&
        currentView !== "electricity" &&
        currentView !== "cable" && (
          <>
            <Navbar onNavigate={handleNavigation} currentView={currentView} />

            {/* Main Content */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12 relative mt-[160px]">
              {/* Left Section */}
              <div className="flex flex-col items-center justify-center pl-8 lg:pl-16">
                <div className="flex space-x-6 mb-12">
                  <p className="text-gray-600 hover:text-[#025798] text-2xl font-bold">
                    Banking
                  </p>
                  <p className="text-gray-600 hover:text-[#025798] text-2xl font-bold">
                    Payments
                  </p>
                  <p className="text-gray-600 hover:text-[#025798] text-2xl font-bold">
                    Vault
                  </p>
                </div>
                <Slider />
              </div>

              {/* Right Section */}
              <div className="flex items-center justify-center relative w-full h-full">
                {transitions((style, item) => (
                  <animated.div
                    style={{
                      ...style,
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                    className="flex flex-col items-center justify-center"
                  >
                    {item === "configure-security" && (
                      <ConfigureSecurity
                        onSkip={() => handleNavigation("dashboard")}
                        onComplete={() => handleNavigation("dashboard")}
                      />
                    )}
                    {item === "sign-in" && (
                      <SignIn
                        onContinue={() => handleNavigation("configure-security")}
                        onSignUp={() => handleNavigation("sign-up")}
                      />
                    )}
                    {item === "sign-up" && (
                      <SignUp onCancel={() => handleNavigation("instant-payments")} />
                    )}
                    {item === "instant-payments" && (
                      <div className="bg-white rounded-2xl shadow-2xl p-8">
                        <h2 className="text-3xl font-bold text-[#025798] mb-8 text-left">
                          Instant Payment
                        </h2>

                        {/* Search Input */}
                        <div className="relative mb-8 py-4">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="w-6 h-6 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            placeholder="Search for Agent / Vendor"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-2 pl-12 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#025798] focus:border-transparent transition duration-300 ease-in-out pr-12"
                          />
                          <button
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            aria-label="Open filters"
                            onClick={toggleDropdown}
                          >
                            <SlidersHorizontal className="w-6 h-6 text-gray-400 hover:text-[#025798] transition" />
                          </button>

                          {/* Dropdown Filter */}
                          {isDropdownVisible && (
                            <div className="absolute top-14 right-0 bg-white border border-gray-300 shadow-lg rounded-lg z-50 w-40">
                              {filters.map((filter, index) => (
                                <button
                                  key={index}
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                                  onClick={() => {
                                    console.log(`Selected filter: ${filter}`);
                                    setIsDropdownVisible(false); // Close the dropdown after selection
                                  }}
                                >
                                  {filter}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Vendor List */}
                        <VendorList
                          searchQuery={debouncedQuery}
                          onSelectVendor={(vendor) =>
                            handleNavigation("vendor-details", vendor)
                          }
                        />

                        {/* Categories Section */}
                        <div className="bg-white rounded-2xl shadow-2xl p-8 mt-8">
                          <h3 className="text-xl font-bold text-[#025798] mb-4">
                            Categories
                          </h3>
                          <div className="grid grid-cols-2 gap-6">
                            {categoryData.map((category, index) => (
                              <CategoryCard
                                key={index}
                                icon={category.icon}
                                title={category.title}
                                description={category.description}
                                component={category.component}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </animated.div>
                ))}
              </div>
            </main>

            <Footer />

            {/* Fixed Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4">
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
          </>
        )}

      {/* Vendor Details Page */}
      {currentView === "vendor-details" && selectedVendor && (
        <VendorDetails
          vendor={selectedVendor}
          onBack={() => handleNavigation("instant-payments")}
        />
      )}

      {/* Other Conditional Views */}
      {currentView === "instant-payment-business" && (
        <InstantPaymentBusiness onNavigate={handleNavigation} />
      )}
      {currentView === "dashboard" && <Dashboard />}
      {renderComponent()}
    </div>
  );
}

const PlatformApp = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
      >
        Back to Home
      </button>
      // ...existing platform content...
    </div>
  );
};

export default App;