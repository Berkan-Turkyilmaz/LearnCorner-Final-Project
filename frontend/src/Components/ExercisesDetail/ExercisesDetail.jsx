import React, { useEffect, useState } from "react";
import "./ExercisesDetail.css";
import {
  TbCircleLetterAFilled,
  TbCircleLetterBFilled,
  TbCircleLetterCFilled,
  TbCircleLetterDFilled,
} from "react-icons/tb";
import { GrCaretNext } from "react-icons/gr";
import { useParams } from "react-router-dom";

export default function ExercisesDetail() {
  const { id } = useParams();

  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [started, setStarted] = useState(false);
  const [correctOption, setCorrectOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5555/API/quiz/${id}`);
      const data = await response.json();
      setQuestions(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleOptionSelect = (optionIndex) => {
    if (!isAnswered) {
      setSelectedOption(optionIndex);
    }
  };

  const checkAnswer = () => {
    if (selectedOption !== null && !isAnswered) {
      const correctIndex = parseInt(
        questions[currentQuestionIndex].correctanswer
      );
      setCorrectOption(correctIndex);
      setIsAnswered(true);

      if (selectedOption === correctIndex) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setCorrectOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const getIconForIndex = (index) => {
    switch (index) {
      case 0:
        return <TbCircleLetterAFilled size={30} />;
      case 1:
        return <TbCircleLetterBFilled size={30} />;
      case 2:
        return <TbCircleLetterCFilled size={30} />;
      case 3:
        return <TbCircleLetterDFilled size={30} />;
      default:
        return null;
    }
  };

  const resetQuiz = () => {
    setStarted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCorrectOption(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  const startQuiz = () => {
    setStarted(true);
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="gen-container">
      {isLoading ? (
        <div className="loading-container">
          <p className="loading-text">Loading...</p>
        </div>
      ) : !started && questions.length > 0 ? (
        <div className="container">
          <div className="question-container">
            <h1 className="welcome-to-quiz">Welcome to the Quiz!</h1>
            <p className="quiz-name">Quiz Thema: {question.quizthema} </p>
            <p className="number-of-question">
              Number of Questions: {questions.length}
            </p>
            <button className="start-button" onClick={startQuiz}>
              Start the Quiz
            </button>
          </div>
        </div>
      ) : question ? (
        <div className="container">
          <div className="question-container">
            <div className="quiz-thema-table">
              Quiz Thema: {question.quizthema}
            </div>
            <div className="score-table">
              Points: {score}/{currentQuestionIndex + 1}
            </div>
            <div className="question-inside">
              <div className="header-cont-ex-detail">
                <h2 className="question-header">
                  Question {currentQuestionIndex + 1}
                </h2>
              </div>
              <div className="question-ex-detail">
                <p className="whats-question">{question.question}</p>
              </div>
              <div className="options-container">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className="option-buttons"
                    style={{
                      backgroundColor: !isAnswered
                        ? selectedOption === index
                          ? "yellow"
                          : "white"
                        : correctOption === index
                        ? "green"
                        : "white",
                    }}
                  >
                    {getIconForIndex(index)} {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="buttons-cont">
              <button className="reset-button" onClick={resetQuiz}>
                Reset the Quiz
              </button>

              <button className="checkanswer-button" onClick={checkAnswer}>
                Check Answer
              </button>
              <button className="next-button" onClick={handleNextQuestion}>
                Next Question <GrCaretNext size={15} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}