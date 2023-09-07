import express  from 'express';
import getPaginatedChapters from '../controllers/chapters/read.js'
const router = express.Router();

/* GET users listing. */
router.get('/', getPaginatedChapters);

export default  router;
