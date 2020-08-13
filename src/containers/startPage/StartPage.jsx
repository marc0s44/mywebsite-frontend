import React from "react";
import classes from "./StartPage.module.css";
import StartPageLeft from "../../components/StartPageLeft/StartPageLeft";
import Login from "../../components/Login/Login";

const startPage = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <StartPageLeft />
        <div className={classes.right}>
          <Login />
        </div>
      </div>
    </React.Fragment>
  );
};

export default startPage;
