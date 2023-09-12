// aca va mi schema//

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

})
export default estructuraUser