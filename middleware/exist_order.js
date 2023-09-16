// middlewares/exists_order.js
import Chapter from "../models/Chapter.js";

const existsOrderMiddleware = async (req, res, next) => {
  try {
    const { manga_id, order } = req.body;

    // Verifica si ya existe un capítulo con el mismo orden para el mismo manga
    const existingChapter = await Chapter.findOne({ manga_id, order });

    if (existingChapter) {
      return res.status(400).json({
        success: false,
        message: "El número de capítulo (orden) ya existe para este manga.",
      });
    }

    // Si no existe, permite que la solicitud continúe
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};

export default existsOrderMiddleware;
