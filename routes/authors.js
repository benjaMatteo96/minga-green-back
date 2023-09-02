import express  from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('etsamos en authors');
});

export default  router;
