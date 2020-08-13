import React from "react";
import glass from "../../assets/images/glass.svg";
import people from "../../assets/images/people.svg";
import chat from "../../assets/images/chat.svg";
import classes from "./StartPageLeft.module.css";

const startPageLeft = () => (
  <div className={classes.left}>
    <div className={classes.leftText}>
      <div className={classes.text}>
        <img className={classes.icons} src={glass} alt="glass" />
        <p>Follow your interests.</p>
      </div>
      <div className={classes.text}>
        <img className={classes.icons} src={people} alt="people" />
        <p>Hear what people are talking about.</p>
      </div>
      <div className={classes.text}>
        <img className={classes.icons} src={chat} alt="chat" />
        <p>Join the conversation.</p>
      </div>
    </div>
  </div>
);

export default startPageLeft;
