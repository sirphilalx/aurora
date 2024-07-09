import { useParams } from "react-router-dom";
import { wears } from "../constants/content";
import { useState } from "react";
import Accordion from "./Accordion";

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

  // State to manage which button is active
  const [activeButton, setActiveButton] = useState(null);

  //   state to manage selection of size
  const [activeSize, setActiveSize] = useState(null);

  const [quantity, setQuantity] = useState(0); // State to manage quantity

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

  return (
    <div className="sm:flex p-5">
      <div className="left">
        <div className="images">
          <div className="masterImage">
            <img
              src={product.imgUrl}
              alt={product.title}
              className="w-[377px] h-[378px] object-cover"
            />
            <div className="smallImages flex w-full justify-between mt-3">
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-[86px] h-[81px]"
              />
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-[86px] h-[81px]"
              />
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-[86px] h-[81px]"
              />
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-[86px] h-[81px]"
              />
            </div>
          </div>
          <div className="sideimage"></div>
        </div>
      </div>
      <div className="right mt-6 sm:mt-0">
        <div className="flex gap-4 sm:flex-col">
          <div className="logo border p-3 w-[98px] h-[30px] sm:w-[173px] sm:h-[53px] flex items-center ">
            <svg
              className=""
              viewBox="0 0 135 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6719 22H16.4453L14.8125 17.9688H5.82031L4.19531 22H0L7.67969 4.33594H2.88281V0.59375H11.6797L20.6719 22ZM13.4375 14.4141L10.3359 6.76562L7.23438 14.4141H13.4375ZM42.0312 13.2656C42.0312 15.8229 41.1562 17.987 39.4062 19.7578C37.6354 21.5495 35.3646 22.4453 32.5938 22.4453C29.8177 22.4453 27.5547 21.5495 25.8047 19.7578C24.0339 17.987 23.1484 15.8229 23.1484 13.2656V0.59375H27.0859V12.4297C27.0859 14.3516 27.6094 15.8776 28.6562 17.0078C29.7031 18.138 31.0156 18.7031 32.5938 18.7031C34.1719 18.7031 35.4818 18.138 36.5234 17.0078C37.5703 15.8776 38.0938 14.3516 38.0938 12.4297V0.59375H42.0312V13.2656ZM65.6172 22H60.6953L56.2734 15.25H51.4766V22H47.5391V15.25H45.0156V11.5078H47.5391V0.59375H57.6484C59.9766 0.59375 61.8333 1.27604 63.2188 2.64062C64.6042 4.00521 65.2969 5.76562 65.2969 7.92188C65.2969 9.45833 64.8385 10.8021 63.9219 11.9531C63.0052 13.1042 61.8125 13.9036 60.3438 14.3516L65.6172 22ZM61.3672 7.92188C61.3672 6.89583 61.0469 6.0625 60.4062 5.42188C59.6771 4.69792 58.6641 4.33594 57.3672 4.33594H51.4766V11.5078H57.3672C58.6901 11.5078 59.6927 11.1641 60.375 10.4766C61.0365 9.8151 61.3672 8.96354 61.3672 7.92188ZM90.3438 11.2812C90.3438 14.4167 89.2448 17.0625 87.0469 19.2188C84.849 21.3698 82.151 22.4453 78.9531 22.4453C75.75 22.4453 73.0495 21.3698 70.8516 19.2188C68.6536 17.0625 67.5547 14.4167 67.5547 11.2812C67.5547 8.14583 68.6641 5.5 70.8828 3.34375C73.0807 1.20833 75.7708 0.140625 78.9531 0.140625C82.151 0.140625 84.849 1.20833 87.0469 3.34375C89.2448 5.47917 90.3438 8.125 90.3438 11.2812ZM86.2109 11.2812C86.2109 9.23438 85.487 7.48438 84.0391 6.03125C82.5651 4.60417 80.8698 3.89062 78.9531 3.89062C77.0104 3.89062 75.3125 4.60417 73.8594 6.03125C72.4115 7.46354 71.6875 9.21354 71.6875 11.2812C71.6875 13.3281 72.4115 15.0781 73.8594 16.5312C75.3125 17.9792 77.0104 18.7031 78.9531 18.7031C80.8698 18.7031 82.5651 17.9792 84.0391 16.5312C85.487 15.099 86.2109 13.349 86.2109 11.2812ZM112.586 22H107.664L103.242 15.25H98.4453V22H94.5078V15.25H91.9844V11.5078H94.5078V0.59375H104.617C106.945 0.59375 108.802 1.27604 110.188 2.64062C111.573 4.00521 112.266 5.76562 112.266 7.92188C112.266 9.45833 111.807 10.8021 110.891 11.9531C109.974 13.1042 108.781 13.9036 107.312 14.3516L112.586 22ZM108.336 7.92188C108.336 6.89583 108.016 6.0625 107.375 5.42188C106.646 4.69792 105.633 4.33594 104.336 4.33594H98.4453V11.5078H104.336C105.659 11.5078 106.661 11.1641 107.344 10.4766C108.005 9.8151 108.336 8.96354 108.336 7.92188ZM134.078 22H129.852L128.219 17.9688H119.227L117.602 22H113.406L121.086 4.33594H116.289V0.59375H125.086L134.078 22ZM126.844 14.4141L123.742 6.76562L120.641 14.4141H126.844Z"
                fill="#F8FAFC"
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
          <button className="border border-black px-24 py-3">
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
      </div>
    </div>
  );
};

export default ProductDetail;
