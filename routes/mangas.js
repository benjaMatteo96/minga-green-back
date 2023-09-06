import express  from 'express';
import read from "../controllers/mangas/read.js"
import readNews from "../controllers/mangas/read_news.js"
const router = express.Router();

/* GET users listing. */
router.get('/', read);
router.get('/news', readNews);

export default  router;
