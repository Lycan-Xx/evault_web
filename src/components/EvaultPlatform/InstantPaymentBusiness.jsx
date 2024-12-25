import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";

const InstantPaymentBusiness = ({ onNavigate }) => {
  const [streamingService, setStreamingService] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const serviceImages = {
    Netflix: "https://picsum.photos/600/800?random=1",
    StarTimes: "https://picsum.photos/600/800?random=2",
    DSTV: "https://picsum.photos/600/800?random=3",
    Hulu: "https://picsum.photos/600/800?random=4",
    "Amazon Prime": "https://picsum.photos/600/800?random=5",
  };

  const bannerImage = "https://picsum.photos/1200/400?random=6";

  const validateForm = () => {
    const newErrors = {};
    if (!streamingService) newErrors.streamingService = "Please select a streaming service.";
    if (!subscriptionPlan) newErrors.subscriptionPlan = "Please select a subscription plan.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email address.";
    return newErrors;
  };

  const handleProceed = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsDialogOpen(true); // Open the payment popup
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate("instant-payments")}
            className="flex items-center text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-xl font-bold text-blue-600">Subscription Payment</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-full h-56 sm:h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})` }}
          ></div>

          <div className="flex flex-col lg:flex-row flex-1">
            <div className="w-full lg:w-1/2 p-8 bg-gray-200 flex items-center justify-center">
              {streamingService ? (
                <img
                  src={serviceImages[streamingService]}
                  alt={streamingService}
                  className="w-full max-h-[90%] rounded-xl shadow-lg object-cover"
                />
              ) : (
                <p className="text-gray-600 text-center">
                  Select a streaming service to see its image.
                </p>
              )}
            </div>

            <div className="w-full lg:w-1/2 p-8 bg-white flex items-center justify-center">
              <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
                  Subscribe Now
                </h2>
                <p className="mb-8 text-gray-600 text-center">
                  Choose your favorite streaming service and enjoy unlimited entertainment.{" "}
                  <a href="#" className="text-blue-600 font-semibold hover:underline">
                    Sign Up
                  </a>
                </p>

                <label className="block text-sm font-medium">Streaming Service</label>
                <select
                  value={streamingService}
                  onChange={(e) => setStreamingService(e.target.value)}
                  className="border p-3 rounded w-full mb-4"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {Object.keys(serviceImages).map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.streamingService && (
                  <p className="text-red-500 text-sm">{errors.streamingService}</p>
                )}

                <label className="block text-sm font-medium">Subscription Plan</label>
                <select
                  value={subscriptionPlan}
                  onChange={(e) => setSubscriptionPlan(e.target.value)}
                  className="border p-3 rounded w-full mb-4"
                >
                  <option value="" disabled>
                    Select a plan
                  </option>
                  {["Basic - $9.99", "Standard - $13.99", "Premium - $17.99"].map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
                {errors.subscriptionPlan && (
                  <p className="text-red-500 text-sm">{errors.subscriptionPlan}</p>
                )}

                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border p-3 rounded w-full mb-4"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <button
                  onClick={handleProceed}
                  className={clsx(
                    "mt-6 w-full px-6 py-3 rounded-md text-white font-bold text-sm transition duration-500",
                    "bg-blue-500 hover:bg-blue-600"
                  )}
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Payment Popup Dialogue */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#025798]">Payment Checkout</h2>
              <button
                className="text-gray-600 hover:text-red-600 text-xl"
                onClick={() => setIsDialogOpen(false)}
              >
                &times;
              </button>
            </div>

			

            {/* Summary Section */}
            <div className="border-b mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-gray-700">
                <div>Service:</div>
                <div>{streamingService || "N/A"}</div>
                <div>Plan:</div>
                <div>{subscriptionPlan || "N/A"}</div>
                <div>Email:</div>
                <div>{email || "N/A"}</div>
              </div>
            </div>

            {/* Tab Interface */}
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

              {/* Tab Content */}
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
    </div>
  );
};

export default InstantPaymentBusiness;