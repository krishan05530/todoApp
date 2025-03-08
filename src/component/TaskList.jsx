import React from 'react'
import { useState } from 'react';
import TaskItem from './TaskItem';
import CompletedTaskItem from './CompletedTaskItem';
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const saveToDoList = (event) => {
    event.preventDefault();

    let todoname = event.target.todoname.value;

    if (!tasks.includes(todoname)) {
      let finaltodolist = [...tasks, todoname];
      setTasks(finaltodolist);
      console.log("final", finaltodolist)
    }
    else {
      alert("already exist");
    }
    event.target.todoname.value = ""; // Clear input after adding
  }

  return (
<div className=" flex-col  sm: items-center  p-4 w-full md:W-[80%] lg:w-[70%]">
      <h1 className='gap-2 p-3 border-b'>TO Do</h1>
      <form onSubmit={saveToDoList} className="flex justify-between ml-6 w-[720px] h-[178px] pt-[16px] pb-[16px] gap-[80px] border-t-[1.5px]">
        <input type='text' name="todoname" placeholder='enter the task' className=' text-left  bg-gradient-to-b from-[#3579371A] to-[#D0FFD21A] w-[667px] h-[146px] pt-[42px] pr-[20px] pl-[20px] gap-[48px]' />
        <button type="submit" className="w-[72px] h-6 mb-2 mt-24 bg-[#357937] text-white rounded-lg">
          Add Task
        </button>
      </form>
     
      <div>
        <ul>
          {
            tasks.map((task, index) => (
              <TaskItem key={index} indexNumber={index} task={task} tasks={tasks} setTasks={setTasks} setCompletedTask={setCompletedTask} completedTask={completedTask} />

            ))
          }
        </ul>
      </div>

      <div>
        <h1 className='border-b p-3'>Completed Task</h1>
        <ul>
          {
            completedTask.map((task, index) => (

              <CompletedTaskItem key={index} indexNumber={index} task={task} setTasks={setTasks} tasks={tasks} setCompletedTask={setCompletedTask} completedTask={completedTask} />
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default TaskList

