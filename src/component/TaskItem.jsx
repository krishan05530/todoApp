import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
const TaskItem = ({index,
     indexNumber,task,tasks,
      setTasks ,setCompletedTask,
      completedTask ,starmarked,
      setStarMArked}) => {

const toggleComplete = () => {
    // Get the completed task
    const completeddata = tasks[indexNumber];

    // Update completed task list using functional update
    setCompletedTask((prev) => {
      const updatedTasks = [...prev, completeddata];
      console.log("Updated Completed Tasks:", updatedTasks); // Logs correct data
      return updatedTasks;
    });

    // Remove completed task from tasks list
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexNumber));
  };

  useEffect(() => {
    console.log("Completed Tasks List Updated:", completedTask);
  }, [completedTask]);

//   Toggle star marking
  const checkStar = () => {
    setStarMArked(!starmarked);
  };



  return (
<div className="flex items-center justify-between p-2 border-b">
<div className="flex items-center space-x-2">
  <input type="checkbox" onChange={toggleComplete} />
  <span>{task}</span>
</div>
<button onClick={checkStar}>
  {starmarked ? <FaStar className="text-yellow-500" /> : <FaRegStar />}
</button>
</div>
  )
}

export default TaskItem



