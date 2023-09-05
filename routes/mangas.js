import express from 'express';
import getAllMangas from '../controllers/mangas/read.js';
const router = express.Router();

/* GET users listing. */
router.get('/', getAllMangas);

export default router;


