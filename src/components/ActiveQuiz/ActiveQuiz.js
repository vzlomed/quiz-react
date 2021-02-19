import React from "react";
import "./ActiveQuiz.scss";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp; {props.question}
        </span>
        <small>
          {props.answerNumber} of {props.quizLength}
        </small>
      </p>
      {props.photo !== null ? (
        <img alt="" className="thumbnail" src={props.photo}></img>
      ) : null}
      <AnswersList
        answers={props.answers}
        rightAnswerId={props.rightAnswerId}
        onAnswerClick={props.onAnswerClick}
        state={props.state}
        questionCompleted={props.questionCompleted}
      ></AnswersList>
    </div>
  );
};

export default ActiveQuiz;
