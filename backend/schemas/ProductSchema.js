import Joi from 'joi';

const productSchema = Joi.object({
    
    definition: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    amount: Joi.number().required()

    



});


export default productSchema;