import Author from '../models/Author.js';

const find_id = async (req, res, next) => {
  try {
    console.log('usuarioreq', req.user);
    //Mediante la info del usuario que está en req.user, obtener la info del autor y agregarla a req.author = author
    const author = await Author.findOne({ user_id: req.user._id });
    console.log('ojala', author);

    if (author) {
      req.author = author; // Asigna el autor a req.author para que esté disponible en el controlador get_me
    }

    return next();
  } catch (error) {
    console.error("Error no tiene permiso de author", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default find_id;
