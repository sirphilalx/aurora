import { useNavigate, useParams } from "react-router-dom";
import { wears } from "../constants/content";
import { YouMayLike } from "../constants/content";
import { useState } from "react";
import Accordion from "./Accordion";
import { useCart } from "../CartContext";

const ProductDetail = () => {
  const { id } = useParams(); // Retrieves the id parameter from the route
  const product = wears.find((item) => item.id === parseInt(id)); // Finds the product with the matching id

  const toCurrency = (value) => {
    return (
      "₦" +
      value.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
  };

  const { addToCart } = useCart(); // Use the cart context

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${product.title} added to cart!`);
  };

  // State to manage which button is active
  const [activeButton, setActiveButton] = useState(null);

  //   state to manage selection of size
  const [activeSize, setActiveSize] = useState(null);

  const [quantity, setQuantity] = useState(1); // State to manage quantity

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-4xl font-bold">
        Product not found
      </div>
    ); // Displays a message if the product is not found
  }

  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

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
    <div className="flex flex-col justify-center items-center">
      <div className="sm:flex sm:w-[1252px] p-5 mt-10 gap-4  items-center justify-center">
        <div className="left">
          <div className="images">
            <div className="masterImage">
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-[377px] h-[378px] sm:w-[772px] sm:h-[773px] object-cover"
              />
              <div className="smallImages flex w-full justify-between mt-3 gap-4">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-[86px] h-[81px] sm:w-[177px] sm:h-[165px]"
                />
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-[86px] h-[81px] sm:w-[177px] sm:h-[165px]"
                />
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-[86px] h-[81px] sm:w-[177px] sm:h-[165px]"
                />
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-[86px] h-[81px] sm:w-[177px] sm:h-[165px]"
                />
              </div>
            </div>
            <div className="sideimage"></div>
          </div>
        </div>
        <div className="right mt-6 sm:mt-0">
          <div className="flex gap-4 sm:flex-col">
            <div className="logo  p-3 w-[98px] h-[30px] sm:w-[173px] sm:h-[53px] flex items-center ">
              <svg
                viewBox="0 0 173 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.6719 34H35.4453L33.8125 29.9688H24.8203L23.1953 34H19L26.6797 16.3359H21.8828V12.5938H30.6797L39.6719 34ZM32.4375 26.4141L29.3359 18.7656L26.2344 26.4141H32.4375ZM61.0312 25.2656C61.0312 27.8229 60.1562 29.987 58.4062 31.7578C56.6354 33.5495 54.3646 34.4453 51.5938 34.4453C48.8177 34.4453 46.5547 33.5495 44.8047 31.7578C43.0339 29.987 42.1484 27.8229 42.1484 25.2656V12.5938H46.0859V24.4297C46.0859 26.3516 46.6094 27.8776 47.6562 29.0078C48.7031 30.138 50.0156 30.7031 51.5938 30.7031C53.1719 30.7031 54.4818 30.138 55.5234 29.0078C56.5703 27.8776 57.0938 26.3516 57.0938 24.4297V12.5938H61.0312V25.2656ZM84.6172 34H79.6953L75.2734 27.25H70.4766V34H66.5391V27.25H64.0156V23.5078H66.5391V12.5938H76.6484C78.9766 12.5938 80.8333 13.276 82.2188 14.6406C83.6042 16.0052 84.2969 17.7656 84.2969 19.9219C84.2969 21.4583 83.8385 22.8021 82.9219 23.9531C82.0052 25.1042 80.8125 25.9036 79.3438 26.3516L84.6172 34ZM80.3672 19.9219C80.3672 18.8958 80.0469 18.0625 79.4062 17.4219C78.6771 16.6979 77.6641 16.3359 76.3672 16.3359H70.4766V23.5078H76.3672C77.6901 23.5078 78.6927 23.1641 79.375 22.4766C80.0365 21.8151 80.3672 20.9635 80.3672 19.9219ZM109.344 23.2812C109.344 26.4167 108.245 29.0625 106.047 31.2188C103.849 33.3698 101.151 34.4453 97.9531 34.4453C94.75 34.4453 92.0495 33.3698 89.8516 31.2188C87.6536 29.0625 86.5547 26.4167 86.5547 23.2812C86.5547 20.1458 87.6641 17.5 89.8828 15.3438C92.0807 13.2083 94.7708 12.1406 97.9531 12.1406C101.151 12.1406 103.849 13.2083 106.047 15.3438C108.245 17.4792 109.344 20.125 109.344 23.2812ZM105.211 23.2812C105.211 21.2344 104.487 19.4844 103.039 18.0312C101.565 16.6042 99.8698 15.8906 97.9531 15.8906C96.0104 15.8906 94.3125 16.6042 92.8594 18.0312C91.4115 19.4635 90.6875 21.2135 90.6875 23.2812C90.6875 25.3281 91.4115 27.0781 92.8594 28.5312C94.3125 29.9792 96.0104 30.7031 97.9531 30.7031C99.8698 30.7031 101.565 29.9792 103.039 28.5312C104.487 27.099 105.211 25.349 105.211 23.2812ZM131.586 34H126.664L122.242 27.25H117.445V34H113.508V27.25H110.984V23.5078H113.508V12.5938H123.617C125.945 12.5938 127.802 13.276 129.188 14.6406C130.573 16.0052 131.266 17.7656 131.266 19.9219C131.266 21.4583 130.807 22.8021 129.891 23.9531C128.974 25.1042 127.781 25.9036 126.312 26.3516L131.586 34ZM127.336 19.9219C127.336 18.8958 127.016 18.0625 126.375 17.4219C125.646 16.6979 124.633 16.3359 123.336 16.3359H117.445V23.5078H123.336C124.659 23.5078 125.661 23.1641 126.344 22.4766C127.005 21.8151 127.336 20.9635 127.336 19.9219ZM153.078 34H148.852L147.219 29.9688H138.227L136.602 34H132.406L140.086 16.3359H135.289V12.5938H144.086L153.078 34ZM145.844 26.4141L142.742 18.7656L139.641 26.4141H145.844Z"
                  fill="#009ACE"
                />
                <rect
                  x="1.5"
                  y="1.5"
                  width="170"
                  height="50"
                  stroke="#009ACE"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="font-montserrat text-[20px]">{product.title}</div>
          </div>
          <div className="text-base mt-3">{product.description}</div>
          <div className="text-[24px]">{toCurrency(product.formerPrice)}</div>
          <div className="tax-rating flex items-center gap-4">
            <p className="uppercase font-thin text-[12px]">tax included</p>
            <div>
              <svg
                width="105"
                height="19"
                viewBox="0 0 105 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 1.61804L11.1574 6.71885L11.2696 7.06434H11.6329H16.9962L12.6572 10.2168L12.3633 10.4303L12.4755 10.7758L14.1329 15.8766L9.79389 12.7242L9.5 12.5106L9.20611 12.7242L4.8671 15.8766L6.52445 10.7758L6.63671 10.4303L6.34281 10.2168L2.0038 7.06434H7.36712H7.73039L7.84265 6.71885L9.5 1.61804Z"
                  stroke="#0F172A"
                />
                <path
                  d="M31 1.54504L32.772 6.72615L32.8877 7.06434H33.2451H38.9059L34.3487 10.2098L34.0371 10.4249L34.1596 10.7831L35.9141 15.9129L31.284 12.7172L31 12.5211L30.716 12.7172L26.0859 15.9129L27.8404 10.7831L27.9629 10.4249L27.6513 10.2098L23.0941 7.06434H28.7549H29.1123L29.228 6.72615L31 1.54504Z"
                  stroke="#0F172A"
                />
                <path
                  d="M53 1.54504L54.772 6.72615L54.8877 7.06434H55.2451H60.9059L56.3487 10.2098L56.0371 10.4249L56.1596 10.7831L57.9141 15.9129L53.284 12.7172L53 12.5211L52.716 12.7172L48.0859 15.9129L49.8404 10.7831L49.9629 10.4249L49.6513 10.2098L45.0941 7.06434H50.7549H51.1123L51.228 6.72615L53 1.54504Z"
                  stroke="#0F172A"
                />
                <path
                  d="M74 1.54504L75.772 6.72615L75.8877 7.06434H76.2451H81.9059L77.3487 10.2098L77.0371 10.4249L77.1596 10.7831L78.9141 15.9129L74.284 12.7172L74 12.5211L73.716 12.7172L69.0859 15.9129L70.8404 10.7831L70.9629 10.4249L70.6513 10.2098L66.0941 7.06434H71.7549H72.1123L72.228 6.72615L74 1.54504Z"
                  stroke="#0F172A"
                />
                <path
                  d="M95.5 1.61804L97.1574 6.71885L97.2696 7.06434H97.6329H102.996L98.6572 10.2168L98.3633 10.4303L98.4755 10.7758L100.133 15.8766L95.7939 12.7242L95.5 12.5106L95.2061 12.7242L90.8671 15.8766L92.5245 10.7758L92.6367 10.4303L92.3428 10.2168L88.0038 7.06434H93.3671H93.7304L93.8426 6.71885L95.5 1.61804Z"
                  stroke="#0F172A"
                />
              </svg>
            </div>
          </div>
          <div className="btns">
            <p className="uppercase font-thin text-[12px]">color and sizes</p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setActiveButton("button1")}
                className={`px-8 py-2 border border-black text-custom-blue font-bold rounded-xl ${
                  activeButton === "button1" ? "bg-black" : "bg-white"
                }`}
              >
                Black
              </button>
              <button
                onClick={() => setActiveButton("button2")}
                className={`px-8 py-2 border border-black text-custom-blue font-bold rounded-xl ${
                  activeButton === "button2" ? "bg-black" : "bg-white"
                }`}
              >
                White
              </button>
            </div>
          </div>
          <div className="sizes">
            <div className="flex gap-4 mt-6">
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-4 py-2 border border-black text-custom-blue font-bold rounded-xl ${
                    activeSize === size ? "bg-black" : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="quantity mt-4">
            <p className="uppercase font-thin text-[12px]">quantity</p>
            <div className="flex items-center gap-4 mt-6 border border-black w-[fit-content]">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-white text-black font-bold rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-white text-black font-bold rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button
              className="border border-black px-24 py-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          <div className="w-full mt-8">
            <Accordion
              title="Features"
              content="This product features high-quality materials and excellent craftsmanship. It's designed to provide comfort and style."
            />
            <Accordion
              title="Details and Care"
              content="Made from 100% cotton. Machine wash cold with like colors. Do not bleach. Tumble dry low. Cool iron if needed."
            />
            <Accordion
              title="Fitness and Measurements"
              content="Model is 6'1' and wears a size M. Please refer to the size chart for detailed measurements."
            />
            <Accordion
              title="Shipments and Returns"
              content="Free shipping on orders over ₦50,000. Returns are accepted within 30 days of purchase. Please ensure the product is in its original condition."
            />
          </div>
          <div className="flex gap-4 mt-4">
            <div className="item">
              <svg
                width="30"
                height="34"
                viewBox="0 0 30 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 23.4667C23.7333 23.4667 22.6 23.9667 21.7333 24.75L9.85 17.8333C9.93333 17.45 10 17.0667 10 16.6667C10 16.2667 9.93333 15.8833 9.85 15.5L21.6 8.65C22.5 9.48333 23.6833 10 25 10C27.7667 10 30 7.76667 30 5C30 2.23333 27.7667 0 25 0C22.2333 0 20 2.23333 20 5C20 5.4 20.0667 5.78333 20.15 6.16667L8.4 13.0167C7.5 12.1833 6.31667 11.6667 5 11.6667C2.23333 11.6667 0 13.9 0 16.6667C0 19.4333 2.23333 21.6667 5 21.6667C6.31667 21.6667 7.5 21.15 8.4 20.3167L20.2667 27.25C20.1833 27.6 20.1333 27.9667 20.1333 28.3333C20.1333 31.0167 22.3167 33.2 25 33.2C27.6833 33.2 29.8667 31.0167 29.8667 28.3333C29.8667 25.65 27.6833 23.4667 25 23.4667Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="item">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.8644 20.9391C41.8644 31.5143 34.0278 40.257 23.8473 41.6757C22.8954 41.8078 21.9215 41.8767 20.9329 41.8767C19.7918 41.8767 18.6713 41.7858 17.58 41.6097C7.61224 40.0047 0 31.3602 0 20.9391C0 9.37506 9.3723 0 20.9315 0C32.4906 0 41.8644 9.37506 41.8644 20.9391Z"
                  fill="#1877F2"
                />
                <path
                  d="M23.8473 16.8121V21.3735H29.4882L28.595 27.5179H23.8473V41.6743C22.8954 41.8064 21.9215 41.8753 20.9329 41.8753C19.7918 41.8753 18.6712 41.7844 17.58 41.6083V27.5179H12.3776V21.3735H17.58V15.7924C17.58 12.33 20.3858 9.52185 23.8487 9.52185V9.52478C23.859 9.52478 23.8678 9.52185 23.8781 9.52185H29.4897V14.8359H25.8229C24.7332 14.8359 23.8487 15.7205 23.8487 16.8106L23.8473 16.8121Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="item">
              <svg
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3275 0H21.2322C9.69798 0 0.347656 9.35308 0.347656 20.8907V20.986C0.347656 32.5237 9.69798 41.8767 21.2322 41.8767H21.3275C32.8617 41.8767 42.2121 32.5237 42.2121 20.986V20.8907C42.2121 9.35308 32.8617 0 21.3275 0Z"
                  fill="url(#paint0_linear_50_1787)"
                />
                <path
                  d="M27.7581 8.51978H14.8041C11.2253 8.51978 8.31384 11.4321 8.31384 15.0119V26.8664C8.31384 30.4463 11.2253 33.3585 14.8041 33.3585H27.7581C31.3368 33.3585 34.2483 30.4463 34.2483 26.8664V15.0119C34.2483 11.4321 31.3368 8.51978 27.7581 8.51978ZM10.6034 15.0119C10.6034 12.6953 12.4881 10.81 14.8041 10.81H27.7581C30.074 10.81 31.9587 12.6953 31.9587 15.0119V26.8664C31.9587 29.1831 30.074 31.0683 27.7581 31.0683H14.8041C12.4881 31.0683 10.6034 29.1831 10.6034 26.8664V15.0119Z"
                  fill="white"
                />
                <path
                  d="M21.2811 26.9765C24.6091 26.9765 27.3181 24.2681 27.3181 20.9377C27.3181 17.6073 24.6106 14.8989 21.2811 14.8989C17.9517 14.8989 15.2441 17.6073 15.2441 20.9377C15.2441 24.2681 17.9517 26.9765 21.2811 26.9765ZM21.2811 17.1906C23.3477 17.1906 25.0286 18.872 25.0286 20.9392C25.0286 23.0064 23.3477 24.6877 21.2811 24.6877C19.2145 24.6877 17.5337 23.0064 17.5337 20.9392C17.5337 18.872 19.2145 17.1906 21.2811 17.1906Z"
                  fill="white"
                />
                <path
                  d="M27.8768 15.8746C28.773 15.8746 29.5034 15.1454 29.5034 14.2475C29.5034 13.3497 28.7745 12.6205 27.8768 12.6205C26.9792 12.6205 26.2502 13.3497 26.2502 14.2475C26.2502 15.1454 26.9792 15.8746 27.8768 15.8746Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_50_1787"
                    x1="6.46385"
                    y1="35.7587"
                    x2="36.1046"
                    y2="6.12819"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FAAD4F" />
                    <stop offset="0.35" stopColor="#DD2A7B" />
                    <stop offset="0.62" stopColor="#9537B0" />
                    <stop offset="1" stopColor="#515BD4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="item">
              <svg
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6762 0H21.5808C10.0466 0 0.696289 9.35308 0.696289 20.8907V20.986C0.696289 32.5237 10.0466 41.8767 21.5808 41.8767H21.6762C33.2104 41.8767 42.5607 32.5237 42.5607 20.986V20.8907C42.5607 9.35308 33.2104 0 21.6762 0Z"
                  fill="black"
                />
                <path
                  d="M32.2424 16.6315V20.5855C31.5516 20.518 30.6539 20.361 29.661 19.9971C28.3644 19.5218 27.3993 18.8718 26.7671 18.3686V26.3602L26.751 26.3352C26.7613 26.4937 26.7671 26.6551 26.7671 26.8179C26.7671 30.7865 23.5389 34.0172 19.57 34.0172C15.601 34.0172 12.3728 30.7865 12.3728 26.8179C12.3728 22.8493 15.601 19.6172 19.57 19.6172C19.9586 19.6172 20.34 19.648 20.7125 19.7081V23.6049C20.3547 23.4772 19.9704 23.4083 19.57 23.4083C17.6911 23.4083 16.1613 24.937 16.1613 26.8179C16.1613 28.6988 17.6911 30.2276 19.57 30.2276C21.4488 30.2276 22.9786 28.6973 22.9786 26.8179C22.9786 26.7475 22.9771 26.6771 22.9727 26.6066V11.0769H26.9226C26.9373 11.4114 26.9505 11.7489 26.9651 12.0834C26.9915 12.7421 27.2262 13.3745 27.6354 13.8924C28.115 14.5012 28.8235 15.2084 29.8179 15.7732C30.7493 16.3014 31.6234 16.5273 32.2424 16.6345V16.6315Z"
                  fill="#FF004F"
                />
                <path
                  d="M30.8842 13.4214V17.3754C30.1934 17.3079 29.2958 17.1509 28.3028 16.7871C27.0062 16.3117 26.0411 15.6618 25.409 15.1585V23.1501L25.3928 23.1251C25.4031 23.2836 25.409 23.445 25.409 23.6078C25.409 27.5765 22.1807 30.8071 18.2118 30.8071C14.2429 30.8071 11.0146 27.5765 11.0146 23.6078C11.0146 19.6392 14.2429 16.4071 18.2118 16.4071C18.6005 16.4071 18.9818 16.4379 19.3544 16.498V20.3948C18.9965 20.2671 18.6122 20.1982 18.2118 20.1982C16.333 20.1982 14.8032 21.727 14.8032 23.6078C14.8032 25.4887 16.333 27.0175 18.2118 27.0175C20.0907 27.0175 21.6205 25.4872 21.6205 23.6078C21.6205 23.5374 21.619 23.467 21.6146 23.3966V7.86389H25.5644C25.5791 8.1984 25.5923 8.53584 25.607 8.87035C25.6334 9.5291 25.8681 10.1614 26.2773 10.6793C26.7569 11.2882 27.4653 11.9954 28.4597 12.5602C29.3911 13.0869 30.2653 13.3143 30.8842 13.4214Z"
                  fill="#00F7EF"
                />
                <path
                  d="M31.7481 15.1497V19.1037C31.0573 19.0362 30.1597 18.8792 29.1667 18.5153C27.8701 18.04 26.905 17.39 26.2729 16.8868V24.8784L26.2567 24.8534C26.267 25.0119 26.2729 25.1732 26.2729 25.3361C26.2729 29.3047 23.0446 32.5354 19.0757 32.5354C15.1068 32.5354 11.8785 29.3047 11.8785 25.3361C11.8785 21.3675 15.1068 18.1353 19.0757 18.1353C19.4644 18.1353 19.8457 18.1662 20.2183 18.2263V22.123C19.8604 21.9954 19.4761 21.9265 19.0757 21.9265C17.1968 21.9265 15.6671 23.4552 15.6671 25.3361C15.6671 27.217 17.1968 28.7457 19.0757 28.7457C20.9546 28.7457 22.4843 27.2155 22.4843 25.3361C22.4843 25.2657 22.4829 25.1953 22.4785 25.1248V9.59509H26.4283C26.443 9.9296 26.4562 10.267 26.4709 10.6016C26.4973 11.2603 26.7319 11.8926 27.1412 12.4105C27.6208 13.0194 28.3292 13.7266 29.3236 14.2914C30.255 14.8181 31.1292 15.0455 31.7481 15.1526V15.1497Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="item">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.9088 21.0624C41.9088 31.6376 34.0722 40.3803 23.8917 41.799C22.9398 41.9311 21.9659 42 20.9774 42C19.8363 42 18.7157 41.9091 17.6245 41.733C7.65814 40.1279 0.0458984 31.4835 0.0458984 21.0624C0.0458984 9.49835 9.41819 0.123291 20.9788 0.123291C32.5395 0.123291 41.9118 9.49835 41.9118 21.0624H41.9088Z"
                  fill="#1C1C1B"
                />
                <path
                  d="M8.53475 9.35754L18.1887 22.2684L8.47461 32.7659H10.6615L19.167 23.5757L26.0385 32.7659H33.4791L23.2825 19.1287L32.3248 9.35754H30.138L22.3057 17.8215L15.9769 9.35754H8.5362H8.53475ZM11.7498 10.9685H15.1672L30.2612 31.1549H26.8437L11.7498 10.9685Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="item">
              <svg
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3725 0H21.2771C9.7429 0 0.392578 9.35308 0.392578 20.8907V20.986C0.392578 32.5237 9.7429 41.8767 21.2771 41.8767H21.3725C32.9067 41.8767 42.257 32.5237 42.257 20.986V20.8907C42.257 9.35308 32.9067 0 21.3725 0Z"
                  fill="#00E510"
                />
                <path
                  d="M25.405 27.0631C20.0471 27.0631 15.688 22.7012 15.6865 17.3418C15.688 15.9832 16.7939 14.8784 18.1491 14.8784C18.2885 14.8784 18.4263 14.8902 18.5583 14.9136C18.8488 14.962 19.1245 15.0603 19.3782 15.2085C19.4149 15.2305 19.4398 15.2657 19.4457 15.3068L20.0119 18.8764C20.0192 18.9189 20.006 18.96 19.9781 18.9908C19.6657 19.3371 19.2668 19.5865 18.8224 19.7112L18.6082 19.7713L18.6889 19.9782C19.4193 21.8386 20.9066 23.3248 22.7678 24.0583L22.9746 24.1405L23.0348 23.9263C23.1594 23.4818 23.4088 23.0827 23.7549 22.7702C23.7799 22.7467 23.8136 22.735 23.8473 22.735C23.8547 22.735 23.862 22.735 23.8708 22.7364L27.4393 23.3028C27.4818 23.3101 27.517 23.3336 27.539 23.3703C27.6857 23.6241 27.784 23.9014 27.8339 24.1919C27.8573 24.321 27.8676 24.4574 27.8676 24.5997C27.8676 25.9568 26.7631 27.0616 25.405 27.0631Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M34.9063 19.7625C34.6174 16.4966 33.1213 13.467 30.6939 11.2325C28.2518 8.98485 25.0837 7.74658 21.7704 7.74658C14.4984 7.74658 8.58172 13.665 8.58172 20.9392C8.58172 23.3805 9.25493 25.7587 10.5295 27.8303L7.68701 34.1244L16.788 33.1546C18.3706 33.8031 20.0455 34.1317 21.7689 34.1317C22.2221 34.1317 22.6871 34.1083 23.1535 34.0598C23.5642 34.0158 23.9793 33.9513 24.387 33.8691C30.4768 32.6382 34.9224 27.2317 34.9576 21.0096V20.9392C34.9576 20.543 34.94 20.1469 34.9048 19.7625H34.9063ZM17.1385 30.392L12.1033 30.9289L13.6067 27.5971L13.306 27.1936C13.284 27.1643 13.262 27.1349 13.2371 27.1012C11.9317 25.298 11.2423 23.1677 11.2423 20.9406C11.2423 15.1337 15.9651 10.4095 21.7704 10.4095C27.209 10.4095 31.8189 14.6539 32.2633 20.0721C32.2867 20.3626 32.2999 20.6545 32.2999 20.9421C32.2999 21.0242 32.2985 21.1049 32.297 21.1915C32.1855 26.0492 28.793 30.1748 24.0467 31.2253C23.6845 31.306 23.3134 31.3676 22.9438 31.4072C22.5595 31.4513 22.1649 31.4733 21.7733 31.4733C20.3785 31.4733 19.0233 31.2033 17.7428 30.6693C17.6005 30.612 17.4612 30.5504 17.3307 30.4873L17.14 30.3949L17.1385 30.392Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 ml-12 mt-4 gap-4 justify-center">
        <h3 className="text-[24px]">You may also like</h3>
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

export default ProductDetail;
