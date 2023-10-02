import express from 'express';

import userRouter from '../routes/auth.js'
import authorsRouter from '../routes/authors.js'
import chaptersRouter from '../routes/chapters.js'
import mangasRouter from '../routes/mangas.js'
import categoriesRouter from '../routes/categories.js'
import commentsRouter from '../routes/comments.js';
import paymentsRoutes from '../routes/payments.routes.js'

const router = express.Router();

router.use('/auth', userRouter);/* usuario */

router.use('/authors', authorsRouter);

router.use('/chapters', chaptersRouter); 

router.use('/mangas', mangasRouter);

router.use('/categories',categoriesRouter)

router.use('/comments', commentsRouter )

router.use('/payments',paymentsRoutes)

export default  router;




/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
