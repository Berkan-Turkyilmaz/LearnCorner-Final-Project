import Joi from 'joi';

const postSchema = Joi.object({

    titel: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().uri().required(),
    content: Joi.string().required()
    

});


export default postSchema;