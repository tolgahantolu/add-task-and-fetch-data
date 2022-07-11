import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <Card className={classes.login}>
      <form>
        <label htmlFor="username"> Email: </label>
        <input id="username" type="email" />

        <label htmlFor="password"> Password: </label>
        <input id="password" type="password" />

        <Button> Login </Button>
      </form>
    </Card>
  );
};

export default Login;
