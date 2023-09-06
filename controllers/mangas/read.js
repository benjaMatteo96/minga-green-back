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
    .select("title -_id author_id cover_photo category description")
    .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0) //recorta
    .limit(pagination.limit > 0 ? pagination.limit : 0) //limita

  return res.status(200).json({ mangas, count }) 
}

export default getAllMangas;

/* import Manga from '../../models/Manga.js'

async function read(req, res, next){
    let queries = {}
    let pagination = {page: 1, limit:4}
    let order = "asc"
    if(req.query.order) order = req.query.order
    if(req.query.page) pagination.page = req.query.page
    if(req.query.quantity) pagination.limit = req.query.quantity

    if(req.query.title) queries.title = new RegExp(req.query.title.trim(),'i')
    if(req.query.category) queries.category_id = req.query.category.split(",")
    let count = await Manga.estimatedDocumentCount()
    let mangas = await Manga.find(queries).populate("category_id", "name -_id").populate("author_id", "name -_id").sort({title:order})
    .skip( pagination.page > 0 ? (pagination.page-1)4 : 0 ) / RECORTA /
    .limit( pagination.limit > 0 ? pagination.limit : 0 ) / LIMITA /

    let prevPage = pagination.page > 1 ? pagination.page - 1 : null;
    let nextPage = pagination.page pagination.limit < count ? pagination.page + 1 : null;

    return res.status(200).json({
        mangas: mangas.map(manga => ({
            id: manga._id,
            title: manga.title,
            description: manga.description,
            category: manga.category_id.name,
            author: manga.author_id.name
        })),
        count,
        prev: prevPage,
        next: nextPage
    });
}

export default read; */

/* try {
    const page = parseInt(req.query.page) || 1; // Página actual, por defecto 1
    const perPage = 4; // Número de resultados por página

    // Configura el filtro por categoría si se proporciona
    let categoryFilter = {};
    if (req.query.category) {
      const categories = req.query.category.split(',');
      categoryFilter = { category: { $in: categories } };
    }

    // Realiza la búsqueda y paginación
    const mangas = await Manga.find(categoryFilter)
      .sort({ title: 1 }) // Orden alfabético ascendente por título
      .skip((page - 1) * perPage) // Salta los resultados de las páginas anteriores
      .limit(perPage); // Límite de resultados por página

    res.json(mangas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Hubo un error al buscar los mangas.' });} */