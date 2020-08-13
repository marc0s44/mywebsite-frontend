import React from "react";
import classes from "./Input.module.css";

const input = (props) => (
  <div className={classes.input_container}>
    <label>email</label>
    <input className={classes.my_input} type="text"></input>
  </div>
);

export default input;
