// aca va mi schema  de validacion : M01 valid//

import joi from 'joi';
const estructuraUser = joi.object({
    email: joi.string().required().messages({
        'string.email': 'El correo electrónico debe ser una dirección de correo válida.',
        'string.empty': 'El correo electrónico no debe estar vacío.',
        'string.max': 'El correo electrónico no debe tener más de {#limit} caracteres.',
        'any.required': 'El correo electrónico es un campo requerido.',

    }),

    password: joi.string().required().min(6).max(255).messages({
        'string.empty': 'La contraseña no debe estar vacía.',
        'string.min': 'La contraseña debe tener al menos {#limit} caracteres.',
        'string.max': 'La contraseña no debe tener más de {#limit} caracteres.',
        'any.required': 'La contraseña es un campo requerido.',
    }),

    photo: joi.string().uri({ scheme: ['http', 'https'] }).required().messages({
        'string.uri': 'La foto debe ser una URL válida.',
        'string.empty': 'La foto no debe estar vacía.',
        'any.required': 'La foto es un campo requerido.',
    }),

})
export default estructuraUser