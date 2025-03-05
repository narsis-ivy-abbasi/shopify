import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

interface FilterProps {
  onFilterChange: (filters: { name: string; sortBy: string }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Use useEffect to trigger onFilterChange when state updates
  useEffect(() => {
    onFilterChange({ name, sortBy });
  }, [name, sortBy]);

  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-md mb-4">
      {/* Search by Name */}
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          className="pl-10 pr-2 py-2 rounded-lg border w-full outline-none focus:ring-1 focus:ring-blue-400"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Only update state, effect will trigger filtering
        />
      </div>

      {/* Sorting Options */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-700 font-semibold">Sort by:</label>
        <label className="flex items-center">
          <input
            type="radio"
            name="sort"
            value="lowToHigh"
            checked={sortBy === "lowToHigh"}
            onChange={() => setSortBy("lowToHigh")}
            className="hidden"
          />
          <span className="hover:cursor-pointer border hover:bg-gray-200 px-2 py-1 rounded-lg">Lowest Price</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="sort"
            value="highToLow"
            checked={sortBy === "highToLow"}
            onChange={() => setSortBy("highToLow")}
            className="hidden"
          />
          <span className="hover:cursor-pointer border hover:bg-gray-200 px-2 py-1 rounded-lg">Highest Price</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
