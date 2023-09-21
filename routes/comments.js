import express from 'express';
import passport from '../middleware/passport.js'
import {createComment} from '../controllers/comments/create.js';
import {getAllCommentsFromChapter} from '../controllers/comments/all_from_chapter.js'
import commentValidator from '../validators/commentValidator.js';
import validator from '../middleware/validator.js';
import controllerComments from '../controllers/comments/update.js'
import isPropertyOf from '../middleware/is-property-of.js';
import isPropertyOfComment from '../middleware/isPropertyOfComment.js';
import destroyComment from '../controllers/comments/destroy.js';


const router = express.Router();

router.get("/",passport.authenticate("jwt", { session: false }), getAllCommentsFromChapter);
router.post("/", passport.authenticate("jwt", { session: false }), createComment);
router.put("/:id",passport.authenticate("jwt", { session: false }), isPropertyOfComment, validator(commentValidator), controllerComments);
router.delete("/:id", passport.authenticate("jwt", { session: false }), isPropertyOfComment, destroyComment);

export default router