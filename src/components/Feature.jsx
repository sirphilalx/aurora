import { Icons } from "../constants/content";

const Features = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className="flex sm:flex-row flex-col sm:w-[1300px] gap-5 justify-between items-center">
          {Icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[300px] text-center gap-3"
            >
              <div>{icon.icon}</div>
              <h3 className="font-bold">{icon.title}</h3>
              <p className="font-light">{icon.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
