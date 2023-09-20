// controllers(M03-endpoints)//
import author from '../../models/Author'
import passport from 'passport'

// funcion controllers para el manejo de solicitud PUT de cambiar el rol
// de un usuario comun a autor//

const updateController = async (req, res) => {

    try {
        // Paso 1: Obteniendo  el usuario a modificar del middleware finds_id
        const userToModify =

            // Paso 2: aca se cambia la propiedad 'active' a true o false para modificar el rol
            userToModify.active = !userToModify.active;

        // Paso 3: Guardar los cambios en la base de datos
        await userToModify.save();


        res.status(200).json({ message: 'Rol del usuario actualizado con éxito' });

    } catch (error) {

        return res.status(500).json({ message: 'Error al actualizar el rol del usuario' });
    }
}
export default updateController