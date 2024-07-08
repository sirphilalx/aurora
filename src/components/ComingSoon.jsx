import { ComeSoon } from "../constants/content";

const ComingSoon = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-12">
        <h3 className="sm:text-[32px] text-[14px] font-emblem text-custom-blue font-bold uppercase">
          Coming Soon
        </h3>
        <div className="hrztl border-b sm:w-[130px] mt-[8px] w-[46px] border-custom-blue mb-4"></div>
        <div className="flex flex-wrap justify-center">
          {ComeSoon.map((item, index) => (
            <div key={index} className="card m-4 relative">
              <img
                src={item.imageUrl}
                alt={`Coming soon ${index}`}
                className="w-60 h-80 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2">
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
                  />
                </svg>
              </div>
              <div className="absolute bottom-2 left-2 tag w-[65px] h-[23px] flex items-center bg-custom-blue justify-center text-white font-montserrat">
                <p className="text-xs">SOON</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
