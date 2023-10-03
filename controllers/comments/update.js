import Comment from "../../models/Comment.js";
import User from "../../models/User.js";

const controllerComments = 
    async (req, res, next) => {

        try{
            let updateComments = await Comment.findByIdAndUpdate(
                req.params.id, 
                req.body,
                {new: true}
            ) 
            if (updateComments){
                const user = await User.findById(req.user._id).select("photo mail");
                updateComments.user_id=user;
                return res.status(200).json({response: updateComments})
            } else {
                return res.status(404).json({response: "not found"})
            }
            } catch(error){next(error)}
        }
    

    export default controllerComments
// // Importa aquí el middleware is_property_of
// import isPropertyOf from "../../middlewares/is_property_of.js";

// export const updateComment = async (req, res) => {
//   try {
//     const commentId = req.params.id;
//     const userId = req.user._id; // Utiliza la información del usuario autenticado

//     // Verifica si el comentario pertenece al usuario autenticado
//     isPropertyOf.comment(req, res, async () => {
//       try {
//         // Valida la solicitud con el esquema de Joi personalizado
//         const schema = Joi.object({
//           text: Joi.string().required().min(2).max(1000), // Añade restricciones de longitud
//         });

//         const { error } = schema.validate(req.body);

//         if (error) {
//           return res.status(400).json({
//             success: false,
//             response: null,
//             message: error.details[0].message,
//           });
//         }

//         // Actualiza el comentario especificado
//         const updatedComment = await Comment.findByIdAndUpdate(
//           commentId,
//           { text: req.body.text }, // Solo actualiza el campo text
//           { new: true }
//         );

//         if (!updatedComment) {
//           return res.status(404).json({
//             success: false,
//             response: null,
//             message: "Comment not found",
//           });
//         }

//         res.status(200).json({
//           success: true,
//           response: updatedComment,
//           message: "Comment updated successfully",
//         });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({
//           success: false,
//           response: null,
//           message: "Internal server error",
//         });
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       response: null,
//       message: "Internal server error",
//     });
//   }
// };