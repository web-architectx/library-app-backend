import Joi from "joi"

const authorValidation = Joi.object({
    name: Joi.string().required(),
    bio: Joi.string(),

});

export const authorValidate = (req,res,next) => {
    try {
        const {error} = authorValidation.validate(req.body)
        res.status(400).json(error)
    } catch (error) {
         next(error) 
    }    
};
