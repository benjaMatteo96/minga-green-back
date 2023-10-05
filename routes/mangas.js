
import express from 'express';
import readOneManga from '../controllers/mangas/read_one.js';
import getPaginatedChapters from '../controllers/mangas/read.js'
import getAllMangas from '../controllers/mangas/read.js';
import readNews from "../controllers/mangas/read_news.js"
import validatorMangaSchema from '../schema/validatorMangaSchema.js';
import createManga from '../controllers/mangas/create.js';
import passport from '../middleware/passport.js';
import validator from '../middleware/validator.js';
import getMyMangas from '../controllers/mangas/get_me.js';
import updateManga from '../controllers/mangas/update.js';
import finds_id from '../middleware/find_id_m01.js';
import is_active from '../middleware/is_active_m01.js';
import isPropertyOf from '../middleware/is_property_off_benja.js';
import updateMangaSchema from '../schema/updateValidatorManga.js';
import destroyManga from '../controllers/mangas/destroy.js';
import create from '../controllers/mangas/create.js';
import findCategory from '../middleware/findCategory.js'
import mangaValidationSchema from '../schema/mangaSchema.js';

const router = express.Router();

router.get('/', getAllMangas);
router.get("/me",  passport.authenticate('jwt', { session: false }),finds_id,   getMyMangas)
router.get('/:id', readOneManga);
router.put('/:id', passport.authenticate('jwt', { session: false }), finds_id, is_active,validator(updateMangaSchema), isPropertyOf,   updateManga);
router.get('/news', readNews);
router.post(
  '/', // La ruta POST que manejará la creación de autores
  passport.authenticate('jwt', { session: false }), // Middleware de autenticación JWT
  validator(validatorMangaSchema), // Middleware de validación utilizando el validador y su schema
  createManga // Controlador para crear un manga
);
router.delete('/:id', passport.authenticate('jwt', { session: false }),finds_id,  is_active,isPropertyOf, destroyManga);

//router.get('/api/mangas/:id', getPaginatedChapters);

export default router;

