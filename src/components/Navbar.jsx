import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import Logo from "./logo";
import {SiAboutdotme} from 'react-icons/si';

import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("harmburger click");
  };
  return (
    <div className=" bg-transparent backdrop-blur-sm  h-16 w-full  fixed top-0 z-50 ">
     <div
        id="menuIcon"
        onClick={handleNav}
        className=" flex justify-between m-4 z-99 md:hidden"
      >
        <Logo />
        <AiOutlineMenu size={25}/>
        
      </div>

      {nav ? (
        <div className="w-full h-screen bg-black/90 flex flex-col justify-center items-center">
          <a
            onClick={handleNav}
            href="#Home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
        
          <a
            onClick={handleNav}
            href="#Projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#About"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <SiAboutdotme size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#ContactUs"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>

          <a
            onClick={handleNav}
            href="/src/assets/RESUME.pdf" target="_blank" rel="noopener noreferrer"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
        </div>
      ) : (
        <header className="md:block hidden w-full font-medium px-32 py-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>
            <nav className="relative flex items-center">
  <a href="#Home" className="nav-link">
    Home
  </a>
  <a href="#Projects" className="nav-link">
    Projects
  </a>
  <a href="#About" className="nav-link">
    About
  </a>
  <a href="#ContactUs" className="nav-link">
    Contact
  </a>
  <a href="/src/assets/RESUME.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
    Resume
  </a>
</nav>
          </div>
        </header>
      )}
      <div className="md:block hidden absolute z-10">
        <div className="flex flex-col">
          <a
            href="#Home"
            className="rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome />
          </a>
          <a
            href="#Projects"
            className="rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects />
          </a>
          <a 
            href="#About"
            className="rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <SiAboutdotme />
          </a>
          <a
            href="#ContactUs"
            className="rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail />
          </a>
          <a
             href="/src/assets/RESUME.pdf" target="_blank" rel="noopener noreferrer"
            className="rounded-full, bg-transparent shadow-lg bg-gray-300 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

