import Joi from "joi";

const libraryValidation = Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    publishedYear: Joi.number(),
    genre: Joi.string().optional(),
    summary: Joi.string(),
    img_url: Joi.string()
});

export const libraryValidate = (req, res, next) => {
    try {
        const { error} = libraryValidation.validate(req.body)
        if (error) {
          return  res.status(422).json(error)
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
};

