import { Link } from "react-router-dom";

const NgoHeroPage = () => {
  return (
    <div className=" bg-heroPagebg w-screen h-screen flex flex-col items-center justify-center text-center ">
      <h1 className="text-rrrpage text-6xl sm:text-8xl font-bold">
        Give Your Organisation <br /> a platform{" "}
      </h1>
      <p className="text-2xl p-3 font-bold">
        Create can-do culture with a modern <br /> Donation platform built for
        growth{" "}
      </p>
      <div>
        <Link to="/ngo/timeline">
          <button className="button-40"> Add Ngo </button>
        </Link>
      </div>
    </div>
  );
};

export default NgoHeroPage;
