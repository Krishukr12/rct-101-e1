import React, { useState } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask]=useState([]);
  const addTask=(value)=>{
      setTask([...task,value]);
     
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader task={task}/>
      {/* Add Task */}
   <AddTask addTask={addTask}/>
      {/* Tasks */}
     <Tasks task={task}/>
    </div>
  );
};

export default TaskApp;
