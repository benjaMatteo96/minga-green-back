import Comment from "../../models/Comment.js";
import CommentReply from "../../models/CommentReply.js"
import User from "../../models/User.js";

export const getAllCommentsFromChapter = async (req, res, next) => {
  try {
    const { chapter_id, manga_id } = req.query;

    // Paginación
    const page = parseInt(req.query.page) || 1;
    const limit = 4;

    const skip = (page - 1) * limit;

    // Consulta para obtener comentarios ordenados por fecha de creación
    const query = {
      chapter_id,
      manga_id,
    };

    const comments = await Comment.find(query)
      .populate({path: "user_id"})
      .populate({path: "replies_id"})
      .sort({ createdAt: "desc" })
      .skip(skip)
      .limit(limit)
      .select("-created_at"); // Excluir datos sensibles

    // Obtén la cantidad total de comentarios para calcular el número de páginas
    const totalComments = await Comment.countDocuments(query);

    // Calcula el número de páginas
    const totalPages = Math.ceil(totalComments / limit);
    
    return res.status(200).json({
      success: true,
      response: {
        comments,
        totalPages,
      },
      message: "Comments retrieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
};