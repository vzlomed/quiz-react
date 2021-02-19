import React from "react";
import "./AnswersList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => (
  <ul className="AnswersList">
    {props.answers.map((answer, index) => {
      return (
        // RENDERING ANSWERS
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
          questionCompleted={
            props.rightAnswerId === answer.id && props.questionCompleted
              ? true
              : false
          }
        ></AnswerItem>
      );
    })}
  </ul>
);

export default AnswersList;
