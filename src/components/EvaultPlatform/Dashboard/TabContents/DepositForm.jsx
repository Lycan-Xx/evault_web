import React from 'react'

function DepositForm() {
  return (
	<div className='max-w-3xl mx-auto p-6 text-[6rem] text-gray-500'>
		Coming soon !!!
	</div>
  )
}

export default DepositForm



// import React, { useState } from "react";
// import { Layers, ArrowDownToLine, ArrowLeft } from "lucide-react";

// const DepositForm = ({ onBack }) => {
//   const [amount, setAmount] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Withdrew ₦${amount}`);
//     setAmount("");
//   };

//   return (
//     <div className="p-6 bg-gray-50 rounded-md shadow-md space-y-4 transition duration-500">
//       {/* Back Button */}
//       {onBack && (
//         <button
//           onClick={onBack}
//           className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span>Back</span>
//         </button>
//       )}

//       <h4 className="text-2xl font-bold flex items-center">
//         <Layers className="w-6 h-6 mr-2 text-gray-600" /> Top Up up your wallet
//       </h4>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
//             Enter Amount
//           </label>
//           <input
//             id="amount"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount to withdraw"
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-green-700 transition duration-300"
//         >
//           <ArrowDownToLine className="mr-2 w-5 h-5" /> Withdraw
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DepositForm;
