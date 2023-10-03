// middlewares ,M03-endpoint (sprint4)//
//middlewares de find_idadmin//

import Author from '../models/Author.js';

const findAuthorById = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        // aca estoy  Obteniendo el ID del autor desde los parámetros de la URL//

        // Buscar al autor por ID en la base de datos
        const author = await Author.findById(authorId);

        if (author) {
            req.author = author; // Asigna el autor encontrado a req.author para que esté disponible en el controlador correspondiente
            next();
        } else {
            res.status(404).json({ message: 'Autor no encontrado' });
        }
    } catch (error) {
        console.error("Error al buscar el autor por ID", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export default findAuthorById;
