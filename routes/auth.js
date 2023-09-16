import express from 'express';
import getUser from '../controllers/users/read.js' //leer
import signinController from '../controllers/users/signin.js';
import validator from '../middlewares/validator.js';
import userSchema from '../schema/userSchema.js';
import passport from '../middlewares/passport.js';
import signout from '../controllers/users/signout.js';
import registerUser from '../controllers/users/register.js';



const router = express.Router();

router.get('/', getUser);
router.post('/signin', validator(userSchema), signinController);
router.post('/signout', validator(userSchema), passport.authenticate(
  'jwt',
  { session: false }
), signout)
// M01- endpoint//



// Importacion de  el controlador de registro//

//  aca Defini la ruta POST para el registro de usuarios//
router.post('/register', /*validator(estructuraUser),*/ registerUser); //crear


export default router;

