import React from 'react'
import { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
 const [completedTask, setCompletedTask] = useState([]);
 const [starmarked,setStarMArked ] = useState(false);

 

const saveToDoList = (event) => {
  event.preventDefault();
  let todoname = event.target.todoname.value.trim();

  
  if (!tasks.includes(todoname)) {
    let finaltodolist = [...tasks, todoname];
    setTasks(finaltodolist);
    console.log("final",finaltodolist) 
  }else{
    alert("Task already exists!");
    return;
  }

   setTasks([...tasks, todoname]); // Add new task to tasks list
    event.target.todoname.value = ""; // Clear input after adding
}

  return (
    <div className='p-4 '>
      <h1>TO Do</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name="todoname" placeholder='enter the task'/>
        <button type='submit'> Add Task</button>
      </form>


      <div>
        <ul>
         {
          tasks.map((task,index)=>(
            <TaskItem key ={index} indexNumber={index} task={task}  tasks={tasks}  setTasks={setTasks} setCompletedTask={setCompletedTask} completedTask={completedTask} starmarked={starmarked} setStarMArked={setStarMArked} />
            // <TaskItem key ={index} indexNumber={index} task={task}  tasks={tasks}  setTasks={setTasks} setCompletedTask={setCompletedTask} completedTask={completedTask}  />
          ))
         }
        </ul>
      </div>

      <div>
        <h1>Completed Task</h1>
        <ul>
         {
          completedTask.map((task,index)=>(
          
            <TaskItem key ={index} indexNumber={index} task={task}  tasks={completedTask}  setTasks={setCompletedTask} setCompletedTask={setCompletedTask} completedTask={completedTask}  />
          ))
         }
        </ul>
      </div>

    </div>
  )
}

export default TaskList


