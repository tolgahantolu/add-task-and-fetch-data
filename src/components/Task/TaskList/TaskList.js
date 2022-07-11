import Card from "../../UI/Card";
import classes from "./TaskList.module.css";

const TaskList = () => {
  return (
    <Card className={classes["task-list"]}>
      <ul>
        <li>
          <p>Learn React and Redux</p>
        </li>
        <li>
          <p>GraphQL API Project (MASTER)</p>
        </li>
      </ul>
    </Card>
  );
};

export default TaskList;
