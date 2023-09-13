import express from 'express';
import createOneAuthor from '../controllers/authors/create.js'; // Importa la función para crear autores
import validadorAuthor from '../schema/validatorAuthor.js'; // Importa el validador de autor
import validator from '../middleware/validator.js'; // Importa el middleware de validación
import passport from '../middleware/passport.js'; // Importa el middleware de autenticación
import hasPermission from '../middleware/has_permition.js';// Importa el middleware de permisos

const router = express.Router();

// Ruta para crear un nuevo autor
router.post(
  '/', // La ruta POST que manejará la creación de autores
  passport.authenticate('jwt', { session: false }), // Middleware de autenticación JWT
  validator(validadorAuthor), // Middleware de validación utilizando el validador
  hasPermission, // Middleware de permisos
  createOneAuthor // Controlador para crear un autor
);

export default router;

/* border bottom 
outline*/

  