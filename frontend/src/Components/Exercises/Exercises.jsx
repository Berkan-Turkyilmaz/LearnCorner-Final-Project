import React, { useEffect, useState } from "react";
import "./Exercises.css";
import { NavLink } from "react-router-dom";
import { FaCircle } from "react-icons/fa";


export default function Exercises() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:5555/API/quiz`);
      const data = await response.json();

      const uniqueQuizzes = data.reduce((acc, current) => {
        const existingQuiz = acc.find(
          (quiz) => quiz.quiznumber === current.quiznumber
        );
        if (!existingQuiz) {
          acc.push(current);
        }
        return acc;
      }, []);

      setQuizzes(uniqueQuizzes);
      setLoading(false);
      console.log(uniqueQuizzes);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="general-cont">
        <div className="sub-container-ex">
          <div className="header-cont">
            <h1 className="header">Exercises</h1>
          </div>
          <div className="vocab-and-grammer-ex-cont">
            <div className="vocabulary-exercises-cont">
              <div className="header-vocab-cont">
                <h2>Vocabulary </h2>
              </div>
              <div className="quizzes-cont">
                {quizzes
                  .filter(
                    (quiz) => quiz.quiznumber < 1000 && quiz.quiznumber > 0
                  )
                  .map((quiz) => (
                    <div className="individualquiz">
                      <FaCircle size={7}></FaCircle>
                      
                      <NavLink
                        className="individualnavlink"
                        key={quiz.id}
                        to={`/exercises/${quiz.quiznumber}`}
                      >
                        {quiz.quizthema}
                      </NavLink>
                      
                    </div>
                  ))}
              </div>
            </div>
            <div className="lists-cont">
              <div className="exerciseslists">
                <div className="listheader-cont">
                  <h2>A1 </h2>
                </div>
                <div className="quizzes-cont">
                  {quizzes
                    .filter(
                      (quiz) => quiz.quiznumber < 2000 && quiz.quiznumber > 1000
                    )
                    .map((quiz) => (
                      <div className="individualquiz">
                        <FaCircle size={7}></FaCircle>
                        
                        <NavLink
                          className="individualnavlink"
                          key={quiz.id}
                          to={`/exercises/${quiz.quiznumber}`}
                        >
                         {quiz.quizthema}
                        </NavLink>
                        
                      </div>
                    ))}
                </div>
              </div>
              <div className="exerciseslists">
                <div className="listheader-cont">
                  <h2>A2 </h2>
                </div>
                <div className="quizzes-cont">
                  {quizzes
                    .filter(
                      (quiz) => quiz.quiznumber < 3000 && quiz.quiznumber > 2000
                    )
                    .map((quiz) => (
                      <div className="individualquiz">
                        <FaCircle size={7}></FaCircle>
                        
                        <NavLink
                          className="individualnavlink"
                          key={quiz.id}
                          to={`/exercises/${quiz.quiznumber}`}
                        >
                         {quiz.quizthema}
                        </NavLink>
                      </div>
                    ))}
                </div>
              </div>
              <div className="exerciseslists">
                <div className="listheader-cont">
                  <h2>B1 </h2>
                </div>
                <div className="quizzes-cont">
                  {quizzes
                    .filter(
                      (quiz) => quiz.quiznumber < 4000 && quiz.quiznumber > 3000
                    )
                    .map((quiz) => (
                      <div className="individualquiz">
                        <FaCircle size={7}></FaCircle>
                        
                        <NavLink
                          className="individualnavlink"
                          key={quiz.id}
                          to={`/exercises/${quiz.quiznumber}`}
                        >
                         {quiz.quizthema}
                        </NavLink>
                      </div>
                    ))}
                </div>
              </div>
              <div className="exerciseslists">
                <div className="listheader-cont">
                  <h2>B2 </h2>
                </div>
                <div className="quizzes-cont">
                  {quizzes
                    .filter(
                      (quiz) => quiz.quiznumber < 5000 && quiz.quiznumber > 4000
                    )
                    .map((quiz) => (
                      <div className="individualquiz">
                        <FaCircle size={7}></FaCircle>
                        
                        <NavLink
                          className="individualnavlink"
                          key={quiz.id}
                          to={`/exercises/${quiz.quiznumber}`}
                        >
                         {quiz.quizthema}
                        </NavLink>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
