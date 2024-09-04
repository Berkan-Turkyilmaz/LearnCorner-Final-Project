import Joi from 'joi';

const quizSchema = Joi.object({
    
    quiznumber: Joi.number().required(),
    question: Joi.string().required(),
    options: Joi.array().required(),
    correctanswer: Joi.number().required(),
    quizthema: Joi.string().required()



});


export default quizSchema;