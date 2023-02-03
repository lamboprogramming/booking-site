import React from 'react';
import Testimonials from '../Testimonials';
import Hero from '../Hero';
import Social from '../Social';


const Home = () => {
   
 
  return (
    <div>
    <div className="bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 ">
        <Hero />
        <Social />
        <Testimonials />
       
    </div>
    </div>

   
  )
}

export default Home;
