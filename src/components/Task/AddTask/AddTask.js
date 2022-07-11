import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./AddTask.module.css";

const AddTask = () => {
  return (
    <Card className={classes["add-task"]}>
      <form>
        <input type="text" placeholder="write something..." />
        <Button> Add Task </Button>
      </form>
    </Card>
  );
};

export default AddTask;
