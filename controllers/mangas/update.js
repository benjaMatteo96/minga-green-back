import Manga from '../../models/Manga.js'

// Controlador para actualizar un manga por ID
const updateManga = async (req, res, next) => {
  const {id} = req.params;
  try {

    const manga = await Manga.findOneAndUpdate({_id:id},req.body);

    res.status(200).json({ message: 'Manga actualizado correctamente.' });
  } catch (error) {
    return res.status(404).json({ message: 'Manga no encontrado.' });
 
  }
};

export default updateManga;

