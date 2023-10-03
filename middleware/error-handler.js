//sintaxis d middleware para manejo de error en catch//


function errorHandler(err, req, res, next) {
    console.log(err);
    res.status(500).json({
        success: false,
        response: null,
        message: [err.message]
    });
}

export default errorHandler;

