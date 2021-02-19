import React from "react";
import "./FinishedQuiz.scss";

const FinishedQuiz = (props) => {
  return (
    <div className="FinishedQuiz">
      <span>
        <strong>
          {props.answeredCounter} / {props.quizLength} CORRECT{" "}
          <i className="fas fa-check-circle"></i>
        </strong>
      </span>
      <span className="center">
        <strong>0 / 6 SKIPPED</strong>{" "}
        <i className="fas fa-question-circle"></i>
      </span>
      <span>
        <strong>
          {props.quizLength - props.answeredCounter} / {props.quizLength} WRONG{" "}
          <i className="fas fa-times-circle"></i>
        </strong>
      </span>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fas",
            props.results[quizItem.id] === "error"
              ? "fa-times-circle"
              : "fa-check-circle",
          ];
          const answerCls = [];
          if (
            quizItem.answers[quizItem.rightAnswerId - 1] ===
            quizItem.answers[props.answers[quizItem.id - 1].yourAnswer - 1]
          ) {
            answerCls.push("rightAnswer");
          } else answerCls.push("yourAnswer");
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")}></i>
              {props.quiz.length <= props.answers.length ? (
                <div className="AnswersBlock">
                  <div className={answerCls.join(" ")}>
                    {
                      quizItem.answers[
                        props.answers[quizItem.id - 1].yourAnswer - 1
                      ].text
                    }
                  </div>
                  <div className="rightAnswer">
                    {quizItem.answers[quizItem.rightAnswerId - 1].text}
                  </div>
                  <p>{quizItem.description}</p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FinishedQuiz;
