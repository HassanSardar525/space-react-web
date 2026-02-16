import React from "react";
import { FaSquarespace , FaLocationDot , FaPhone , FaMessage , FaInstagram , FaFacebook , FaLinkedin} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className=" text-white bg-gray-800">
        <div className="h-14 w-full bg-gray-900 flex items-center justify-center">
          <FaSquarespace className="text-6xl pr-2  text-white" />
          <span className="text-white font-bold text-2xl">SPACE</span>
        </div>
        <div className="grid grid-1 sm:grid-cols-3 border-b-2 border-gray-400 ml-5 mr-5">

          <div className="flex flex-col p-7 gap-2">
            <h2 className="text-2xl font-bold">You can contact us</h2>
            <p>Get Exclusive Updatestraigt to your inbox.</p>
            <div className="flex">
              <input
                className="w-full mr-2 px-3 text-gray-900 focus:outline-none focus:border-sky-500 broder-2 border-gray-200 focus:ring-2"
                type="text"
                placeholder="Email"
              />
              <button className="primaryButton">Enter</button>
            </div>
          </div>

          <div className="grid grid-cols-2 ">
            <div className="list-none px-8 py-4 space-y-3">
              <h2 className=" font-bold">Quick Links</h2>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Local</a></li>
            </div>
            <div className="list-none px-8 py-4 space-y-3">
              <h2 className=" font-bold">Quick Links</h2>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Local</a></li>
            </div>
          </div>

          <div className="list-none px-8 py-4 space-y-4">
            <h2 className="font-bold">Contact Us</h2>
            <li className="flex items-center gap-2"><FaLocationDot/> Lahore , Pakistan</li>
            <li className="flex items-center gap-2"><FaPhone/> 03030303032</li>
            <li className="flex items-center gap-2"><FaMessage/> abc@gmail.com</li>
          </div>

        </div>

        <div className="h-16 w-full  flex items-center justify-center">
          <div className="flex gap-6"> 
              <a href="#"><FaInstagram className="text-4xl pr-2  text-white" /></a>
              <a href="#"><FaFacebook className="text-4xl pr-2  text-white" /></a>
              <a href="#"><FaLinkedin className="text-4xl pr-2  text-white" /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
