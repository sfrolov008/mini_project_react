import Joi from "joi";

const searchValidator = Joi.object({query: Joi.string().min(1).required()})

export {searchValidator}