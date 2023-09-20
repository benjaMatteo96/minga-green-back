import Manga from '../../models/Manga.js';

const getMyMangas = async (req, res, next) => {
  try {

    const userId = req.user._id;
    const mangas = await Manga.find({ author_id: userId });

    if (!mangas || mangas.length === 0) {
      return res.status(404).json({ message: 'No se encontraron mangas para este autor.' });
    }
    res.status(200).json({ mangas });
  } catch (error) {
    next(error);
  }
};

export default getMyMangas