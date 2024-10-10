import Joi from "joi";

const reviewValidation = Joi.object({
rating: Joi.number(),
comment: Joi.string(),
book: Joi.string(),
});

export const  reviewValidate = (req,res,next) => {
    try {
        const {error} = reviewValidation.validate(req.body)
       if (error) {
         res.status(400).json(error)
       } else {
        next() 
       }
    } catch (error) {
        next(error)     
    }
};