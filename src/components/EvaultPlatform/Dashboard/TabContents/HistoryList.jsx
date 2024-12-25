import React, { useState } from "react";
import { History, Printer, Share2, X } from "lucide-react";
import clsx from "clsx";
import transferHistoryData from "./transferHistories.json"; // Adjust path as needed

const HistoryList = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [visibleHistories, setVisibleHistories] = useState(6);

  const closeDialog = () => setSelectedTransaction(null);

  const handlePrint = () => {
    window.print(); // Basic print functionality
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Transaction Details",
        text: `Transaction from ${selectedTransaction.senderName} to ${selectedTransaction.recipientName} for ${selectedTransaction.amount}. Reference: ${selectedTransaction.referenceNumber}`,
      });
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  const loadMoreHistories = () => {
    setVisibleHistories((prev) => prev + 5);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md space-y-4 transition duration-500">
      <h4 className="text-2xl font-bold flex items-center">
        <History className="w-6 h-6 mr-2 text-gray-600" /> Transfer History
      </h4>

      <ul className="space-y-4">
        {transferHistoryData.slice(0, visibleHistories).map((history) => (
          <li
            key={history.id}
            onClick={() => setSelectedTransaction(history)}
            className="p-4 bg-blue-200 border border-blue-500 rounded-md shadow-sm hover:bg-blue-700 hover:text-white cursor-pointer transition duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{history.date}</span>
              <span className="font-semibold">${history.amount}</span>
            </div>
            <p>To: {history.recipientName}</p>
          </li>
        ))}
      </ul>

      {visibleHistories < transferHistoryData.length && (
        <button
          onClick={loadMoreHistories}
		  className="w-full md:w-1/4 bg-green-500 text-white py-4 rounded-xl hover:bg-green-600 transition duration-300 whitespace-nowrap">
        
          Load More
        </button>
      )}

      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 space-y-4 relative">
            <button
              onClick={closeDialog}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-xl font-bold text-center text-blue-600">Transaction Summary</h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Sender:</strong> {selectedTransaction.senderName}</p>
              <p><strong>Recipient:</strong> {selectedTransaction.recipientName}</p>
              <p><strong>Amount:</strong> ${selectedTransaction.amount}</p>
              <p><strong>Reference Number:</strong> {selectedTransaction.referenceNumber}</p>
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <button
                onClick={handlePrint}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                <Printer className="w-5 h-5" />
                <span>Print</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryList;
