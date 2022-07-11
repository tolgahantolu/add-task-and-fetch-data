import { useState } from "react";
import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

const Task = () => {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (tName) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, { name: tName, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddTask onAddTask={addTaskHandler} />
      <TaskList tasks={taskList} />
    </>
  );
};
export default Task;
