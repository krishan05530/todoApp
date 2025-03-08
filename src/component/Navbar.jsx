import React from 'react'
import { MdLightMode } from "react-icons/md";
import { FaBars, FaSearch, FaThLarge, FaMoon, FaSun } from "react-icons/fa";
import logo from  "../utilities/logo.png";

const Navbar = ({ toggleSidebar, darkMode, setDarkMode }) => {
    return (
        <nav className=' flex justify-between itmes-center shadow-md p-2'>
            {/* left side f navbar */}
            <div className='flex items-center space-x-4'>
                <button onClick={toggleSidebar} className="text-2xl p-2">
                    <FaBars />
                </button>
                <img
              src={logo}
              alt="logo"
              loading="lazy"
            /> 
            </div>

            {/* right icon */}
            <div  className='flex items-center space-x-4'>
                <FaSearch className=" text-4xl p-2" />
                <FaThLarge className="text-4xl p-2" />
                <button onClick={() => setDarkMode(!darkMode)} className="text-2xl p-2">
                    {darkMode ? <MdLightMode className='bg-black' /> : <FaMoon className='' />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
