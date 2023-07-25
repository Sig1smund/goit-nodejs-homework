const Joi = require("joi");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "string.pattern.base": `Must have boolean.` }),
});

module.exports = updateFavoriteSchema;
