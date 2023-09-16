import express from 'express';
import getUser from '../controllers/users/read.js' //leer
import signinController from '../controllers/users/signin.js';
import validator from '../middleware/validator.js';
import userSchema from '../schema/userSchema.js';
import passport from '../middleware/passport.js';
import signout from '../controllers/users/signout.js';
import registerUser from '../controllers/users/register.js'
import estructuraUser from '../schema/uservalidator.js';

/* cuando se exporta por default se puede importar usando cualquier nombre 
en este caso usamos el nombre getUser para importar el controlador read de user. */

/* import {createUser} from '../controllers/users/create.js'//crear
import {updateUser} from '../controllers/users/update.js'//actualizar
import {deleteUser} from '../controllers/users/delete.js'//eliminar
 */

const router = express.Router();

router.get('/', getUser);
router.post('/signin', validator(userSchema), signinController);
router.post('/signout', validator(userSchema), passport.authenticate(
  'jwt',
  { session: false }
), signout)

router.get('/', getUser); //leer
router.post('/register', validator(estructuraUser), registerUser); //crear


export default router;


// Importacion de  el controlador de registro//

//  aca Defini la ruta POST para el registro de usuarios//

