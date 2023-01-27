import React from 'react';
import background from '../assets/nightnyc.png'
import twin from '../assets/twindj.png'
import { Link } from 'react-router-dom'
import Testimonials from './Testimonials';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }
 
  return (
    
    <div className="grid lg:grid-cols-1 font-[Poppins] lg:grid-cols-2 " style={backgroundImageStyle} >
    <span className="font-[Poppins] text-4xl font-bold tracking-wider text-violet-700 md:text-7xl text-center overline mt-4 lg:mt-8"> DJ LuChainz</span>
    <div className="grid py-1 m-4 leading-10 text-center">
 
     
     
    
     <p className="text-xl italic leading-10 tracking-widest text-white uppercase shadow-md md:text-2xl lg:text-3xl md:mb-4">Kompa, Afrobeats, Bachata, Reggaeton, Denbow, Rap, Hip Hop, Soul, Reggae, Dancehall, Pop, Alternative, Funk & more... </p>
      
     <Link to="/contact">
     <button className="lg:w-44 px-4 py-[.5%] text-2xl font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[20] mr-1 hover:rounded-3xl duration-500 nav-links tracking-widest mt-3 md:mt-0">Contact</button>
     </Link>
    
   
      </div>
      <div className="p-5 shadow-sm lg:hidden">
      <img src={twin} alt="twindj"/>
      </div>
      
      <Testimonials />
    </div>
  )
}

export default Home;
