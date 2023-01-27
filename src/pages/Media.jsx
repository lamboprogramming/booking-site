import React from 'react';
import x1 from '../assets/usplash.jpg';
import x2 from '../assets/usplash2.jpg';
import x3 from '../assets/usplash3.jpg';


const Media = () => {
  return (
   <div className='bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500'>
   
   {/* Carousel 1 */}
   <h3 className="pt-4 mb-5 ml-2 text-2xl tracking-widest text-left text-black capitalize md: md:text-3xl lg:text-4xl">NLMA Halloween Party</h3>
   <div className="ml-2 text-left ">
       <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
       <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
       <span className="inline-block w-40 h-1 bg-black rounded-full"></span>
       <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
       <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
   </div>
  <div className="m-4 carousel carousel-center rounded-box ">
  <div className="carousel-item">
    <img src={x1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x1} alt="Pizza" />
  </div> 
  </div>


  {/* Carousel 2 */}
  <h3 className="pt-2 mb-5 ml-2 text-2xl tracking-widest text-left text-black capitalize md: md:text-3xl lg:text-4xl">Iguana's New Years 23'</h3>
  <div className="ml-2 text-left ">
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-40 h-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
  </div>
  <div className="m-4 carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src={x2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x2} alt="Pizza" />
  </div> 
  </div>

  
  {/* Carousel 3 */}
  <h3 className="pt-2 mb-5 ml-2 text-2xl tracking-widest text-left text-black capitalize md: md:text-3xl lg:text-4xl">HCCS Community Event</h3>
  <div className="ml-2 text-left ">
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-40 h-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
  </div>
  <div className="m-4 carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src={x3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={x3} alt="Pizza" />
  </div> 
  </div>



  </div>
 
  );
}

export default Media;
