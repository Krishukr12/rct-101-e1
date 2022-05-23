import React, { useState } from "react";
import styles from "./tasks.module.css";
import styled from "styled-components";
import Counter from "../Counter/Counter";
const Div =styled.div`
height:40px;
width:90%;
border:1px solid teal;
display:flex;
justify-content:space-between;
font-size:30px;
margin:10px;
`
const Div2=styled.div`
display:flex;
justify-content:space-around;
gap:10px;
font-size:20px;
`
const Tasks = ({task}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
          {task.map((task)=>{
            return <Div>{task}
            <Div2>
              <Counter/>
            </Div2>
            </Div>
          })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
