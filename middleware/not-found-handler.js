// sintaxis de middleware para rutas que  no existan en la app//
function notFoundHandler(req, res, next) {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.url} not found`
    });
}

export default notFoundHandler;
