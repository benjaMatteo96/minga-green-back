
import express from 'express';
import readOneManga from '../controllers/mangas/read_one.js';
import getPaginatedChapters from '../controllers/mangas/read.js'
import getAllMangas from '../controllers/mangas/read.js';
import readNews from "../controllers/mangas/read_news.js"
import validatorMangaSchema from '../schema/validatorMangaSchema.js';
import createManga from '../controllers/mangas/create.js';
import passport from '../middleware/passport.js';
import validator from '../middleware/validator.js';
import create from '../controllers/mangas/create.js';
import findCategory from '../middleware/findCategory.js'
import mangaValidationSchema from '../schema/mangaSchema.js';


const router = express.Router();

router.get('/', getAllMangas );
router.get('/:id', readOneManga);
router.get('/news', readNews);
router.post(
    '/', 
    passport.authenticate('jwt', { session: false }),
    validator(validatorMangaSchema), 
    findCategory, createManga 
  );
  
// router.post('/', findCategory, create)
// router.post('/', passport.authenticate(
//     'jwt', 
//     {session: false}
// ), validator(mangaValidationSchema), create)



export default router;

