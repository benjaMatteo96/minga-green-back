import express from 'express';
import getAllMangas from '../controllers/mangas/read.js';
import checkUserAuthentication from '../utils/authentication';
const router = express.Router();

/* GET users listing. */
router.get('/', getAllMangas);

export default router;


router.get('/mangas/:page', (req, res) => {
    const isAuthenticated = checkUserAuthentication(req);
    if (isAuthenticated) {
        // Renderizar la página de Mangas     r
        es.render('mangas');
    } else {
        // Redirigir al usuario no autenticado a la página de NotAllowed     
        res.redirect('/notallowed');
    }
});