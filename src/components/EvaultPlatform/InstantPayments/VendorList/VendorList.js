import React from "react";
import vendors from "./Vendors.json"; // Import vendor data

const VendorList = ({ searchQuery, onSelectVendor }) => {
	// Filter vendors based on the search query
	const filteredVendors = vendors.filter((vendor) =>
		vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="bg-white shadow rounded w-full mt-4 max-h-60 overflow-y-auto">
			{filteredVendors.length > 0 ? (
				filteredVendors.map((vendor) => (
					<div
						key={vendor.name}
						onClick={() => onSelectVendor(vendor)}
						className="cursor-pointer flex items-center p-4 border-b hover:bg-gray-100 text-gray-700 transition duration-300 ease-in-out"
					>
						<img
							src={vendor.logo}
							alt={vendor.name}
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<h3 className="font-semibold text-lg">{vendor.name}</h3>
							<p className="text-sm text-gray-500">{vendor.description}</p>
						</div>
					</div>
				))
			) : (
				<div className="p-4 text-gray-500">No vendors found</div>
			)}
		</div>
	);
};

export default VendorList;
