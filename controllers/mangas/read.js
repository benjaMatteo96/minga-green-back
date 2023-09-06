
import Manga from "../../models/Manga.js"

export default async function (req, res) {
  try {
  const mangas = await Manga.find()
      return res.status(200).json({
              success: true,
              response: 'ok',
              message : '/mangas',
              mangas: mangas
      });
  } catch (error) {

  }
}