import express from 'express';
import replyComments from '../../models/CommentReply.js';
import Comment from "../../models/Comment.js"

const router = express.Router();
 // Importa el modelo de replyComments

export const replyCommentsfunction = async (req, res) => {
    try {
        const { comment_id, user_id, text } = req.body;
        console.log(user_id)
        // Verifica si los campos requeridos están presentes
        if (!comment_id,  !user_id,  !text) {
            return res.status(400).json({ success: false, message: "Todos los campos son requeridos" });
        }

        // Lógica para crear el comentario de respuesta en la base de datos
        const newReply = new replyComments({
            comment_id,
            user_id,
            text
        });

        await newReply.save();

        let updateComments = await Comment.findByIdAndUpdate(
            comment_id, 
            { $set: { replies_id: newReply._id } },
            {new: true}
        ) 

        // Enviar la respuesta con el nuevo comentario de respuesta
        res.status(200).json({ success: true, response: newReply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
};

