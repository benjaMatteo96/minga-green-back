import express from 'express';
const chapterRouter = express.Router();
import readOneChapters from '../controllers/chapters/read_one.js '

// Enruta la solicitud GET a '/chapter/:id' al controlador readOneChapters.
chapterRouter.get('/:id', readOneChapters);

export default router;
