import Manga from '../../models/Manga.js'; // Importa el modelo de Manga
import Chapter from '../../models/Chapter.js'; // Importa el modelo de Chapter

// Controlador para eliminar un manga y sus capítulos
const destroyManga = async (req, res, next) => {
  try {
    // Obtén el ID del manga que se debe eliminar desde req.params
    const mangaId = req.params.id;

    // Busca el manga por ID
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res.status(404).json({
        success: false,
        Response: null,
        message: ['Manga no encontrado.'],
      });
    }

    // Elimina todos los capítulos correspondientes a ese manga
    await Chapter.deleteMany({ manga: mangaId });

    // Elimina el manga
    await Manga.findByIdAndDelete(mangaId);

    res.status(200).json({
      success: true,
      Response: null,
      message: ['Manga y todos los capítulos correspondientes eliminados correctamente.'],
    });
  } catch (error) {
    next(error);
  }
};

export default destroyManga;
