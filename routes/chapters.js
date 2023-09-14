import express from 'express';
import readOneChapters from '../controllers/chapters/read_one.js '
import getPaginatedChapters from '../controllers/chapters/read.js'
import createChapters from '../controllers/chapters/create.js';
import addCoverPhoto from '../middlewares/add_cover_photo.js';
import validator from '../middlewares/validator.js';
import chapterValidator from '../validators/chapterValidator.js';
import passport from '../middlewares/passport.js';


const router = express.Router();

router.get('/', getPaginatedChapters);
router.get('/:id', readOneChapters);
router.post('/',  passport.authenticate('jwt', {session:false}), addCoverPhoto, validator(chapterValidator),createChapters)


export default router
