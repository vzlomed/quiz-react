import React, { Component } from "react";
import "./Quiz.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    answeredCounter: 0,
    questionCompleted: false,
    answers: [
      // {
      //   id: 1,
      //   yourAnswer: 3,
      //   rightAnswer: 3,
      // },
    ],
    quiz: [
      {
        id: 1,
        question: "What your most delicious food",
        rightAnswerId: 3,
        photo: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg",
        description:
          "Apples contain vitamins A, C, B1, B2, PP and E, as well as magnesium, phosphorus, iodine, iron, selenium, potassium, calcium and zinc. Together, they give us vitality, help us cope with stressful situations, improve brain function and strengthen the cardiovascular system",
        answers: [
          {
            text: "Croissant",
            id: 1,
          },
          {
            text: "Pumpkin",
            id: 2,
          },
          {
            text: "Apple",
            id: 3,
          },
          {
            text: "Cookie",
            id: 4,
          },
        ],
      },
      {
        id: 2,
        question: "Where do you want to live",
        rightAnswerId: 2,
        photo: null,
        description:
          "Toronto is the capital city of the Canadian province of Ontario. With a recorded population of 2,731,571 in 2016, it is the most populous city in Canada and the world",
        answers: [
          {
            text: "Paris",
            id: 1,
          },
          {
            text: "Toronto",
            id: 2,
          },
          {
            text: "Tokio",
            id: 3,
          },
          {
            text: "New York",
            id: 4,
          },
        ],
      },
      {
        id: 3,
        question: "In what country was born George Washington",
        rightAnswerId: 3,
        photo:
          "https://api.time.com/wp-content/uploads/2020/02/george-washington.jpg",
        description:
          "George Washington was an American political leader, military general, statesman, and Founding Father who served as the first president of the United States of America",
        answers: [
          {
            text: "Italy",
            id: 1,
          },
          {
            text: "Russia",
            id: 2,
          },
          {
            text: "USA",
            id: 3,
          },
          {
            text: "Japan",
            id: 4,
          },
        ],
      },
      {
        id: 4,
        question: "What did i cook today?",
        rightAnswerId: 4,
        photo:
          "https://images-gmi-pmc.edge-generalmills.com/7d6f3a8e-2eca-4c61-8988-489b40546395.jpg",
        description:
          "I don't like you, T-Series, nothing personal, kid, but I must go all out just this once…",
        answers: [
          {
            text: "Pasta",
            id: 1,
          },
          {
            text: "Pizza",
            id: 2,
          },
          {
            text: "Raviolli",
            id: 3,
          },
          {
            text: "Lazagna",
            id: 4,
          },
        ],
      },
      {
        id: 5,
        question: "Cheese it is ...",
        rightAnswerId: 2,
        photo:
          "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/2-1-3-1dairyfoods_cheese_detailfeature_thumb.jpg",
        description:
          "Cheese is a dairy product, derived from milk and produced in wide ranges of flavors, textures and forms by coagulation of the milk protein casein",
        answers: [
          {
            text: "Ball",
            id: 1,
          },
          {
            text: "Food",
            id: 2,
          },
          {
            text: "Pet",
            id: 3,
          },
          {
            text: "Game",
            id: 4,
          },
        ],
      },
      {
        id: 6,
        question: "Do you love me",
        rightAnswerId: 3,
        photo: null,
        description: "Haha, JK!",
        answers: [
          {
            text: "Definetly yes",
            id: 1,
          },
          {
            text: "Yes",
            id: 2,
          },
          {
            text: "Of course",
            id: 3,
          },
          {
            text: "True",
            id: 4,
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;
    const answers = this.state.answers;

    // checking for
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key]) {
        return;
      }
    }

    // checking for true answer
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.counter();
      this.setState({
        answerState: { [answerId]: "success" },
        questionCompleted: true,
        results,
      });
      // checking for false answer
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        questionCompleted: true,
        results,
      });
    }
    // timeout between questions
    this.onAnswerCompleted(answers, question, answerId);
  };
  // returning true when quiz is finished
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }
  onAnswerCompleted(answers, question, answerId) {
    answers[question.id - 1] = {
      id: question.id,
      yourAnswer: answerId,
      rightAnswer: question.rightAnswerId,
    };
    this.setState(answers);
    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true,
        });
      } else {
        this.setState({
          answerState: { [answerId]: null },
          activeQuestion: this.state.activeQuestion + 1,
          questionCompleted: false,
        });
      }

      window.clearTimeout(timeout);
    }, 1500);
  }
  // counting true answers
  counter() {
    this.setState({
      answeredCounter: this.state.answeredCounter + 1,
    });
  }

  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>New test</h1>
          <div className="progress-bar-wrapper">
            <div
              className="progress-bar-value"
              style={{
                width: `${
                  ((this.state.activeQuestion + 1) / this.state.quiz.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
          <p>
            This is description for new test. Folly words widow one downs few
            age every seven. If miss part by fact he park just shew. Discovered
            had get considered projection who favourable. Necessary up knowledge
            it tolerably.
          </p>
          {this.state.isFinished ? (
            // RESULTS
            <FinishedQuiz
              answeredCounter={this.state.answeredCounter}
              quizLength={this.state.quiz.length}
              results={this.state.results}
              quiz={this.state.quiz}
              answers={this.state.answers}
            ></FinishedQuiz>
          ) : (
            <div>
              {/* QUIZ */}
              <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                photo={this.state.quiz[this.state.activeQuestion].photo}
                answerNumber={this.state.activeQuestion + 1}
                questionCompleted={this.state.questionCompleted}
                state={this.state.answerState}
                rightAnswerId={
                  this.state.quiz[this.state.activeQuestion].rightAnswerId
                }
              ></ActiveQuiz>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
