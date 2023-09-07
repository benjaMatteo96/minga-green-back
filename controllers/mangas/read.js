import Manga from "../../models/Manga.js"; 


async function getAllMangas(req, res, next) {
  let queries = {}
  let pagination = { page: 1, limit: 4 }
  let order = "asc" /* para que el orden se lo de en la pet */

  if (req.query.order) order = req.query.order
  if (req.query.page) pagination.page = req.query.page
  if (req.query.quantity) pagination.limit = req.query.quantity
  if (req.query.title) queries.title = new RegExp(req.query.title, 'i')
  if (req.query.category) queries['category_id'] = req.query.category.split(",")
  console.log(queries)

  let count = await Manga.estimatedDocumentCount()

  let mangas = await Manga.find(queries)
    .populate("category_id", "name -_id") 
    .populate("author_id", "name -_id") 
    .sort({ title: order })
    .select("title author_id cover_photo category description")
    .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0) //recorta
    .limit(pagination.limit > 0 ? pagination.limit : 0) //limita

  return res.status(200).json({ mangas, count }) 
}

export default getAllMangas; 