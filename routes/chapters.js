import readOneChapters from '../controllers/chapters/read_one.js '
import express  from 'express';
import getPaginatedChapters from '../controllers/chapters/read.js'
const router = express.Router();
const chapterRouter = express.Router();
router.get('/', getPaginatedChapters);
chapterRouter.get('/:id', readOneChapters);

export default {router, chapterRouter};
