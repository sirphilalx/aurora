const Hero = ({ background }) => {
  return (
    <div
      className="hero h-[600px] flex justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >
      <h3 className="relative top-[500px] uppercase h-[34.24px] w-[259px] sm:h-[62px] sm:w-[469px] text-xs sm:text-base flex items-center justify-center bg-blue-100 bg-opacity-65 text-transparent">
        <span className="bg-clip-text text-blue-100 bg-opacity-65 font-emblem">
          Redefining Your Lifestyle
        </span>
      </h3>
    </div>
  );
};

export default Hero;
