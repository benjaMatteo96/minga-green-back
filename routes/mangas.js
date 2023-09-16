
import express from 'express';
import readOneManga from '../controllers/mangas/read_one.js';
import getPaginatedChapters from '../controllers/mangas/read.js'
import getAllMangas from '../controllers/mangas/read.js';
import readNews from "../controllers/mangas/read_news.js"
import validatorMangaSchema from '../schema/validatorMangaSchema.js';
import createManga from '../controllers/mangas/create.js';
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js';

const router = express.Router();

router.get('/', getAllMangas );
router.get('/:id', readOneManga);
router.get('/news', readNews);
router.post(
    '/', // La ruta POST que manejará la creación de autores
    passport.authenticate('jwt', { session: false }), // Middleware de autenticación JWT
    validator(validatorMangaSchema), // Middleware de validación utilizando el validador y su schema
    createManga // Controlador para crear un manga
  );
//router.get('/api/mangas/:id', getPaginatedChapters);

export default router;

