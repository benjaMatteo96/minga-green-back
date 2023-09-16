// M01-middlewares para verificar que el autor que quieree crear un capitulo es el mismo dueño que
//creo el manga//
const isPropertyOf = () => async (req, res, next) => {

    if (req.manga.author_id.toString() === req.author._id.toString()) {
        // El autor es el dueño del manga, permitir el acceso
        next();
    } else {

        res.status(403).json({
            success: false,
            Response: null,
            message: ['not allow']
        });
    }
}

export default isPropertyOf;

