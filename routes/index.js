import express from 'express';
import userRouter from '../routes/auth'
import authorsRouter from '../routes/authors'
import chaptersRouter from '../routes/chapters'
import mangasRouter from '../routes/magas'


const router = express.Router();

router.use('/auth', userRouter);

router.use('/authors', authorsRouter);

router.use('/chapters', chaptersRouter);

router.use('/magas', mangasRouter);



export default  router;




/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
