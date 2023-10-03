import replyComments from "../../models/CommentReply.js";
import CommentReply from "../../models/CommentReply.js";

export const getAllReplyCommentsFromComments = async (req, res, next) => {
  try {
    const { comment_id } = req.query;
    console.log(comment_id)

    // Paginación
    const page = parseInt(req.query.page) || 1;
    const limit = 4;

    const skip = (page - 1) * limit;

    // Consulta para obtener comentarios de comentarios ordenados por fecha de creación
    const query = {
      comment_id,
    };
    console.log(comment_id)
    const replyComments = await CommentReply.find(query)
    
      .populate({ path: "user_id" }) // Popula el campo "user_id" para obtener información del usuario
      .sort({ createdAt: "desc" })
      .skip(skip)
      .limit(limit)
      .select("-created_at"); // Excluye datos sensibles
      (console.log("hola", replyComments))
    // Obtén la cantidad total de comentarios de comentarios para calcular el número de páginas
    const totalReplyComments = await CommentReply.countDocuments(query);
    console.log(totalReplyComments)

    // Calcula el número de páginas
    const totalPages = Math.ceil(totalReplyComments / limit);

    return res.status(200).json({
      success: true,
      response: {
        replyComments,
        totalPages,
      },
      message: "Reply comments retrieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
};
