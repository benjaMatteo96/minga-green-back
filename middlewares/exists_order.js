const existsOrder = async (req, res, next) => {
    try {
        const { manga_id, order } = req.body;
        const existingChapter = await Chapter.findOne({ manga_id, order });

        if (existingChapter) {
            return res.status(400).json({
                success: false,
                message: "El capítulo ya existe",
                response: null
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            response: null
        });
    }
};

export default existsOrder;


