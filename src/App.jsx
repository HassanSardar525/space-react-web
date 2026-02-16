import React from 'react'
import BgEarth from "./assets/earth-bg.mp4";
import Navbar from './components/navbar';
import Hero from './components/Hero';
import HeroCards from './components/HeroCards';
import Banner1 from './components/banners/Banner1';
import Banner2 from './components/banners/Banner2';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <div>
      <div className="relative h-[650px] ">
        <video  autoPlay loop muted  src={BgEarth} className=' h-[700px] fixed top-0 right-0 w-full 
        object-cover z-[-1]'>
        </video>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <HeroCards></HeroCards>
      <Banner1></Banner1>
      <Banner2></Banner2>
      <Footer></Footer>


      
    </div>
  )
}

export default App