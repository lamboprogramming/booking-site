import React from 'react';
import afro from '../../assets/tems.png'
import hiphop from '../../assets/migos.png'
import pop from '../../assets/pop2.png'
import spanish from '../../assets/baabaa.jpg'
import { Link } from 'react-router-dom'



const Cards = () => {
  return (
    <div className="max-w-full p-5 m-20 text-white md:m-10 h-min rounded-3xl bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
    <div className="grid grid-cols-1 gap-10 md:p-10 md:grid-cols-2 lg:grid-cols-4">

    {/* Card #1 Carribean*/}
      <div className="overflow-hidden border border-gray-500 rounded-t-full shadow-lg">
      <img className="w-full" src={afro} alt="tems"/>
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold ">
        {/* BUTTON TO CARRIBEAN MUSIC */}
        <Link to="/music">
        <button className="text-white lg:w-36 px-6 py-2 text-lg font-bold border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest hover:border-white">Carribean</button>
        </Link>
        </div>
      </div>
      {/* HASHTAGS TO CARRBIBEAN MUSIC */}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-4 ">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#afrobeats</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#soca</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#kompa</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#dancehall</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#reggae</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#calypso</span>
      </div>
      </div>
      

    {/* Card #2 Spanish */}
      <div className="overflow-hidden border border-gray-500 rounded-t-full shadow-lg">
      <img className="w-full" src={spanish} alt="badbunny"/>
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold">
    {/* LINK TO SPANISH MUSIC */}
        <Link to="/music">
        <button className="lg:w-36 px-6 py-2 text-lg font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest">Espanol</button>
        </Link>
        </div> 
      </div>
      {/* HASHTAGS TO SPANISH MUSIC */}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#reggateton</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#denbow</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#bachata</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#salsa</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#latintrap</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#meringue</span>
      </div>
      </div>

      
    {/* Card #3 Hip Hop*/}
      <div className="overflow-hidden border border-gray-500 rounded-t-full shadow-lg">
      <img className="w-full" src={hiphop} alt="migos"/>
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold">
    {/* BUTTON TO HIPHOP MUSIC */}
        <Link to="/music">
        <button className="lg:w-36 px-6 py-2 text-lg font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest">Hip Hop</button>
        </Link>
        </div>
      </div>
    {/* HASHTAGS TO HIPHOP MUSIC */}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#trap</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#r&b</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#soul</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#rap</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#hiphop</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#drill</span>
      </div>
      </div>

      
    {/* Card #4 Pop*/}
      <div className="overflow-hidden border border-gray-500 rounded-t-full shadow-lg">
      <img className="w-full" src={pop} alt="Ari" />
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold">
    {/* BUTTON TO POP MUSIC PAGE*/}
        <Link to="/music">
        <button className="lg:w-36 px-6 py-2 text-lg font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest"> House</button>
        </Link>
        </div>
      </div>
      {/* HASHTAGS TO POP MUSIC PAGE*/}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold text-white rounded-full text-md">#rock</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#country</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#pop</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#house</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#dubstep</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#techno</span>
      </div>
      </div>
    </div>
    </div>
    
  );
}

export default Cards;
