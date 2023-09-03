import express  from 'express';
import read from "../controllers/category/read.js"
const router = express.Router();

/* GET users listing. */
router.get('/', read);

export default  router;
