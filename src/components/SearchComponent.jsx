import { useState } from "react";

const SearchComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      {/* Search Icon */}
      <button
        className={`absolute top-0 right-0 mt-2 mr-2 ${
          isActive ? "hidden" : "block"
        } md:hidden`}
        onClick={() => setIsActive(true)}
      >
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 16.5L12.375 12.875M14.3333 8.16667C14.3333 11.8486 11.3486 14.8333 7.66667 14.8333C3.98477 14.8333 1 11.8486 1 8.16667C1 4.48477 3.98477 1.5 7.66667 1.5C11.3486 1.5 14.3333 4.48477 14.3333 8.16667Z"
            stroke="#F8FAFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Search Input */}
      <input
        type="text"
        className={`bg-gray-200 text-gray-800 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 ${
          isActive ? "block" : "hidden"
        } md:block`}
        placeholder="Search..."
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
      />
    </div>
  );
};

export default SearchComponent;
