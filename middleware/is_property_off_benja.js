import Manga from "../models/Manga.js";
import Author from "../models/Author.js";

const isPropertyManga = async (req, res, next) => {
    try {
        const { id } = req.params;
        const manga = await Manga.findById(id);

        if (!manga) {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'Manga not found'
            });
        }
        console.log(req.body)

        if (String(manga.author_id) === String(req.body.author_id)) {
            next();
        } else {
            res.status(401).json({
                success: false,
                response: null,
                message: 'You are not authorized to perform this action'
            });
        }
    } catch (error) {
        console.error(error);
        // Asegúrate de manejar el error de manera apropiada aquí
        res.status(500).json({
            success: false,
            response: null,
            message: 'Internal Server Error'
        });
    }
};

export default isPropertyManga;
