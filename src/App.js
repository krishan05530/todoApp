
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import TaskList from './component/TaskList';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }


  return (
    <div className={`${darkMode ? " bg-gray-900 text-white" : "bg-white text-black "} min-h-screen w-full `} >
      <Navbar toggleSidebar={toggleSidebar} darkMode={darkMode} setDarkMode={setDarkMode}  className="  w-full xs:w-full sm:w-full md:w-full"/>

      <div className={`${darkMode ? " bg-gray-900 text-white"  : "bg-white text-black "}flex ml-6 justify-end top-5 w-[20%] md:w-[15%] lg:w-[12%]`}>
        <Sidebar isOpen={sidebarOpen} />
      </div>

      <div className="flex  justify-center items-center w-full p-4">
        <TaskList />
      </div>

    </div>
  );




  // return (
  //   <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen w-full flex`}>
      
  //     {/* Sidebar (Fixed Width) */}
  //     <Sidebar isOpen={sidebarOpen} className="w-[20%] md:w-[15%] lg:w-[12%]" />
  
  //     {/* Main Content */}
  //     <div className="flex flex-col w-[80%] md:w-[85%] lg:w-[88%]">
        
  //       {/* Navbar (Full Width) */}
  //       <Navbar toggleSidebar={toggleSidebar} darkMode={darkMode} setDarkMode={setDarkMode} className="w-full" />
  
  //       {/* Main Content Wrapper */}
  //       <div className="flex justify-center items-center w-full p-4">
  //         <TaskList className="w-[90%] md:w-[80%] lg:w-[70%]" />
  //       </div>
  
  //     </div>
  
  //   </div>
  // );
  
}

export default App;

