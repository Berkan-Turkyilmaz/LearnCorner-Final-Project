    import Joi from 'joi';

    const userSchema = Joi.object({

        firstname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()

    });


    export default userSchema;