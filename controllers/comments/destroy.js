import Comment from "../../models/Comment.js";

const destroyComment = async (req, res, next) => {
    try {
        let destroyComment = await Comment.findByIdAndDelete(req.params.id);
        if (destroyComment) {
            return res.status(200).json({ 
                response:  "comentario eliminado" });
        } else {
            return res.status(404).json({
                 response: "not found" });
        }
    } catch (error) {
        next(error);
    }
}

export default destroyComment;