import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll'


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleHamburgerClick = () => {
    setNav((prev) => !prev);
    console.log(nav);
  };

  const handleCloseHamb = () =>{
    setNav(!nav)
  }
  return (
    <div className="w-screen h-20 z-10 bg-zinc-200 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand</h1>
          <ul className="hidden md:flex ">
         <li > <Link activeClass="active" to="home" smooth={true} offset={50} duration={500} >Home</Link></li>
         <li> <Link activeClass="active" to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
         <li> <Link activeClass="active" to="platform" smooth={true} offset={-50} duration={500} >Platform</Link></li>
         <li> <Link activeClass="active" to="support" smooth={true} offset={-100} duration={500} >Support</Link></li>
         <li> <Link activeClass="active" to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="md:hidden" onClick={handleHamburgerClick}>
          {!nav ? (
          
               <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M4 6h16M4 12h8m-8 6h16"
               />
             </svg>
          ) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          )}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : "absolute bg-zinc-200 w-full px-8"}>
      <li className="border-b-2 border-zinc-300 w-full"> <Link onClick={handleCloseHamb} activeClass="active" to="home" smooth={true} offset={50} duration={500} >Home</Link></li>
         <li className="border-b-2 border-zinc-300 w-full"> <Link onClick={handleCloseHamb} activeClass="active" to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
         <li className="border-b-2 border-zinc-300 w-full"> <Link onClick={handleCloseHamb} activeClass="active" to="platform" smooth={true} offset={-50} duration={500} >Platform</Link></li>
         <li className="border-b-2 border-zinc-300 w-full"> <Link onClick={handleCloseHamb} activeClass="active" to="support" smooth={true} offset={-100} duration={500} >Support</Link></li>
         <li className="border-b-2 border-zinc-300 w-full" > <Link onClick={handleCloseHamb} activeClass="active" to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 py-3 px-8 mb-4">
            Sign In
          </button>
          <button className="px-4 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
