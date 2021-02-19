import React from "react";
import "./AnswerItem.scss";

const AnswerItem = (props) => {
  const cls = ["AnswerItem"];

  if (props.state) {
    cls.push(props.state);
  }

  if (props.questionCompleted) {
    cls.push("success");
  }

  return (
    // ONE ANSWER
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
