import React, { useState } from "react";
import styles from "./addTask.module.css";
import styled from "styled-components";
const Button = styled.button`
  background-color: black;
  color: white;
`;
const AddTask = ({ addTask }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [number, setNumber] = useState("");
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        value={number}
        type="text"
        placeholder="Add Task..."
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <Button
        data-cy="add-task-button"
        onClick={() => {
          addTask(number);
          setNumber("");
        }}
      >
        +
      </Button>
    </div>
  );
};

export default AddTask;
