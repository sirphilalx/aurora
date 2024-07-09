import { Link } from "react-router-dom";
import WishlistComponent from "../components/WishListComponent";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { cart } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <div className="hamburger flex bg-custom-blue p-6 items-center justify-between h-[75px] sm:h-[124px]">
        <div className="navIcon flex items-center gap-2">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="blue"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13H19"
              stroke="#F8FAFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 7H19"
              stroke="#F8FAFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1H19"
              stroke="#F8FAFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link to="/">
            <h1 className="font-montserrat text-base font-medium leading-[19.5px] text-left text-white">
              Home
            </h1>
          </Link>
        </div>
        <Link to="/">
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
        </Link>
        <div className="navGroupIcons flex items-center justify-center gap-[10px] sm:gap-[28px]">
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
          <WishlistComponent />
          <Link to="/cart">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.48309 3.22222H20L17.8889 11H5.61986M18.9444 15.4444H6.27778L4.16667 1H1M7.33333 19.8889C7.33333 20.5026 6.86074 21 6.27778 21C5.69482 21 5.22222 20.5026 5.22222 19.8889C5.22222 19.2752 5.69482 18.7778 6.27778 18.7778C6.86074 18.7778 7.33333 19.2752 7.33333 19.8889ZM18.9444 19.8889C18.9444 20.5026 18.4719 21 17.8889 21C17.3059 21 16.8333 20.5026 16.8333 19.8889C16.8333 19.2752 17.3059 18.7778 17.8889 18.7778C18.4719 18.7778 18.9444 19.2752 18.9444 19.8889Z"
                stroke="#F8FAFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {totalItems > 0 && (
              <span className="relative z-10 top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
