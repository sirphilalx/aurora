import Carousel from "../components/Carousel";
import ComingSoon from "../components/ComingSoon";
import Commerce from "../components/Commerce";
import Features from "../components/Feature";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero background="./assets/products/heroImg.png" />
      <ComingSoon />
      <Commerce />
      <Carousel />
      <Features />
    </>
  );
};

export default Home;
