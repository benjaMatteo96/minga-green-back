import express from 'express';
import getUser from '../controllers/users/read.js' //leer
import signinController from '../controllers/users/signin.js';
import validator from '../middlewares/validator.js';
import userSchema from '../schema/userSchema.js';
import passport from '../middlewares/passport.js';
import signout from '../controllers/users/signout.js';

const router = express.Router();

router.get('/', getUser);
router.post('/signin', validator(userSchema), signinController);
router.post('/signout', validator(userSchema), passport.authenticate(
  'jwt',
  { session: false }
), signout)

export default router;
