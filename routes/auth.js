import express  from 'express';

import {getUser} from '../controlers/users/read.js' //leer
import {createUser} from '../controlers/users/create.js'//crear
import {updateUser} from '../controlers/users/update.js'//actualizar
import {deleteUser} from '../controlers/users/delete.js'//eliminar




const router = express.Router();

/* GET users listing. */

router.get('/', getUser); //leer
router.post('/', createUser); //crear
router.put('/:id', updateUser); //actualizar
router.delete('/:id', deleteUser); //eliminar



export default  router;
