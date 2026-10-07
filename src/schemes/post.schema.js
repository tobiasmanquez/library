const Joi = require('joi');
const createPostSchema = Joi.object({
title: Joi.string().trim().min(3).max(100).required(),
description: Joi.string().trim().max(500).allow(''),
author: Joi.string().trim().email().required().messages({ // NUEVO CAMPO
'string.empty': "The 'author' field cannot be empty.",
'string.email': "The 'author' field must contain a valid email address.",
'any.required': "The 'author' field is required."
})
});
module.exports = { createPostSchema };