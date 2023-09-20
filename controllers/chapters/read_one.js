import Chapter from '../../models/Chapter.js'
async function readOneChapters(req, res, next) {
  //req = la solicitud que realiza el usuario.
  // res= la Respuesta  a esa solicitud 

  try {
    let { id } = req.params;
    console.log(req.params);
    const chapter = await Chapter.findById(id);
    //chapter = almacena los capitulos por su ID. a travez de la propiedad findById .
    // condicion mensaje de error.//
    if (!chapter) {
      return res.status(404).json({ message: "Capítulo no encontrado" });
    }

    // Declarar la variable response antes de asignar valores a sus propiedades.
    const response = {
      id: chapter._id,
      title: chapter.title,
      pages: chapter.pages,
    };

    // Obtener el número de capítulo actual desde  la base de datos//
    const currentChapterNumber = chapter.order;

    // Encontrar el capítulo siguiente en función del número de capítulo actual.
    const nextChapter = await Chapter.findOne({
      manga_id: chapter.manga_id,
      order: currentChapterNumber + 1,
    });

    const previousChapter = await Chapter.findOne({
      manga_id: chapter.manga_id,
      order: currentChapterNumber - 1,
    });

    // Si el próximo capítulo existe, agregar su ID a la respuesta bajo la propiedad "nextChapter".
    if (nextChapter) {
      response.nextChapter = nextChapter._id;
    }

    if (previousChapter) {
      response.previousChapter = previousChapter._id;
    }

    res.json(response);

  } catch (error) {
    console.error("Error en readOneChapters:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export default readOneChapters;
