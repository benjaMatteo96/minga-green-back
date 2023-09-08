import express from 'express';
import readOneManga from '../controllers/mangas/read_one.js';
import getPaginatedChapters from '../controllers/mangas/read.js'
import getAllMangas from '../controllers/mangas/read.js';
const router = express.Router();

router.get('/', getAllMangas );
router.get('/:id', readOneManga);
//router.get('/api/mangas/:id', getPaginatedChapters);

export default router;

