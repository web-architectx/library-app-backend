import Joi, { string } from "joi";

const validationSchema = Joi.object({
title: Joi.string().required(),
author: Joi.string(),
publishedYear:Joi.number(),
genre: Joi.string().optional()
});