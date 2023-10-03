import joi from 'joi';
import joiOid from 'joi-oid';

const validadorAuthor = joi.object({
  name: joi.string().min(2).max(25).required().messages({
    'string.min': 'The name must be at least {#limit} characters.',
    'string.max': 'The name must not exceed {#limit} characters.',
    'any.required': 'The name is a required field.',
  }),
  last_name: joi.string().min(2).max(20).required().messages({
    'string.min': 'The last name must be at least {#limit} characters.',
    'string.max': 'The last name must not exceed {#limit} characters.',
    'any.required': 'The last name is a required field.',
  }),
  city: joi.string().required().messages({
    'any.required': 'The city is a required field.',
  }),
  country: joi.string().min(2).max(10).required().messages({
    'string.min': 'The country must be at least {#limit} characters.',
    'string.max': 'The country must not exceed {#limit} characters.',
    'any.required': 'The country is a required field.',
  }),
  date: joi.string().min(2).max(20).messages({
    'string.min': 'The date must be at least {#limit} characters.',
    'string.max': 'The date must not exceed {#limit} characters.',
  }),
  photo: joi.string().uri().min(10).max(500).required().messages({
    'string.uri': 'The photo URL is not valid.',
    'string.min': 'The photo URL must be at least {#limit} characters.',
    'string.max': 'The photo URL must not exceed {#limit} characters.',
    'any.required': 'The photo is a required field.',
  }),
});

export default validadorAuthor;
