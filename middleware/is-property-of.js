// M01-middlewares//
const isPropertyOf = () => async (req, res, next) => {
    // Suponiendo que el manga se encuentra en req.manga y el usuario autenticado en req.author
    if (req.manga.author_id.toString() === req.author._id.toString()) {
        // El autor es el dueño del manga, permitir el acceso
        next();
    } else {
        // El autor no es el dueño del manga, denegar el acceso
        res.status(403).json({
            success: false,
            Response: null,
            message: ['not allow']
        });
    }
}

export default isPropertyOf;


// probar el middleware en POST  //
