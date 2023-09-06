import express  from 'express';
import readAuthors from '../controllers/authors/read_me.js';
import read from '../controllers/authors/read.js';
const router = express.Router();

/* GET users listing. */
router.get('/', read);
router.get('/me', readAuthors);

export default  router;
