import React from 'react'
import { BsTranslate } from 'react-icons/bs';
import { FaTasks, FaStar, FaRegListAlt, FaPlus } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { FaS } from 'react-icons/fa6';
import { IoIosAdd } from "react-icons/io";
import profileImage from "../utilities/profileImage.jpeg"
const Sidebar = ({isOpen}) => {
  return (
  <aside className={`bg-gray-200 mt-14  p-4 min-h-screen w-64 ${isOpen ? "translate-x-0" : "-translate-x-64"}  fixed top-0 left-0  h-full shadow-md`} >

    <div>
    <img
  src={profileImage}
  alt="Profile"
  className="w-[118px] h-[118px] rounded-full aspect-square "
  loading="lazy"
/>
    </div>
  <h2 > Hey Krishan </h2>

  <nav>
    <ul className=''>
      <li className='flex items-center gap-2'>
      <BsListTask className='text-2xl'/>
       <span> All Task</span>
      </li>
      <li  className='flex items-center gap-2'>
        <FaTasks className="text-2xl" />
        <span>Today</span>
      </li>

      <li  className='flex items-center gap-2'>
        <FaStar/>
        <span>Important</span>
      </li>

      <li  className='flex items-center gap-2'>
        <FaRegListAlt/>
        <span>planned</span>
      </li>
    </ul>
  </nav>

  <div className='  mt-6'>
    <button className='flex items-center gap-2 p-2 bg-gray-300 rounded-lg'>
    <IoIosAdd />
    <span>Add List</span>
    </button>
  </div>

  <button className="mt-6 flex items-center justify-center w-full p-2 bg-green-500 text-white rounded-lg">
        <FaPlus className="mr-2" /> Add List
      </button>

  </aside>
  )
}

export default Sidebar
