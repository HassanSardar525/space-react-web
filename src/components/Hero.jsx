import React from "react";
import BgEarth from "../assets/earth-bg.mp4";
import moonSurface from "../assets/moon-surface-hd.png";


const Hero = () => {
  return (
    <div>
      <div className="text-white bg-black/20 p-5 absolute w-full h-full grid grid-cols-1 sm:grid-cols-2 items-center justify-center  ">
        <div className="space-x-7 space-y-5">
          <div>
            <h1 data-aos="fade-up" className="text-6xl pl-6 font-bold">ORBIT OF </h1>
            <h1 data-aos="fade-up" className="text-6xl pl-7 font-bold"> EARTH</h1>
          </div>
          <p data-aos="fade-up" data-aos-delay="300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            pariatur eos cumque dolorem exercitationem suscipit quas ut deleniti
            qui. Eveniet. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique repellat provident ratione odio, deserunt eaque.
          </p>
          <button data-aos="fade-up" className="bg-sky-700 p-2 rounded-2xl hover:scale-110 transition">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={moonSurface}
        alt=""
        className="absolute bottom-0 left-0 h-36 brightness-50   w-full "
      />
      <div className="absolute bottom-0 right-0 w-full bg-gradient-to-b from-transparent from-20% to-black to-80% h-[20px] sm:h[50px] md:[60px]">
      </div>
    </div>
  );
};

export default Hero;
