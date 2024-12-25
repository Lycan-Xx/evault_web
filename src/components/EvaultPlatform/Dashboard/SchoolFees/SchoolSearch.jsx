import React, { useState } from "react";
import schools from "./list.json"; // Import school data

const SchoolSearch = ({ onSelectSchool }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter schools based on the search query
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to the School Fees Payment Portal
      </h1>

      <div className="text-center space-y-6">
        <h3 className="text-xl font-bold">
          Please search for the school you want to make payments to
        </h3>
        <input
          type="text"
          placeholder="Search schools"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-2/3 mx-auto"
        />

        <div className="bg-white shadow rounded w-2/3 mx-auto mt-4 max-h-60 overflow-y-auto">
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <div
                key={school.name}
                onClick={() => onSelectSchool(school)}
                className="cursor-pointer flex items-center p-4 border-b hover:bg-gray-100 text-gray-700 transition duration-300 ease-in-out"
              >
                <img
                  src={school.logo}
                  alt={school.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{school.name}</h3>
                  <p className="text-sm text-gray-500">{school.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500">No schools found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolSearch;