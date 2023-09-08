
import Manga from "../../models/Manga.js"

const idAutor = "64f3a96ad04f0f5ab5f37a66"


export default async function (req, res) {
  try {
  
  const mangas = await Manga.find({ author_id: idAutor})
  if (mangas.length < 4) {
    // Caso 1: Menos de 4 mangas
    return res.status(200).json({
      success: true,
      response: 'ok',
      message: '/mangas',
      mangas: mangas,

    });
  } else if (mangas.length < 8) {
    // Caso 2: Entre 4 y 7 mangas
    const sortedMangas = mangas.sort((a, b) => a.createdAt - b.createdAt);
    const newestMangas = sortedMangas.slice(-2); // Los 2 más nuevos
    const oldestMangas = sortedMangas.slice(0, 2); // Los 2 más viejos

    return res.status(200).json({
      success: true,
      response: 'ok',
      message: '/mangas',
      mangas: mangas,
      all: [...newestMangas, ...oldestMangas]
    });
  } else {
    // Caso 3: 8 o más mangas
    const sortedMangas = mangas.sort((a, b) => a.createdAt - b.createdAt);
    const newestMangas = sortedMangas.slice(-4); // Los 4 más nuevos
    const oldestMangas = sortedMangas.slice(0, 4); // Los 4 más viejos

    return res.status(200).json({
      success: true,
      response: 'ok',
      message: '/mangas',
      mangas: mangas,
      news: newestMangas,
      olds: oldestMangas
    });
  }
  } catch (error) {

  }
}