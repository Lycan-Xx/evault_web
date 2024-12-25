import React from 'react'

function TransferForm() {
  return (
	<div className='max-w-3xl mx-auto p-6 text-[6rem] text-gray-500'>
		Coming soon !!!
	</div>
  )
}

export default TransferForm





// Import necessary dependencies
// import React, { useState } from "react";
// import { Send } from "lucide-react"; // Note: This import isn't being used
// import clsx from "clsx";

// TransferForm Component - Handles fund transfer functionality
// const TransferForm = () => {
	// State management for form fields
//	const [bank, setBank] = useState(""); // Selected bank
//	const [accountNumber, setAccountNumber] = useState(""); // Account number
//	const [amount, setAmount] = useState(""); // Transfer amount
//	const [loading, setLoading] = useState(false); // Loading state for form submission
//
//	// Handle form submission
//	const handleProceed = (e) => {
//		e.preventDefault();
//		setLoading(true);
//		// Simulate API call with setTimeout
//		setTimeout(() => {
//			setLoading(false);
//			alert("Transaction Successful!");
//		}, 500);
//	};
//
//	return (
//		// Main container with maximum width and padding
		//		<div className="max-w-3xl mx-auto p-6">
		//			{/* Transfer Form Container */}
		//			<form
		//				onSubmit={handleProceed}
		//				className="p-6 bg-gray-50 rounded-md shadow-md space-y-6"
		//			>
		//				{/* Form Title */}
		//				<h4 className="text-2xl font-bold text-center mb-6">Funds Transfer</h4>
		//
		//				{/* Bank Selection Dropdown */}
		//				<div>
		//					<label htmlFor="bank" className="block text-sm font-medium mb-2">
		//						Select Bank
		//					</label>
		//					<select
		//						id="bank"
		//						value={bank}
		//						onChange={(e) => setBank(e.target.value)}
		//						className="border p-2 rounded w-full"
		//					>
		//						<option value="" disabled>
		//							Select a bank
		//						</option>
		//						{/* Map through bank options */}
		//						{[
		//							"Bank A",
		//							"Bank B",
		//							"Bank C",
		//							"Bank D",
		//							"Bank E",
		//						].map((bankName) => (
		//							<option key={bankName} value={bankName}>
		//								{bankName}
		//							</option>
		//						))}
		//					</select>
		//				</div>
		//
		//				{/* Account Number Input Field */}
		//				<div>
		//					<label htmlFor="accountNumber" className="block text-sm font-medium mb-2">
		//						Account Number
		//					</label>
		//					<input
		//						id="accountNumber"
		//						type="text"
		//						value={accountNumber}
		//						onChange={(e) =>
		//							// Only allow numbers and limit to 10 digits
		//							setAccountNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
		//						}
		//						placeholder="Enter 10-digit account number"
		//						className="border p-2 rounded w-full"
		//					/>
		//				</div>
		//
		//				{/* Amount Input Field */}
		//				<div>
		//					<label htmlFor="amount" className="block text-sm font-medium mb-2">
		//						Amount
		//					</label>
		//					<input
		//						id="amount"
		//						type="number"
		//						value={amount}
		//						onChange={(e) => setAmount(e.target.value)}
		//						placeholder="Enter amount"
		//						className="border p-2 rounded w-full"
		//					/>
		//				</div>
		//
		//				{/* Submit Button */}
		//				<button
		//					type="submit"
		//					// Disable button if required fields are empty or during loading
		//					disabled={!bank || !accountNumber || !amount || loading}
		//					className={clsx(
		//						"w-full py-3 rounded-md text-white font-bold text-lg flex justify-center items-center transition duration-500",
		//						// Conditional styling based on form validity and loading state
		//						bank && accountNumber && amount && !loading
		//							? "bg-blue-500 hover:bg-blue-600"
		//							: "bg-gray-300 cursor-not-allowed"
		//					)}
		//				>
		//					{/* Show loading text or 'Proceed' based on loading state */}
		//					{loading ? <span className="animate-pulse">Processing...</span> : "Proceed"}
		//				</button>
		//			</form>
		//		</div>
		//	);
		//};
		//
		//export default TransferForm;
