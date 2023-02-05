import React from 'react';
import ReactPlayer from 'react-player';

const Mixes = () => {
  return (
   
  <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-col-1 lg:gap-2 bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
     {/* SOUNDCLOUD #1 */}
     <div className="flex items-center justify-center p-8 ">
     <ReactPlayer url="https://soundcloud.com/djluchainz/trap-mix-luchainz-x-lambo" />
     </div>

      {/* SOUNDCLOUD #2 */}
     <div className="flex items-center justify-center p-8">
     <ReactPlayer url="https://soundcloud.com/djluchainz/e-bos-birthday-mix" />
     </div>

      {/* SOUNDCLOUD #3 */}
     <div className="flex items-center justify-center p-8">
     <ReactPlayer url="https://soundcloud.com/djluchainz/new-pop-mix" />
     </div>

      {/* SOUNDCLOUD #4 */}
     <div className="flex items-center justify-center p-8">
     <ReactPlayer url="https://soundcloud.com/djluchainz/radio-ready" />
     </div>
     
      {/* Mix #1 
     <div className="flex items-center justify-center p-2">
     <ReactPlayer url="https://www.mixcloud.com/globalsoulradio/afrobeatsfreshmix-by-stevie-street-30th-november-2022/" />
     </div>*/}
  
     </div>
 

  );
}

export default Mixes;
