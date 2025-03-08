import React from 'react'
import { BsTranslate } from 'react-icons/bs';
import { FaTasks, FaStar, FaRegListAlt, FaPlus } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { FaS } from 'react-icons/fa6';
import { IoIosAdd } from "react-icons/io";
import profileImage from "../utilities/profileImage.jpeg"


const Sidebar = ({ isOpen }) => {
  return (
    <aside className={` mt-24  p-4 min-h-screen w-64 ${isOpen ? "translate-x-0" : "-translate-x-64"}  fixed top-0 left-0  h-full shadow-md`} >

      <div className='  relative'>
        <div className=' flex justify-center mt-[-20px]'>
          <img
            src={profileImage}
            alt="Profile"
            className="w-[118px] h-[118px] rounded-full aspect-square "
            loading="lazy"
          />
        </div>
        <h2 className='flex justify-center gap-2 mt-2'> Hey Krishan </h2>

        <nav className='mt-6 '>
          <ul className='flex flex-col items-left ml-2 gap-4'>
            <li className='flex items-center gap-4'>
              <BsListTask className='text-2xl' />
              <span> All Task</span>
            </li>
            <li className='flex items-center gap-4'>
              <FaTasks className="text-2xl" />
              <span>Today</span>
            </li>

            <li className='flex items-center gap-4'>
              <FaStar />
              <span>Important</span>
            </li>

            <li className='flex items-center gap-4'>
              <FaRegListAlt />
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
      </div>


    </aside>
  )
}


// const Sidebar = ({ isOpen }) => {
//   return (
//     <aside
//       className={`bg-white mt-24 p-4 min-h-screen 
//                   fixed top-0 left-0 h-full shadow-md 
//                   transform transition-transform duration-300 
//                   ${isOpen ? "translate-x-0" : "-translate-x-full"} 
//                   w-[30%] md:w-[30%] lg:w-[20%] xl:w-[15%]"`}
//     >
//       <div className="bg-[#EEF6EF] relative">
//         {/* Profile Image */}
//         <div className="flex justify-center mt-[-20px]">
//           <img
//             src={profileImage}
//             alt="Profile"
//             className="w-[118px] h-[118px] rounded-full aspect-square"
//             loading="lazy"
//           />
//         </div>
//         <h2 className="flex justify-center gap-2 mt-2">Hey Krishan</h2>

//         {/* Navigation Menu */}
//         <nav className="mt-6 bg-[#EEF6EF]">
//           <ul className="flex flex-col items-left ml-2 gap-4">
//             <li className="flex items-center gap-4">
//               <BsListTask className="text-2xl" />
//               <span>All Tasks</span>
//             </li>
//             <li className="flex items-center gap-4">
//               <FaTasks className="text-2xl" />
//               <span>Today</span>
//             </li>
//             <li className="flex items-center gap-4">
//               <FaStar />
//               <span>Important</span>
//             </li>
//             <li className="flex items-center gap-4">
//               <FaRegListAlt />
//               <span>Planned</span>
//             </li>
//           </ul>
//         </nav>

//         {/* Add List Buttons */}
//         <div className="mt-6">
//           <button className="flex items-center gap-2 p-2 bg-gray-300 rounded-lg w-full">
//             <IoIosAdd />
//             <span>Add List</span>
//           </button>
//         </div>

//         <button className="mt-6 flex items-center justify-center w-full p-2 bg-green-500 text-white rounded-lg">
//           <FaPlus className="mr-2" /> Add List
//         </button>
//       </div>
//     </aside>
//   );
// };

export default Sidebar;


