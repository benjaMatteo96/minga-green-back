import Joi from 'joi';

const mangaValidationSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.base': 'El título debe ser una cadena de texto',
      'string.empty': 'El título no debe estar vacío',
      'string.min': 'El título debe tener al menos {#limit} caracteres',
      'string.max': 'El título no debe tener más de {#limit} caracteres',
      'any.required': 'El título es un campo requerido',
    }),

  description: Joi.string()
    .min(10)
    .max(500)
    .required()
    .messages({
      'string.base': 'La descripción debe ser una cadena de texto',
      'string.empty': 'La descripción no debe estar vacía',
      'string.min': 'La descripción debe tener al menos {#limit} caracteres',
      'string.max': 'La descripción no debe tener más de {#limit} caracteres',
      'any.required': 'La descripción es un campo requerido',
    }),

  category_id: Joi.string()
    .alphanum()
    .required()
    .messages({
      'string.base': 'El ID de categoría debe ser una cadena alfanumérica',
      'string.empty': 'El ID de categoría no debe estar vacío',
      'any.required': 'El ID de categoría es un campo requerido',
    }),

  cover_photo: Joi.string()
  .uri()
  .required(),
});

export default mangaValidationSchema;