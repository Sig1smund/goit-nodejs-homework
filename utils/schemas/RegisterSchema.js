const Joi = require("joi");
const { emailValidationRegex } = require("../../models/user");

const RegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailValidationRegex).required(),
  password: Joi.string().min(6).required(),
});

module.exports = RegisterSchema;
