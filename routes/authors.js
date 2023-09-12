import express  from 'express';
import readAuthors from '../controllers/authors/read_me.js';
import read from '../controllers/authors/read.js';
import createOneAuthor from '../controllers/authors/create.js' //crear
import validadorAuthor from '../schema/validatorAuthor.js'
import validator from '../middleware/validator.js';
import passport from '../middleware/passport.js';
import hasPermission from '../middleware/has_permition.js'
const router = express.Router();

/* GET users listing. */
router.get('/', read);
router.get('/me', readAuthors);

router.post('/create',  passport.authenticate('jwt', {session: false}), validator(validadorAuthor), hasPermission, createOneAuthor); //crear


export default  router;

/* border bottom 
outline*/