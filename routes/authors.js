import express from 'express';
//npimport readAuthors from '../controllers/authors/read_me.js';
//import read from '../controllers/authors/read.js';
import createOneAuthor from '../controllers/authors/create.js' //crear
import validadorAuthor from '../schema/validatorAuthor.js'
import validator from '../middleware/validator.js';
import passport from '../middleware/passport.js';
import hasPermission from '../middleware/has_permition.js'
import isPropertyOf from '../middleware/is-property-of.js'

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('etsamos en authors');
});


router.post('/create', passport.authenticate('jwt', { session: false }), validator(validadorAuthor), hasPermission, isPropertyOf, createOneAuthor); //crear

export default router;
