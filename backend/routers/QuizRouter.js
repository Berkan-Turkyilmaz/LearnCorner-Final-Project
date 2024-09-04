import express from 'express';
import { createQuiz, getQuizzes, getQuizzesSpec } from '../controllers/QuizController.js';

const quizRouter = express.Router();


quizRouter.get("/:quizNumber", getQuizzes);

quizRouter.get("/", getQuizzesSpec)
quizRouter.post("/", createQuiz);



export default quizRouter;
