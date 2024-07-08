import { useState } from "react";

const WishlistComponent = () => {
  const [isWishlistVisible, setIsWishlistVisible] = useState(false);
  const wishlistItems = ["Item 1", "Item 2", "Item 3"]; // Replace with your wishlist items

  const toggleWishlist = () => {
    setIsWishlistVisible(!isWishlistVisible);
  };

  return (
    <div className="relative">
      <button onClick={toggleWishlist} className="focus:outline-none">
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.08736 6.50066C0.551571 3.6818 2.53166 1.24 5.61827 1.00937C8.33604 0.808022 9.68328 3.91243 9.95505 4.50549C9.95807 4.51543 9.96443 4.52418 9.97319 4.53041C9.98195 4.53664 9.99262 4.54001 10.0036 4.54001C10.0146 4.54001 10.0252 4.53664 10.034 4.53041C10.0427 4.52418 10.0491 4.51543 10.0521 4.50549C11.3139 1.24366 13.6124 1.10455 14.42 1.02767C16.5942 0.808022 19.51 2.39317 18.9237 6.08698C18.0851 11.2122 9.94729 17 9.94729 17C9.94729 17 2.14729 12.0102 1.08736 6.50066Z"
            stroke="#F8FAFC"
            strokeWidth="2"
          />
        </svg>
      </button>
      {isWishlistVisible && (
        <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg p-4 w-64">
          <h2 className="text-lg font-semibold mb-2">Wishlist</h2>
          <ul>
            {wishlistItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WishlistComponent;
