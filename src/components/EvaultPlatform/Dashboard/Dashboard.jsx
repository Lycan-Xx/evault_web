import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Sidebar from "../Dashboard/SideBar";
import TopBar from "./TopBar";
import PaymentCards from "../Dashboard/PaymentCard";
import Services from "./Services";
import Trade from "./Trade";
import Vault from "./Vault/Vault";
import Settings from "./SettingsApp.tsx";
import TabContent from "./TabContents/TabContent";
import Databundles from "./Databundles";
import Schoolfees from "./SchoolFees/Schoolfees";
import Airtime from "./Airtime";
import Electricity from "./Electricity";
import Remita from "./Remita";
import Cable from "./Cable";
import Portfolio from "./Portfolio/Portfolio";
import DepositForm from "./TabContents/DepositForm";
import {
  PhoneCall,
  Globe,
  Building,
  Receipt,
  SatelliteDishIcon,
  PlugZap,
} from "lucide-react";
import TransferForm from "./TabContents/TransferForm";
import { clsx } from "clsx";
import HistoryList from "./TabContents/HistoryList";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [selectedService, setSelectedService] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // this is null


  const cardData = [
    { name: "Wema Bank", balance: "₦92,500.98", cardNumber: "**** **** **** 1234", expiry: "05/26", cardholder: "John Doe" },
    { name: "Monie Point", balance: "₦45,450.00", cardNumber: "**** **** **** 5678", expiry: "06/26", cardholder: "Jane Doe" },
    { name: "Zenith Bank", balance: "₦0334,540.00", cardNumber: "**** **** **** 9101", expiry: "07/26", cardholder: "Alex Smith" },
  ];

  const services = [
    { title: "Data Bundles", description: "Purchase data", icon: Globe, component: "Databundles" },
    { title: "School Fees Payment", description: "Pay school fees", icon: Building, component: "Schoolfees" },
    { title: "Airtime Recharge", description: "Top up airtime", icon: PhoneCall, component: "Airtime" },
    { title: "Electricity", description: "Buy power units", icon: PlugZap, component: "Electricity" },
    { title: "Remita Payments", description: "Remita services", icon: Receipt, component: "Remita" },
    { title: "Cable Subscriptions", description: "Subscribe to cable", icon: SatelliteDishIcon, component: "Cable" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  const renderSelectedService = () => {
    if (!selectedService) return null;

    switch (selectedService) {
      case "Databundles":
        return <Databundles onBack={handleBack} />;
      case "Schoolfees":
        return <Schoolfees onBack={handleBack} />;
      case "Airtime":
        return <Airtime onBack={handleBack} />;
      case "Electricity":
        return <Electricity onBack={handleBack} />;
      case "Remita":
        return <Remita onBack={handleBack} />;
      case "Cable":
        return <Cable onBack={handleBack} />;
      case "TransferForm":
        return <TransferForm onBack={handleBack} />;
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Trade":
        return <Trade />;
      case "Vault":
        return <Vault />;
      case "Portfolio":
        return <Portfolio />;
      case "Settings":
        return <Settings />;
      case "Wallet Top Up":
		return <DepositForm />;
      case "Transfer":
        return <TransferForm />;
      default:
        return null;
    }
  };

  const homeSpring = useSpring({
    opacity: selectedTab === "Dashboard" ? 1 : 0,
    transform: selectedTab === "Dashboard" ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 200, friction: 25 },
  });

  const contentSpring = useSpring({
    opacity: selectedTab !== "Dashboard" ? 1 : 0,
    transform: selectedTab !== "Dashboard" ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 200, friction: 25 },
  });

  return (
    <div className="relative min-h-screen flex">
      {/* Background Color */}
      <div
        className="absolute inset-0 bg-white"
      ></div>

      <div className="absolute inset-0 bg-black/10"></div>

      {/* Sidebar */}
	  
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} setIsSidebarCollapsed={setIsSidebarCollapsed} className="relative z-10" />

      {/* Main Content */}
      <div
  className={`transition-all duration-300 flex-1 p-6 relative z-20 ${
    isSidebarCollapsed ? "md:ml-20" : "md:ml-64"
  }`}
>
  <TopBar />
  <animated.div style={homeSpring}>
    {selectedTab === "Dashboard" && (
      <>
        {selectedService ? (
          renderSelectedService()
        ) : (
          <>
            <PaymentCards cardData={cardData} />
            <div className="border-xl bg-blue-600 rounded-xl p-0 my-4">
              <TabContent />
            </div>
            <div className="bg-white border rounded-lg p-4 my-4">
              <Services
                services={services}
                onServiceClick={handleServiceClick}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              />
            </div>
            <div className="bg-white border rounded-lg p-4 my-4">
              <HistoryList />
            </div>
          </>
        )}
      </>
    )}
  </animated.div>
  <animated.div style={contentSpring}>
    {selectedTab !== "Dashboard" && renderTabContent()}
  </animated.div>
</div>

    </div>
  );
};

export default Dashboard;
