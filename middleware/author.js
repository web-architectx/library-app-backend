import Joi from "joi";

const authorValidation = Joi.object({
    name: Joi.string().required(),
    bio: Joi.string(),

});

export const authorValidate = (req, res, next) => {
    try {
        const { error} = authorValidation.validate(req.body)
        if (error) {
         return res.status(422).json(error)
        } else {
            next();
        }
    } catch (error) {
        next(error)
    }
};
