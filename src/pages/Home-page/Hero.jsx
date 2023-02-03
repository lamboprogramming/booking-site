import React from 'react';
import background from '../../assets/nighttime.jpg'
import twin from '../../assets/twindj.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }
  return (
    <div className="min-h-screen hero bg-slate-400" style={backgroundImageStyle}> 
    <div className="flex-col hero-content lg:flex-row-reverse">
      <img src={twin} className="max-w-sm shadow-3xl rounded-xl lg:hidden" alt="
      #"/>
      <div className="text-center">
 
        <h1 className="text-5xl font-bold font-[Poppins] tracking-wider text-indigo-400 md:text-7xl text-center mt-4 shadow-xl hidden md:block">DJ LuChainz</h1>
   
        <p className="py-6 text-xl italic font-semibold leading-10 tracking-widest text-white uppercase shadow-md md:text-2xl lg:text-3xl md:mb-4">Private Events, Weddings, Baby Showers, Corporate Events, Retreats, Grand Openings, Holiday Parties, Gaming Events, & More !  </p>
        <Link to="/contact">
        <button className="lg:w-44 px-4 py-[.5%] text-2xl font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[20] mr-1 hover:rounded-3xl duration-500 nav-links tracking-widest mt-3 md:mt-0">Contact</button>
        </Link>
      </div>
    </div>
    

   
      </div>
      
  );
}

export default Hero;
