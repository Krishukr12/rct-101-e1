import React, { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({task}) => {
  // sample values to be replaced
  const a=task.length;
 const [state,setState]=useState(a);
 
  let unCompletedTask = 2;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task">You have {unCompletedTask} of </b>
      <b data-cy="header-total-task">{state} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
