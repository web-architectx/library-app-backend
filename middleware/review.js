import Joi from "joi";

const reviewValidation = Joi.object({
rating: Joi.number(),
comment: Joi.string(),
book: Joi.string().optional(),
});

export const  reviewValidate = (req,res,next) => {
    try {
        const {error} = reviewValidation.validate(req.body)
        res.status(400).json(error)
    } catch (error) {
        next(error)     
    }
};