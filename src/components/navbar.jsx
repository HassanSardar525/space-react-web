import React from 'react'
import {  FaSquarespace} from "react-icons/fa6";

// import Logo from "./assets/logo.png";
const Navbar = () => { 
  return (
    <div data-aos="fade-down" >
      <div className="flex bg-black/25 backdrop-blur-sm h-16 w-full top-0 z-[99] absolute items-center sm:py-0 ">
        
        <div className="flex h-full items-center container">
          <FaSquarespace className="text-6xl pr-2  text-white" />
          <span className='text-white font-bold text-2xl'>SPACE</span>
        </div>

        <div className=" text-white w-full ">
          <ul className='flex gap-8 justify-center p-9 text-lg '>
            <li className='hover:text-yellow-200'><a href="#">Home</a></li>
            <li className='hover:text-yellow-200'><a href="#">Technology</a></li>
            <li className='hover:text-yellow-200'><a href="#">Sateites</a></li>
            <li className='hover:text-yellow-200'><a href="#">About</a></li>
          </ul>
        </div>

        

      </div>
    </div>
  )
}

export default Navbar