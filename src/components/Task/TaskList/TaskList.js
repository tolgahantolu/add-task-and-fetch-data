import Card from "../../UI/Card";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <Card className={classes["task-list"]}>
      <ul>
        {/* Task.js */}
        {props.tasks.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskList;
