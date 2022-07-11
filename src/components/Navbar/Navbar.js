import Button from "../UI/Button";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h2> Tolgahan </h2>
      <Button>Project Info</Button>
    </div>
  );
};

export default Navbar;
