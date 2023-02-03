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
    <div className=" min-h-fit hero" style={backgroundImageStyle}> 
    <div className="flex-col hero-content lg:flex-row-reverse">
      <img src={twin} className="max-w-sm shadow-3xl rounded-xl lg:hidden" alt="
      #"/>
      <div className="text-center backdrop-brightness-50">
 
        <h1 className="text-5xl font-bold font-[Abel] tracking-wider text-yellow-300 md:text-7xl text-center mt-4 shadow-xl hidden md:block ">DJ LuChainz</h1>
   
        <p className="py-6 text-xl italic font-semibold leading-10 tracking-widest text-white uppercase shadow-md md:text-2xl lg:text-3xl md:mb-4 font-[Abel] p-4">Weddings, Baby Showers, Birthday's, Game Night's, Corporate Events, Grand Openings, Holiday Festivals, Gaming Events, & More !  </p>
        <Link to="/contact">
        <button className="lg:w-44 px-4 py-[.5%] text-xl font-bold text-white border-2 border-white rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[20] mr-1 hover:rounded-3xl duration-500 nav-links tracking-widest mt-3 md:mt-0 mb-6 font-[Abel]">Contact</button>
        </Link>
     
      </div>
      
    </div>
    
    

   
      </div>
      
  );
}

export default Hero;
