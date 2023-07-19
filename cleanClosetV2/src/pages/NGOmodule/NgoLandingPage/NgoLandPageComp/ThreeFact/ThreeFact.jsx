import relib from "./zelt.wp2.cubdev.com-1-2.svg";
import start from "./zelt.wp2.cubdev.com-2-2.svg";
import iso from "./zelt.wp2.cubdev.com-3-2.svg";
const ThreeFact = () => {
  return (
    <div className="container p-20 ">
      <div className="lg:flex rounded-2 border bg-white ">
        <div className="flex-1 p-16 border-r-2 flex flex-col justify-center">
          <div className="flex-1 pb-16">
            <img src={relib} alt="" className="max-w-100px" />
          </div>
          <h1 className="text-5xl flex-1 font-bold">Reliable</h1>
          <p className="flex-1">24/7 support</p>
          <p className="flex-1">99.9% uptime</p>
        </div>
        <div className="flex-1 p-16 border-r-2 flex flex-col justify-center">
          <div className="pb-16">
            <img src={start} alt="" className="max-w-100px" />
          </div>
          <h1 className="text-5xl font-bold">Trusted</h1>
          <p>5.0 G2</p>
          <p>5.0 Trustpilot</p>
        </div>
        <div className="flex-1 p-16 flex flex-col justify-center">
          <div className="pb-16">
            <img src={iso} alt="" className="max-w-100px" />
          </div>
          <h1 className="text-5xl font-bold">Secure</h1>
          <p>ISO 27001 certified</p>
          <p>GDPR compliant</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeFact;
