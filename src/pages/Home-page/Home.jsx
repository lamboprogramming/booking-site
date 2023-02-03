import React from 'react';
import Testimonials from './Testimonials';
import Hero from './Hero';
import Social from '../Social'
import Footer from '../Footer';


const Home = () => {
   
 
  return (
    
    <div className='bg-black'>
        <Hero />
        <Social /> 
        <Testimonials /> 
        <Footer /> 
    </div>
   

   
  )
}

export default Home;
