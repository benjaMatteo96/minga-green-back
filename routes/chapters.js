// En tu enrutador
import express from 'express';
import readOneChapters from '../controllers/chapters/read_one.js';
import getPaginatedChapters from '../controllers/chapters/read.js';
import createChapters from '../controllers/chapters/create.js';
import addCoverPhoto from '../middleware/add_cover_photo.js';
import validator from '../middleware/validator.js';
import chapterValidator from '../validators/chapterValidator.js';
import passport from '../middleware/passport.js';
import find_id from '../middleware/find_id.js';
import get_me from '../controllers/chapters/get_me.js';
import is_active from '../middleware/is_active.js'
import isPropertyOf from '../middleware/is-property-of.js'
import validatorChapter from '../schema/validatorChapter.js';
import updateChapter from '../controllers/chapters/update.js'
import destroyChapter from '../controllers/chapters/destry.js'

const router = express.Router();

router.get('/', getPaginatedChapters);
// Nueva ruta para obtener los capítulos del manga del autor logueado
/* router.get('/me', passport.authenticate('jwt', { session: false }), find_id, isPropertyOf, get_me); */
//pasport, findId, isActive, ispropeerty
router.get('/:id', readOneChapters);

router.post('/', passport.authenticate('jwt', { session: false }), addCoverPhoto, validator(chapterValidator), createChapters);


// Nueva ruta para editar
router.put('/:id', passport.authenticate('jwt', { session: false }),/* find_id, is_active, isPropertyOf, */validator(validatorChapter), updateChapter); 
//Orden para PUT en Postman: api/chapters/id-de-chapter?manga_id=id-de-manga

//Nueva ruta para eliminar
router.delete('/:id', passport.authenticate('jwt', { session: false }), find_id,is_active ,isPropertyOf, destroyChapter); 
//Orden para DELETE en Postman: api/chapters/id-de-chapter?manga_id=id-de-manga
export default router;
