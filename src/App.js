
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
    <div className={`${darkMode ? " bg-gray-900 text-white":"bg-white text-black "} min-h-screen w-full`}>
     <Navbar  toggleSidebar={toggleSidebar} darkMode={darkMode} setDarkMode={setDarkMode} />

    <div className="flex top-5 w-[20%]">
      <Sidebar isOpen={sidebarOpen}/>
    </div>

  <div className="flex justify-center items-center w-[80%]">
    
  <TaskList/> 
  </div>

    </div>
  );
}

export default App;



// import React from "react";

// function App() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
//     </div>
//   );
// }

// export default App;