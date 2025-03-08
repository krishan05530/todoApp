import React from 'react'
import { useState } from 'react';
import { TiInputChecked } from "react-icons/ti";
import { FaStar, FaRegStar } from "react-icons/fa";
const CompletedTaskItem = ({
    index,
    indexNumber, task,setTasks,tasks, setCompletedTask,
    completedTask
}) => {
      const [starmarked, setStarMArked] = useState(false);




// function ToDolistItems({ value, indexNumber, todolist, setTodolist }) {
//   let [status, setStatus] = useState(false);
//   let deletRow = () => {
//     alert(indexNumber);
//     let finalData = todolist.filter((v, i) => (i !== indexNumber));
//     setTodolist(finalData);
//   }

//   let checkStatus = () => {
//     setStatus(!status);
//   }

//   return (
//     <li className={(status) ? 'completTodo' : ''} onClick={checkStatus}> 
//         {value} 
//     <span onClick={deletRow}>&times;</span></li>
//   )
// }


let [status, setStatus] = useState(false);
let deletRow = () => {
  alert(indexNumber);
  let finalData = completedTask.filter((v, i) => (i !== indexNumber));
  setCompletedTask(finalData);
}




const checkStar = () => {
  setStarMArked(!starmarked);
};

  return (
      <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center space-x-2">
                {/* <input type="checkbox" checked={isChecked} onClick={toggleComplete} /> */}
                <TiInputChecked className='bg-green-700 '/>
                <span className='line-through text-red-600'>{task}</span>
            </div>
            <div className='flex items-center space-x-2'>
            <button onClick={checkStar}>
                {starmarked ? <FaStar className="text-yellow-500" /> : <FaRegStar />}
            </button>
            <span onClick={deletRow}>&times;</span>
              </div>
          
        </div>
  )
}

export default CompletedTaskItem
