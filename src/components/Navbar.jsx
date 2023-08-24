import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className=" w-full font-bold text-3xl text-[#00df9a]">REACT.</h1>
      <li className="hidden md:flex">
        <ul className="p-4">Home</ul>
        <ul className="p-4">Company</ul>
        <ul className="p-4">Resources</ul>
        <ul className="p-4">About</ul>
        <ul className="p-4"> Contact</ul>
      </li>
      {/* mobile view */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" w-full font-bold text-3xl text-[#00df9a] m-4">
          REACT.
        </h1>
        <ul className="p-4 uppercase">
          <ul className="p-4 border-b border-gray-600">Home</ul>
          <ul className="p-4 border-b border-gray-600">Company</ul>
          <ul className="p-4 border-b border-gray-600">Resources</ul>
          <ul className="p-4 border-b border-gray-600">About</ul>
          <ul className="p-4"> Contact</ul>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
