import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome ,FaSatellite } from "react-icons/fa6";
import wave from "../assets/wave.gif";


const ServiceData = [
    {
      title: "HST",
      content: "300-1500km",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      icon: <FaSpaceAwesome className="text-7xl" />,
      aosDelay: "300",
    },
    {
      title: "ISS",
      content: "500-1500km",
      description:
        ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
      icon: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "GPS",
      content: "300-1500km",
      description:
        "Part of the Global Positioning System (GPS) used for navigation.",
      icon: <FaSatellite className="text-7xl" />,
      aosDelay: "700",
    },
  ];

const HeroCards = () => {
  return (
    <>
    <section className='bg-black min-h-[400px] text-white'>
        <div className="container ">
            <div className="z-10 relative top-5 grid grid-cols-1 sm:grid-cols-3 gap-9">
                {ServiceData.map((data, index) => {
                    return (
                         // Adding a unique key here
                       <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.title} className=' min-h-[240px]  flex flex-col justify-center items-center text-center p-6 bg-sky-700/40 backdrop-blur-sm rounded-3xl space-y-2 '>
                        {data.icon}
                        <h1 className=' text-2xl'>{data.title}</h1>
                        <p className=''>{data.content}</p>
                        <p>{data.description}</p>
                       </div>
                    )
                })}

            </div>
            <img src={wave} alt=""
            className='-translate-y-24 h-[200px] w-full object-cover mix-blend-screen'  />
        </div>
    </section>
    </>
  )
}

export default HeroCards