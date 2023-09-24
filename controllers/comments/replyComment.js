import express from 'express';
import replyComments from '../../models/CommentReply.js';
const router = express.Router();
 // Importa el modelo de replyComments

export const replyCommentsfunction = async (req, res) => {
    try {
        const { comment_id, email, text } = req.body;

        // Verifica si los campos requeridos están presentes
        if (!comment_id,  !email,  !text) {
            return res.status(400).json({ success: false, message: "Todos los campos son requeridos" });
        }

        // Lógica para crear el comentario de respuesta en la base de datos
        const newReply = new replyComments({
            comment_id,
            email,
            text
        });

        await newReply.save();

        // Enviar la respuesta con el nuevo comentario de respuesta
        res.status(200).json({ success: true, response: newReply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
};

