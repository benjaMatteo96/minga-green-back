import express  from 'express';
import readOneChapters from '../controllers/chapters/read_one.js '
const router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('estamos en chapters');
});

export default  router;
