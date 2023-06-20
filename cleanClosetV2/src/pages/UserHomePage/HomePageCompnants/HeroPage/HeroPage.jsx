import hand from "./hands-removebg-preview.png";

const HeroPage = () => {
  return (
    <div className=" bg-heroPagebg text-center relative min-h-screen ">
      <div className="w-full flex flex-col justify-center items-center pt-20 h-70">
        <div className=" flex flex-col lg:flex-row items-center justify-center text-8xl lg:text-9xl overflow-hidden w-full z-10 font-bold">
          <h1 data-aos="fade-right">Uplift.</h1>
          <h1 data-aos="zoom-out-up">Donate.</h1>
          <h1 data-aos="fade-left">Support.</h1>
        </div>
        <div className="p-10 flex justify-center">
          <h5 className="text-2xl lg:w-4/5">
            Maybe your small contribution could get some clothes for a young boy
            during the chilly nights, and donate for a change.
          </h5>
        </div>
        <div>
          <div>
            <button className=" p-2 rounded-lg bg-orange-300">Donate Now</button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <img src={hand} className="w-full" />
      </div>
    </div>
  );
};

export default HeroPage;
