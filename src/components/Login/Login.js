import { useState } from "react";

import Task from "../Task/Task";
import Button from "../UI/Button";
import Card from "../UI/Card";
import FetchData from "./FetchData";
import classes from "./Login.module.css";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTask, setShowTask] = useState(false);

  const onLoginHandler = (e) => {
    e.preventDefault();

    if (
      enteredEmail.trim().includes("@") &&
      enteredPassword.trim().length > 5
    ) {
      setIsLoggedIn(true);
      console.log("Giriş başarılı!");
      setShowTask(true);
    }
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  return (
    <>
      {!showTask && (
        <>
          <Card className={classes.login}>
            <form>
              <label htmlFor="email"> Email: </label>
              <input
                id="email"
                type="email"
                placeholder="email"
                onChange={emailChangeHandler}
              />

              <label htmlFor="password"> Password: </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                onChange={passwordChangeHandler}
              />

              <Button onClick={onLoginHandler}> Login </Button>
            </form>
          </Card>
          <FetchData />
        </>
      )}
      {showTask && <Task />}
    </>
  );
};

export default Login;
