import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: { name: string; sortBy: string }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [sortBy, setSortBy] = useState(""); // Sorting state

  const handleFilterChange = () => {
    onFilterChange({
      name,
      sortBy,
    });
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-md mb-4">
      {/* Search by Name */}
      <input
        type="text"
        className="px-2 py-1 rounded-lg border "
        placeholder="Search by name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          handleFilterChange();
        }}
      />

      {/* Sorting Options */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-700 font-semibold">Sort by:</label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="lowToHigh"
            checked={sortBy === "lowToHigh"}
            onChange={() => {
              setSortBy("lowToHigh");
              handleFilterChange();
            }}
          />
          <span>Lowest Price</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="highToLow"
            checked={sortBy === "highToLow"}
            onChange={() => {
              setSortBy("highToLow");
              handleFilterChange();
            }}
          />
          <span>Highest Price</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
