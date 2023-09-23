import Joi from "joi";
import joiOid from 'joi-oid';

const updateMangaSchema = Joi.object({
    title: Joi.string().min(2).max(50).messages({
      'string.empty': 'El título es un campo requerido.',
      'string.min': 'El título debe tener al menos {#limit} caracteres.',
      'string.max': 'El título no debe superar los {#limit} caracteres.',
    }),
    cover_photo: Joi.string().uri().min(10).max(255).messages({
      'string.empty': 'La foto de portada es un campo requerido.',
      'string.uri': 'La URL de la foto de portada no es válida.',
      'string.min': 'La URL de la foto de portada debe tener al menos {#limit} caracteres.',
      'string.max': 'La URL de la foto de portada no debe superar los {#limit} caracteres.',
    }),
    description: Joi.string().min(10).max(1000).messages({
      'string.empty': 'La descripción es un campo requerido.',
      'string.min': 'La descripción debe tener al menos {#limit} caracteres.',
      'string.max': 'La descripción no debe superar los {#limit} caracteres.',
    })
  }).min(1);
  
  export default updateMangaSchema