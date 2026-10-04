import { IoIosMenu } from "react-icons/io";
import "./index.css";

const Navbar = () => {
  return (
    <header className="nav-container fixed w-dvw flex flex-row justify-between p-5">
      <img src="/tulas.png" alt="logo" className="size-24 pl-2" />
      <ul className="flex text-white text-xs">
        <li className="pr-8">ABOUT TIS</li>
        <li className="pr-8">ACADEMICS</li>
        <li className="pr-8">BOARDING LIFE</li>
        <li className="pr-8">BEYOND ACADEMICS</li>
        <li className="pr-8">EVENTS</li>
        <li className="pr-8">ADMISSION</li>
        <li className="pr-8">MANDATORY DISCLOSURE</li>
        <li className="pr-8">ALUMNI NETWORK</li>
        <li className="pr-8">QUICK LINKS</li>
      </ul>
      <div className="rounded-full bg-[#60BAB1] size-24 content-center justify-items-center  ">
        <IoIosMenu size={52} color="white" />
      </div>
    </header>
  );
};

export default Navbar;
