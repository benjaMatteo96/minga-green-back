import express from 'express';
import registerUser from '../controllers/users/register.js'


/* cuando se exporta por default se puede importar usando cualquier nombre 
en este caso usamos el nombre getUser para importar el controlador read de user. */
import getUser from '../controllers/users/read.js' //leer
import validator from '../middlewares/validator.js'

/* import {createUser} from '../controllers/users/create.js'//crear
import {updateUser} from '../controllers/users/update.js'//actualizar
import {deleteUser} from '../controllers/users/delete.js'//eliminar
 */

const router = express.Router();

/* GET users listing. */

router.get('/', getUser); //leer

/* router.post('/', createUser); //crear
router.put('/:id', updateUser); //actualizar
router.delete('/:id', deleteUser); //eliminar */


// M01- endpoint//



// Importacion de  el controlador de registro//

//  aca Defini la ruta POST para el registro de usuarios//
router.post('/register', validator(estructuraUser), registerUser); //crear


export default router;
