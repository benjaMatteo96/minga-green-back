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


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The user name
 *         age:
 *           type: integer
 *           description: The user age
 *         email:
 *           type: string
 *           description: The user email
 *       required:
 *         - name
 *         - age
 *         - email
 *       example:
 *         name: Alan Kay
 *         age: 70
 *         email: alan@email.com
 */

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: New user created!
 */

/**
 * @swagger
 * /api/auth:
 *   get:
 *     summary: Return all users
 *     tags:
 *       - user
 *     responses:
 *       200:
 *         description: All users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *         example:
 *           - name: Alan Kay
 *             age: 70
 *             email: alan@email.com
 *       404:
 *         description: User not found
 */



/**
 * @swagger
 * /api/auth/{id}:
 *   get:
 *     summary: Return a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description:  all users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 *         example:
 *           id: 1
 *           name: Alan Kay
 *           age: 70
 *           email: alan@email.com
 *       404:
 *         description:  User not found
 */


/**
 * @swagger
 * /api/auth/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: Alan Kay
 *               age: 70
 *               email: alan@email.com
 *       404:
 *         description: User not found
 */


/**
 * @swagger
 * /api/auth/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: Alan Kay
 *               age: 70
 *               email: alan@email.com
 *       404:
 *         description: User not found
 */


router.get('/', getUser);
router.post('/signin', validator(userSchema), signinController);
router.post('/signout', passport.authenticate(
  'jwt',
  { session: false }
), signout)
// M01- endpoint//



// Importacion de  el controlador de registro//

//  aca Defini la ruta POST para el registro de usuarios//
router.post('/register', /*validator(estructuraUser),*/ registerUser); //crear


router.get('/', getUser); //leer
router.post('/register', validator(estructuraUser), registerUser); //crear




export default router;


// Importacion de  el controlador de registro//

//  aca Defini la ruta POST para el registro de usuarios//
