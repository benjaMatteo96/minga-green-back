import Manga from "../models/Manga.js";

// Middleware para verificar si el autor autenticado es el propietario del manga
const isPropertyOf = () => async (req, res, next) => {
  try {
    const { _id } = req.params;

    // Obtén el manga por su ID
    const manga = await Manga.findById(_id);

    if (!manga) {
      return res.status(404).json({
        success: false,
        Response: null,
        message: ['Manga no encontrado.'],
      });
    }

    // Verifica si el autor autenticado es el propietario del manga
    if (manga.author_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        Response: null,
        message: ['No tienes permiso para actualizar este manga.'],
      });
    }

    // Si todo está en orden, permite el acceso
    next();
  } catch (error) {
    next(error);
  }
};

export default isPropertyOf;
