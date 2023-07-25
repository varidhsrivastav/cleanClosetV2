// import Peep from "./Open Peeps - Sitting.png";
import buddha from "./buddha.png";
import enabling from "./Screenshot 2023-07-25 192031.png";
import data from "./Screenshot 2023-07-25 193157.png";
import secure from "./Screenshot 2023-07-19 000148.png";
const WhyCC = () => {
  return (
    <div className="container ">
      <div className="p-20">
        <h1 className="font-black text-6xl text-center text-rrrpage">
          Why CleanCloset
        </h1>
      </div>
      <div className="sm:flex flex-row sm:items-center m-16">
        <div className="sm:w-2/4">
          <div className="sm:w-3/4">
            <h1 className="text-7xl font-bold">People-centric</h1>
            <p className="pt-6 text-lg font-semibold">
              Create a better employee experience by building your people
              operations systems and processes around your people. With
              self-service and seamless approvals, your team does not have to
              jump through hoops to get the resources they need.
            </p>
          </div>
        </div>
        <div className="flex-1 flex sm:justify-center">
          <img src={buddha} alt="" />
        </div>
      </div>
      <div className="lg:flex flex-row-reverse items-center m-16">
        <div className="lg:w-2/4 flex justify-end">
          <div className="lg:w-3/4 ">
            <h1 className="text-7xl font-bold ">Enabling</h1>
            <p className="pt-6 text-lg font-semibold">
              People operations is about providing your team with the right
              tools and support to get the job done. Zelt makes pay, benefits,
              software, hardware, time off and reviews available in a single
              place, as simple as drag and drop. So your team can focus on their
              job rather than learning internal processes.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={enabling} alt="" />
        </div>
      </div>
      <div className="lg:p-20">
        <div className="container  bg-darkgrey text-white border lg:flex flex-row rounded-2 w-full">
          <div className="flex-1 flex justify-center items-center">
            <img src={data} alt="" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div>
              <h1 className="text-7xl font-bold">Data driven tech</h1>
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
      <div className="lg:flex py-12 flex-row-reverse items-center m-16">
        <div className="lg:w-2/4 pb-5 flex justify-end">
          <div className="lg:w-3/4 lg:p-10">
            <h1 className="text-7xl font-bold ">Simple & Automated</h1>
            <p className="pt-6 font-semibold">
              When you keep things simple, less goes wrong and there is less to
              maintain and get distracted by. With Zelt, you can use fewer tools
              and simpler processes to promote reliability, engagement and lots
              of up time.
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
