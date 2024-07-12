import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { useState } from "react";
import { YouMayLike } from "../constants/content";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const [wishlist, setWishlist] = useState([]);

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => {
      return sum + item.quantity * item.formerPrice * (1 - item.discount / 100);
    }, 0);
  };

  const toCurrency = (value) => {
    return (
      "₦" +
      value.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
  };
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  const toggleWishlist = (id) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        return prevWishlist.filter((itemId) => itemId !== id);
      } else {
        return [...prevWishlist, id];
      }
    });
  };

  const items = YouMayLike;

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex justify-between items-center  mb-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <Link to="/" className="underline">
          continue shopping
        </Link>
      </div>
      <div className="flex justify-between uppercase text-base sm:border-b mb-4">
        <p className="text-[12px] font-mono">Product</p>
        <p className="text-[12px] font-mono hidden sm:block">Quantity</p>
        <p className="text-[12px] font-mono hidden sm:block">Price</p>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4 ">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded h-[118px]"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-[92px] h-[86px] object-cover "
              />
              <div className=" flex  flex-col sm:flex-row justify-between gap-4 sm:flex sm:flex-1 sm:justify-between">
                <div className="flex ">
                  <div className="flex-1">
                    <h2 className="text-[14px]">{item.title}</h2>
                    <p className="text-[10px] text-gray-400">
                      {toCurrency(item.formerPrice * (1 - item.discount / 100))}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center gap-4 ">
                  <div className="flex justify-between px-2 items-center gap-4  border border-black w-[100px] h-[28px]">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className=" bg-white text-black font-bold rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className=" bg-white text-black font-bold rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="del">
                    <button
                      className="flex w-[13px] h-[17px] sm:w-[19px] sm:h-[24px]"
                      onClick={() => removeItem(item.id)}
                    >
                      <svg
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_50_1898)">
                          <path
                            d="M14.9286 8V21.3333H4.07143V8H14.9286ZM12.8929 0H6.10714L4.75 1.33333H0V4H19V1.33333H14.25L12.8929 0ZM17.6429 5.33333H1.35714V21.3333C1.35714 22.8 2.57857 24 4.07143 24H14.9286C16.4214 24 17.6429 22.8 17.6429 21.3333V5.33333Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_50_1898">
                            <rect width="19" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-bold">
                  {toCurrency(
                    item.quantity * item.formerPrice * (1 - item.discount / 100)
                  )}
                </p>
              </div>
            </div>
          ))}
          <div className="text-xl font-bold mt-4 text-right">
            Total: {toCurrency(calculateSubtotal())}
            <p className="text-[10px] sm:text-[14px] font-mono font-thin">
              Tax Included and shipping calculated at checkout
            </p>
          </div>
          <div className="flex justify-end w-full ">
            <div
              className="bg-custom-blue h-[70px] w-full max-w-[546px] flex justify-center items-center text-white text-[24px]"
              onClick={handleCheckout}
            >
              Checkout
            </div>
          </div>
          <div className="flex justify-end w-full ">
            <div className="bg-gray-100 border p-[20px] border-gray-900 h-[70px] w-full max-w-[546px] flex justify-center items-center text-white text-[24px]">
              <div className=" w-full flex flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-[345px] h-[45px] px-[24px] py-[14px] font-montserrat text-[16px] placeholder:text-blue-200"
                />
                <button className="bg-custom-blue w-[146.41px] h-[45px] text-[9px] sm:text-[16px] font-semibold">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="px-16 ml-12 mt-4 gap-4 justify-center">
        <h3 className="text-[24px]">Featured Collection</h3>
        <div className="w-full flex flex-wrap justify-center items-center mt-12 sm:w-[1252px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="card m-4 relative cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-60 h-80 object-cover"
              />
              <div
                className=" wishButton absolute top-2 right-2"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(item.id);
                }}
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.08736 6.50066C0.551571 3.6818 2.53166 1.24 5.61827 1.00937C8.33604 0.808022 9.68328 3.91243 9.95505 4.50549C9.95807 4.51543 9.96443 4.52418 9.97319 4.53041C9.98195 4.53664 9.99262 4.54001 10.0036 4.54001C10.0146 4.54001 10.0252 4.53664 10.034 4.53041C10.0427 4.52418 10.0491 4.51543 10.0521 4.50549C11.3139 1.24366 13.6124 1.10455 14.42 1.02767C16.5942 0.808022 19.51 2.39317 18.9237 6.08698C18.0851 11.2122 9.94729 17 9.94729 17C9.94729 17 2.14729 12.0102 1.08736 6.50066Z"
                    stroke="#009ACE"
                    strokeWidth="2"
                    fill={wishlist.includes(item.id) ? "#009ACE" : "none"}
                  />
                </svg>
              </div>
              <div className="absolute bottom-16 left-2 tag w-[65px] h-[23px] flex items-center bg-custom-blue justify-center text-white font-montserrat">
                <p className="text-xs">
                  {item.discount ? `${item.discount}% OFF` : "NEW"}
                </p>
              </div>
              <div className="product-info relative bottom-[-8] border-l pl-2 flex justify-between items-center">
                <div className="leftOfCard">
                  <div className="info">{item.title}</div>
                  <div className="price flex gap-2">
                    <div className="gap-2 line-through  text-gray-300">
                      {toCurrency(item.formerPrice)}
                    </div>
                    <div className="currentPrice">
                      {toCurrency(item.formerPrice * (1 - item.discount / 100))}
                    </div>
                  </div>
                </div>
                <div className="cart size-8">
                  <svg
                    viewBox="0 0 49 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40625 9.75006C4.40625 8.94225 5.06719 8.28131 5.875 8.28131H9.13562C9.78783 8.27713 10.4226 8.49198 10.9381 8.89144C11.4537 9.2909 11.8203 9.85186 11.9791 10.4844L15.8346 25.9063H34.1484L37.6823 12.6876H40.7578L36.9479 26.6862C36.5983 27.9655 35.4733 28.8438 34.1484 28.8438H32.3125H19.0938H15.8346C14.4878 28.8438 13.3157 27.9479 12.9896 26.6407L9.13416 11.2188H5.875C5.06719 11.2188 4.40625 10.5579 4.40625 9.75006Z"
                      fill="#002733"
                      fillOpacity="0.6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.0938 28.8438C21.5098 28.8438 23.5 30.834 23.5 33.2501C23.5 35.6661 21.5098 37.6563 19.0938 37.6563C16.6777 37.6563 14.6875 35.6661 14.6875 33.2501C14.6875 30.834 16.6777 28.8438 19.0938 28.8438ZM20.5625 33.2501C20.5625 32.4246 19.9207 31.7813 19.0938 31.7813C18.2683 31.7813 17.625 32.4231 17.625 33.2501C17.625 34.0755 18.2668 34.7188 19.0938 34.7188C19.9192 34.7188 20.5625 34.077 20.5625 33.2501Z"
                      fill="#002733"
                      fillOpacity="0.6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.3125 28.8438C34.7286 28.8438 36.7188 30.834 36.7188 33.2501C36.7188 35.6661 34.7286 37.6563 32.3125 37.6563C29.8964 37.6563 27.9062 35.6661 27.9062 33.2501C27.9062 30.834 29.8964 28.8438 32.3125 28.8438ZM33.7812 33.2501C33.7812 32.4246 33.1394 31.7813 32.3125 31.7813C31.4871 31.7813 30.8438 32.4231 30.8438 33.2501C30.8438 34.0755 31.4856 34.7188 32.3125 34.7188C33.1379 34.7188 33.7812 34.077 33.7812 33.2501Z"
                      fill="#002733"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M23.5 12.6876V8.28131H26.4375V12.6876H30.8438V15.6251H26.4375V20.0313H23.5V15.6251H19.0938V12.6876H23.5Z"
                      fill="#002733"
                      fillOpacity="0.6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H49V43H0V0ZM1 1H48V42H1V1Z"
                      fill="#002733"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
