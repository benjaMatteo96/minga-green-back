// IMPORTANDO module Chatpter (Los modulos dan estructura a la base de datos)
import Chapter from '../../models/Chapter.js'


// esta funcion asincrononica  nos permite crear la logica para manejar  la solicitud HTTP del usuario//



// TRY se utuliza convinando catch para manejar errores//
async function readOneChapters(req, res, next) {
  try {
    const chapterId = req.params.id
    // const  chapterId permite utilizar un valor para buscar  y trabajar con un capitulo correspondiente
    // en una base de datos//
    const mangaId = req.query.manga_id
    // const MangaId  almacena la solicitud  a travez del ID //
    const chapter = await Chapter.findById(chapterId)
    // const  chapter realiza  la consulta para obtener el capitulo y sus paginas//
    if (!chapter) {
      return res.status(404).json({ message: "capitulo no encontrado" });
    }
    // reponse prepara la respuesta con las propiedades estandar y las paginas del capitulo//
    const response = {
      id: chapter._id,
      title: chapter.title,
      pages: chapter.pages
    }
    res.json(response);
  } catch (error) {

  }
}

