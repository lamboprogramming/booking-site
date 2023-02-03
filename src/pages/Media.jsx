import React from 'react';
import nl1 from '../assets/nl1.jpg';
import nl2 from '../assets/nl2.jpg';
import nl3 from '../assets/nl3.jpg';
import nl4 from '../assets/nl4.jpg';
import nl5 from '../assets/nl5.jpg';
import nl6 from '../assets/nl6.jpg';
import nl7 from '../assets/nl7.jpg';
import nl8 from '../assets/nl8.jpg';
import nl9 from '../assets/nl9.jpg';
import { Player } from 'video-react';

    

const Media = () => {
  return (
   
    
   <div className='bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500'>
    
   <Player>
   <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
 </Player>
 
   
   {/* Carousel 1 Banner */}
   <h3 className="pt-4 mb-5 ml-2 text-2xl tracking-widest text-left text-black capitalize md: md:text-3xl lg:text-4xl">NLMA Halloween Party</h3>
   <div className="ml-2 text-left shadow-xl shadow-black">
       <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
       <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
       <span className="inline-block w-40 h-1 bg-black rounded-full"></span>
       <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
       <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
   </div>
      {/* Carousel 1 */}
  <div className="gap-6 m-4 bg-black carousel carousel-center rounded-box ">
  <div className="carousel-item">
    <img src={nl4} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl7} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl8} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl6} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl9} alt="Pizza" />
  </div> 
  </div>


  {/* Carousel 2 Banner */}
  <h3 className="pt-2 mb-5 ml-2 text-2xl tracking-widest text-left text-black capitalize md: md:text-3xl lg:text-4xl">Iguana's New Years 23'</h3>
  <div className="ml-2 text-left shadow-xl shadow-black">
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-40 h-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
  </div>

  {/* Carousel 2 */}
  <div className="gap-6 m-4 bg-black carousel carousel-center rounded-box ">
  <div className="carousel-item">
    <img src={nl4} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl7} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl8} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl6} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={nl9} alt="Pizza" />
  </div> 
  </div>


  
  {/* Carousel 3 Banner */}
  <h3 className="pt-2 mb-5 ml-2 text-2xl tracking-widest text-left text-black capitalize md: md:text-3xl lg:text-4xl">HCCS Community Event</h3>
  <div className="ml-2 text-left shadow-xl shadow-black">
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-40 h-1 bg-black rounded-full"></span>
      <span className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
      <span className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
  </div>
  
    {/* Carousel 3 */}
    <div className="gap-6 m-4 bg-black carousel carousel-center rounded-box ">
    <div className="carousel-item">
      <img src={nl4} alt="Pizza" />
    </div> 
    <div className="carousel-item">
      <img src={nl7} alt="Pizza" />
    </div> 
    <div className="carousel-item">
      <img src={nl1} alt="Pizza" />
    </div> 
    <div className="carousel-item">
      <img src={nl2} alt="Pizza" />
    </div> 
    <div className="carousel-item">
      <img src={nl8} alt="Pizza" />
    </div> 
    <div className="carousel-item">
      <img src={nl3} alt="Pizza" />
    </div> 
    <div className="carousel-item">
      <img src={nl6} alt="Pizza" />
    </div> 
    <div className="carousel-item">
      <img src={nl9} alt="Pizza" />
    </div> 
    </div>
  


  </div>
 
  );
}

export default Media;
