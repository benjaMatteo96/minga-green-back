// controllers/authors/create.js
import Author from "../../models/Author.js"

const createOneAuthor = async (req, res, next) => {
    try {
      // Crea un nuevo autor y establece el campo user_id con la información del usuario
      const newAuthor = new Author({
        name: req.body.name,
        last_name: req.body.last_name,
        city: req.body.city,
        country: req.body.country,
        date: req.body.date,
        photo: req.body.photo,
        user_id: req.user._id, // Usa el ID del usuario encontrado en el middleware
        active: req.body.active || false, // Se establece a false por defecto
      });

      await newAuthor.save();

      return res.status(201).json({
        success: true,
        response: newAuthor,
        message: 'Author created successfully'
      });
    } catch (error) { 
      console.error(error); 
      return res.status(500).json({
        success: false,
        response: null,
        message: error.message
      });
    }
}

export default createOneAuthor;
