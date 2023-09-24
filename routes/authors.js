import express from 'express';
import createOneAuthor from '../controllers/authors/create.js'; // Importa la función para crear autores
import validadorAuthor from '../schema/validatorAuthor.js'; // Importa el validador de autor
import validator from '../middleware/validator.js'; // Importa el middleware de validación
import passport from '../middleware/passport.js'; // Importa el middleware de autenticación
import hasPermission from '../middleware/has_permition.js';// Importa el middleware de permisos
import readAuthors from '../controllers/authors/read_me.js';
import read from '../controllers/authors/read.js';
import controllerAdmins from '../controllers/authors/admin.js';
import updateController from '../controllers/authors/update.js';
import findAuthorById from '../middleware/finds_id-admin.js';


const router = express.Router();

// Ruta para crear un nuevo autor
router.post(
  '/', // La ruta POST que manejará la creación de autores
  passport.authenticate('jwt', { session: false }), // Middleware de autenticación JWT
  validator(validadorAuthor), // Middleware de validación utilizando el validador
  hasPermission, // Middleware de permisos
  createOneAuthor // Controlador para crear un autor
);

/* GET users listing. */
router.get('/', read);
router.get('/me', readAuthors);

/* M03-endpoin (sprint 4)Ruta GET para obtener autores activos e inactivos */
router.get('/api/authors/admin',
  passport.authenticate('jwt', { session: false }), // Autenticación con Passport.
  controllerAdmins
);

//M03-ENDPOINTSH(SPRINT4 ) 
//Ruta PUT para modificar el rol de un usuario común a autor

router.put('/api/auth/role/author/:id',
  passport.authenticate('jwt', { session: false }), // Autenticación con Passport.js
  findAuthorById, // Middleware para buscar el ID del usuario a modificar
  updateController // controlador para cambiar el rol//
);
export default router;

/* border bottom 
outline*/

