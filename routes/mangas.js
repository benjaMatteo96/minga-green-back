
import express from 'express';
import readOneManga from '../controllers/mangas/read_one.js';
import getPaginatedChapters from '../controllers/mangas/read.js'
import getAllMangas from '../controllers/mangas/read.js';
import readNews from "../controllers/mangas/read_news.js"
import create from '../controllers/mangas/create.js';
import findCategory from '../middlewares/findCategory.js'
import validator from '../middlewares/validate.js';
import mangaValidationSchema from '../schema/mangaSchema.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

router.get('/', getAllMangas );
router.get('/:id', readOneManga);
router.get('/news', readNews);
router.post('/', findCategory, create)
router.post('/', passport.authenticate(
    'jwt', 
    {session: false}
), validator(mangaValidationSchema), create)



export default router;


