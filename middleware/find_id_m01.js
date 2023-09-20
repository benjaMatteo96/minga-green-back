import Author from '../models/Author.js'

async function finds_id(req, res, next) {
    const { _id } = req.user;
    try {
        const idAuthor = await Author.findOne({ user_id: _id });
        if (idAuthor) {
            req.author = idAuthor
            next();
        } else {
            return res.status(400).json({
                success: false,
                message: 'Author not found',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
}
export default finds_id;