import { useState } from "react";
import Button from "../UI/Button";
import InfoModal from "../UI/InfoModal";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [info, setInfo] = useState(false);

  const infoHandler = (e) => {
    e.preventDefault();

    setInfo(true);
  };

  const onConfirm = () => {
    setInfo(null);
  };

  return (
    <>
      {info && (
        <InfoModal
          title="Add Task and Fetch Data Project"
          message="To log in to the application, enter any text with @ in the email section and at least 6-digit content in the password section. Tolgahan | Frontend Developer"
          onConfirm={onConfirm}
        />
      )}
      <div className={classes.navbar}>
        <h2> Tolgahan </h2>
        <Button onClick={infoHandler}>Project Info</Button>
      </div>
    </>
  );
};

export default Navbar;
