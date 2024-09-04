import Quiz from "../models/QuizModel.js";
import quizSchema from "../schemas/QuizSchema.js";


export const getQuizzes = async (req, res) => {

    try {

        const quizNumber = req.params.quizNumber
        const Quizzes = await Quiz.findAll({
            where: {quiznumber: quizNumber },
            attributes:{exclude:["createdAt", "updatedAt"]}});
    
        if (!Quizzes) {
    
        return res.status(404).json({message:"No quizzes found"})
        } 
    
        return res.status(200).json(Quizzes);
   
    
    
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }};
    

    export const getQuizzesSpec = async (req, res) => {

      try {
  
          const quizNumber = req.params.quizNumber
          const Quizzes = await Quiz.findAll({
              
              attributes:{exclude:["createdAt", "updatedAt"]}});
      
          if (!Quizzes) {
      
          return res.status(404).json({message:"No quizzes found"})
          } 
      
          return res.status(200).json(Quizzes);
     
      
      
      } catch (error) {
          console.log(error);
          res.status(500).json({error: error.message})
      }};
      



export const createQuiz = async (req, res) => {
  try {
    const { error } = quizSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    } else {
      const createdQuiz = await Quiz.create(req.body);
      return res.status(201).json({
        id: createdQuiz.id,
        quiznumber: createdQuiz.quiznumber,
        question: createdQuiz.question,
        options: createdQuiz.options,
        quizthema: createdQuiz.quizthema,
        message: "Quizz was created",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
