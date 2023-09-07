//  controllers/mangaRoutes.js
import express from 'express';
import readOneManga from '../controllers/mangas/read_one.js';
import getPaginatedChapters from '../controllers/mangas/read.js'

 const router = express.Router();

// // // Ruta para ver un manga por su ID
router.get('/:id', readOneManga);
router.get('/api/mangas/:id', getPaginatedChapters);


export default router;

