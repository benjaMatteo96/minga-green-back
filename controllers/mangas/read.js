import Manga from "../../models/Manga.js"
import Category from "../../models/Category.js"

async function getAllMangas(req, res) {
  try {
    /* Se captura la pagina */
    const page = parseInt(req.query.page) || 1; // Página actual, por defecto 1. Si la pagina no existe, es 1 por defecto.
    const perPage = 4; // Número de resultados por página

    let mangaQuery = Manga.find({
      $and: [
        { title: { $regex: new RegExp(req.query.title, 'i') } }, // 'i' hace que la búsqueda sea insensible a mayúsculas y minúsculas
        {
          category_id: {
            $in: (await Category.find({ name: req.query.categories.split(',') })).map((c) => c._id),
          },
        },
      ],
    })
      .select('title author description')// Solo selecciona los campos deseados

 // Calcular las páginas totales
 const totalPages = Math.ceil(mangaQuery / perPage);

 // Calcular la página previa y siguiente
 const prevPage = page > 1 ? page - 1 : null;
 const nextPage = page < totalPages ? page + 1 : null;

 const mangas = await mangaQuery
   .sort({ title: 1 })
   .skip((page - 1) * perPage)
   .limit(perPage);

 // Construir la respuesta JSON con propiedades estandar
 const response = {
   mangas,
   prev: prevPage,
   next: nextPage,
 };

 res.json(response);
} catch (error) {
 console.log(error);
}
}

export default getAllMangas



 /*   
    const mangas = await mangaQuery
      .sort({ title: 1 }) // Orden alfabético ascendente por título
      .skip((page - 1) * perPage) // Salta los resultados de las páginas anteriores
      .limit(perPage); // Límite de resultados por página

    res.json(mangas);
  } catch (error) {
    console.log(error)

  }
   */