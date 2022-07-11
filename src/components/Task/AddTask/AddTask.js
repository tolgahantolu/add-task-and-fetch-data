import { useState } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (enteredTask.trim().length === 0) {
      alert("Please anter a valid text.");
      return;
    }

    props.onAddTask(enteredTask); // Task.js

    setEnteredTask("");
  };

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  return (
    <Card className={classes["add-task"]}>
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          value={enteredTask}
          placeholder="write something..."
          onChange={taskChangeHandler}
        />
        <Button type="submit"> Add Task </Button>
      </form>
    </Card>
  );
};

export default AddTask;
