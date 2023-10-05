import Chapter from '../../models/Chapter.js';
import mongoose from 'mongoose';

const updateChapter = async (req, res) => {
    const { id } = req.params;
    console.log('este es el id de param', id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'El ID proporcionado no es válido' });
    }
  try {
      
    // Buscar el capítulo por su ID
    const chapter = await Chapter.findOneAndUpdate(
      {_id:id}, 
      console.log('kadjjdjskjkjsdkjsd',req.body),
      req.body
      //{new : true} //Me devuelve el modificado si lo comento me devuelve el anterior
      )
      

    if (!chapter) {
      return res.status(404).json({ error: 'Capítulo no encontrado' });
    }
    else{
      return res.status(200).json({ message: 'Capítulo actualizado con éxito' });

    }
    return res.status(200).json({ message: chapter });
  } catch (error) {
    console.error('Error al actualizar el capítulo:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default updateChapter;
