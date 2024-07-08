import Carousel from "../components/Carousel";
import ComingSoon from "../components/ComingSoon";
import Commerce from "../components/Commerce";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero background="./assets/products/heroImg.png" />
      <ComingSoon />
      <Commerce />
      <Carousel />
    </>
  );
};

export default Home;
