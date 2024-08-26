import Joi from 'joi';

const postSchema = Joi.object({

    titel: Joi.string().min(8).required(),
    category: Joi.string().required(),
    image: Joi.string().uri().required()
    

});


export default postSchema;