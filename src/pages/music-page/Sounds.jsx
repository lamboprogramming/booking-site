import React from 'react';

const Sounds = () => {
  return (
    <div>
    <div className="w-full mx-auto text-center ">
    <h1 className="p-12 text-3xl italic text-yellow-500 capitalize md:text-4xl lg:text-5xl">what they're listening to👂🏾 </h1>
    <h3 className="mb-5 text-2xl tracking-widest text-white capitalize md: md:text-3xl lg:text-4xl">Sound Selections</h3>
    <div className="text-center ">
        <span className="inline-block w-1 h-1 ml-1 bg-white rounded-full"></span>
        <span className="inline-block w-3 h-1 ml-1 bg-white rounded-full"></span>
        <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
        <span className="inline-block w-3 h-1 ml-1 bg-white rounded-full"></span>
        <span className="inline-block w-1 h-1 ml-1 bg-white rounded-full"></span>
    </div>
    </div> 
    </div>
  );
}

export default Sounds;
