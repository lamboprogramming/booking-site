import { useState } from "react";
import logo from "../assets/logo1.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-black shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <img className="hover:scale-125"src={logo} alt="logo" width="130"/>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 text-center justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 nav-links font-extrabold capitalize text-xl  ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center px-4 pt-1 pb-2 mt-2 space-y-8 tracking-widest md:flex md:space-x-6 md:space-y-0 bg-gradient-to-r from-fuchsia-700 to-indigo-500 rounded-3xl md:bg-black md:rounded-none md:bg-gradient-to-r md:from-transparent md:to-transparent">
                            <Link to="/">
                            <li className="py-1 text-white hover:scale-125">Home
                            </li>
                            </Link>
                           
                            <Link to="/music">
                            <li className="py-1 text-white hover:text-indigo-200 hover:scale-125">Music
                            </li>
                            </Link>
                            
                            <Link to="/media">
                            <li className="py-1 text-white hover:text-indigo-200 hover:scale-125">Media
                            </li>
                            </Link>
                            
                            <Link to="/contact">
                            <li className="py-1 text-white hover:text-indigo-200 hover:scale-125">Contact
                            </li>
                            </Link>
                          
                          
                        </ul>

                     
                    </div>
                </div>
               
            </div>
        </nav>
  );
}

export default Navbar;
