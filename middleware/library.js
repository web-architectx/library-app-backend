import Joi from "joi";

const libraryValidation = Joi.object({
title: Joi.string().required(),
author: Joi.string().required(),
publishedYear:Joi.number(),
genre: Joi.string().optional(),
});

export const  libraryValidate = (req,res,next) => {
    try {
        const {error} = libraryValidation.validate(req.body)
        res.status(400).json(error)
    } catch (error) {
        next(error)     
    }
};

