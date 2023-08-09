const Joi = require("joi");
const { emailValidationRegex } = require("../models/user");

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailValidationRegex).required(),
});

module.exports = emailSchema;
