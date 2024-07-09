import { CarouselImages } from "../constants/content";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousels = () => {
  return (
    <>
      <div className="flex flex-col mt-8 justify-center items-center w-full">
        <h2 className="text-[14px] sm:text-[36px] font-montserrat">
          Made from the best materials
        </h2>

        <div className="flex items-center mt-8  justify-center w-[300px] sm:w-[700px] h-[700px] border-blue-700">
          <Carousel
            showThumbs={false}
            showIndicators={true}
            showStatus={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000} // 5 seconds
            className="overflow-hidden"
          >
            {CarouselImages.map((image, index) => (
              <div
                key={index}
                className="sm:w-[898px] w-[304px] h-[168px] sm:h-[500px] flex flex-col items-center justify-center rounded-lg"
              >
                <img src={image.imgUrl} alt={image.title} className="rounded" />
                <h4 className="mt-5">{image.title}</h4>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Carousels;
