import Peep from "./Open Peeps - Sitting.png";
import secure from "./Screenshot 2023-07-19 000148.png";
const WhyCC = () => {
  return (
    <div className="container bg-white-#E4E0DD">
      <div className="p-20">
        <h1 className="font-black text-6xl text-center">Why CleanCloset</h1>
      </div>
      <div className="sm:flex flex-row sm:items-center m-16">
        <div className="sm:w-2/4">
          <div className="sm:w-3/4">
            <h1 className="text-6xl ">People-centric</h1>
            <p className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              nobis ipsum temporibus culpa perferendis libero, aliquid ducimus
              dignissimos ea at. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellat, amet!
            </p>
          </div>
        </div>
        <div className="flex-1 flex sm:justify-center">
          <img src={Peep} alt="" />
        </div>
      </div>
      <div className="lg:flex flex-row-reverse items-center m-16">
        <div className="lg:w-2/4">
          <div className="lg:w-3/4">
            <h1 className="text-6xl ">People-centric</h1>
            <p className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              nobis ipsum temporibus culpa perferendis libero, aliquid ducimus
              dignissimos ea at. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellat, amet!
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={Peep} alt="" />
        </div>
      </div>
      <div className="lg:p-20">
        <div className="container  bg-white border lg:flex flex-row rounded-2 w-full">
          <div className="flex-1 flex justify-center items-center">
            <img src={Peep} alt="" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div>
              <h1 className="text-6xl">Data driven tech</h1>
              <p className="text-xl pt-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati quaerat id non dolor facere, reiciendis illo
                consequuntur tenetur, rem magnam repudiandae temporibus! Velit
                corporis odio voluptatibus, quasi facere nobis quaerat?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse items-center m-16">
        <div className="lg:w-2/4 pb-5">
          <div className="lg:w-3/4 lg:p-10">
            <h1 className="text-6xl ">Simple & Automated</h1>
            <p className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              nobis ipsum temporibus culpa perferendis libero, aliquid ducimus
              dignissimos ea at. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellat, amet! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Voluptate, numquam.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center mix-blend-multiply">
          <img src={secure} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyCC;
