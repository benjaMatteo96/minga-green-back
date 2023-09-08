import express from 'express';
import readOneChapters from '../controllers/chapters/read_one.js '
import getPaginatedChapters from '../controllers/chapters/read.js'
const router = express.Router();

router.get('/', getPaginatedChapters);
router.get('/:id', readOneChapters);

export default router
