import { CarouselImages } from "../constants/content";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousels = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2>Made from the best materials</h2>

        <div className="flex items-center justify-center w-full">
          <Carousel
            showThumbs={false}
            showIndicators={true}
            showStatus={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000} // 3 seconds
            className="overflow-hidden"
          >
            {CarouselImages.map((image, index) => (
              <div
                key={index}
                className="sm:w-[898px] w-[304px] h-[168px] sm:h-[500px] flex items-center justify-center"
              >
                <img
                  src={image.imgUrl}
                  alt={image.title}
                  className="w-[898px] h-[500] rounded-lg"
                />
                <h4>{image.title}</h4>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Carousels;
