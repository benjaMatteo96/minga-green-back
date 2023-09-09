import Chapter from "../../models/Chapter.js"



const getPaginatedChapters = async (req, res) => {
  try {
    const mangaId = req.query.manga_id;
    const page = parseInt(req.query.page) || 1;
    const limit = 6;


    // Utiliza el modelo Chapter para buscar los capítulos del manga paginados y ordenados
    const chapters = await Chapter.find({ manga_id: mangaId }).select("title")
      .sort({ order: 1 }) // Ordena por el campo "order" de forma ascendente
      .skip((page - 1) * limit) // Salta los capítulos de páginas anteriores
      .limit(limit); // Limita la cantidad de capítulos por página


    // Calcular prev y next para informar sobre la existencia de páginas anteriores y siguientes
    const totalChapters = await Chapter.countDocuments({ manga_id: mangaId });
    const totalPages = Math.ceil(totalChapters / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    res.status(200).json({
      message: 'Capítulos encontrados satisfactoriamente.',
      chapters: chapters,
      prev: hasPrevPage,
      next: hasNextPage,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar los capítulos.' });
  }
};

export default getPaginatedChapters;
