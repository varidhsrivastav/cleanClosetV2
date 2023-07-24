import { useState } from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  const [open, setOpen] = useState(true);
  const [clicked, setClicked] = useState({
    dashboard: true,
  });
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Logout", src: "Setting" },
  ];

  const handleClick = (value) => {
    const lowerCase = value.toLowerCase();
    setClicked((prev) => ({
      [lowerCase]: true,
    }));
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                clicked[Menu.title.toLowerCase()] === true && "bg-light-white"
              } `}
              onClick={() => {
                handleClick(Menu.title);
              }}
            >
              <Link className="flex gap-2 w-max" to={`/admin/${Menu.title}`} >
              <img src={`./cleanClosetV2/src/pages/AdminDashboard/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};
export default Admin;
