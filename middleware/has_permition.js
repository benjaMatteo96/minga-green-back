// middlewares/has_permission.js

import Author from '../models/Author.js'; // Importa el modelo Author si tienes uno

const hasPermission = async (req, res, next) => {
  console.log(req)
  
  if (req.user && (req.user.role === 1 || req.user.role === 2)) { // Verificar si el usuario tiene el rol de autor (1 o 2)
    try {
   
      const author = await Author.findOne({ user_id: req.user._id });  // Buscar el autor y agregarlo al objeto req
      if (author) {
        req.author = author;
        next(); // Deja pasar la solicitud
      } else {
        // Si no se encontró el autor, devuelve un mensaje de error
        res.status(403).json({ error: 'No tienes permiso para acceder a esta ruta.' });
      }
    } catch (error) {
      // Manejar errores si la búsqueda del autor falla
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  }
};

export default hasPermission;
