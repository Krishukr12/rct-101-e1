import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count,setCount]=useState(1);
  // NOTE: do not delete `data-cy` key value pair
  const incrementCounter=()=>{
    setCount(count+1);
  }
  const decrementCounter=()=>{
    if(count>1){
      setCount(count-1);
    }
   
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={incrementCounter}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Counter;
