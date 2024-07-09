import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();

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
            <div className="bg-custom-blue h-[70px] w-full max-w-[546px] flex justify-center items-center text-white text-[24px]">
              Checkout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
