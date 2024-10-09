import Joi from "joi"

const authorValidation = joi.object({
    name: Joi.string().required,

})
    
