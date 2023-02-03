import React from 'react'
import nlma from '../../assets/nlma-web.png'
import tck from '../../assets/tck.png'
import iguana from '../../assets/iguana.png'
import hccs from '../../assets/hccs.png'
import sfc from '../../assets/sfc.png'
import msz from '../../assets/msz.png'

const Testimonials = () => {
  return (
    <div>
    
    {/* Testimonials Section */}
    <div className="w-full px-5 py-12 text-gray-800 border-t border-b border-gray-200 bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 md:py-20">
        <div className="w-full max-w-6xl mx-auto font-[Abel]">
          
            <div className="items-start -mx-3 md:flex">
                <div className="px-3 md:w-1/3">
                    <div className="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center w-full mb-4">
                            <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                <img src={nlma} className="h-10" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="text-sm font-bold tracking-wider text-gray-600 uppercase ">Next Level Martial Arts</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="mr-1 text-lg italic font-bold leading-none text-gray-400">"</span> The kids love it every time! <span className="ml-1 text-lg italic font-bold leading-none text-gray-400">"</span></p>
                        </div>
                    </div>
                    <div className="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center w-full mb-4">
                            <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                <img src={tck} alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="text-sm font-bold tracking-wider text-gray-600 uppercase ">TCK Mixed Martial Arts</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="mr-1 text-lg italic font-bold leading-none text-gray-400">"</span> DJ Finn is the best <span className="ml-1 text-lg italic font-bold leading-none text-gray-400">"</span></p>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center w-full mb-4">
                            <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                <img src={iguana} alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="text-sm font-bold tracking-wider text-gray-600 uppercase ">Iguana Lounge NYC</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="mr-1 text-lg italic font-bold leading-none text-gray-400">"</span> I was supposed to leave hours ago but I knew every song you kept playing and I couldn't 😩 <span className="ml-1 text-lg italic font-bold leading-none text-gray-400">"</span></p>
                        </div>
                    </div>
                    <div className="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center w-full mb-4">
                            <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                <img src={hccs} alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="text-sm font-bold tracking-wider text-gray-600 uppercase ">HCCS Charter School</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="mr-1 text-lg italic font-bold leading-none text-gray-400">"</span> You and your brother play the perfect music, I can tell you've been doing this for awhile <span className="ml-1 text-lg italic font-bold leading-none text-gray-400">"</span></p>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center w-full mb-4">
                            <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                <img src={msz} alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="text-sm font-bold tracking-wider text-gray-600 uppercase ">Suite 215</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="mr-1 text-lg italic font-bold leading-none text-gray-400">"</span>Pleasure to have you, you're welcomed anytime<span className="ml-1 text-lg italic font-bold leading-none text-gray-400">"</span></p>
                        </div>
                    </div>
                    <div className="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center w-full mb-4">
                            <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                                <img src={sfc} alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="text-sm font-bold tracking-wider text-gray-600 uppercase ">St Francis College</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="mr-1 text-lg italic font-bold leading-none text-gray-400">"</span>You really know how to get the crowd going - I see why they keep asking for you<span className="ml-1 text-lg italic font-bold leading-none text-gray-400">"</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Testimonials;
