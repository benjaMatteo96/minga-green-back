// controllers Administrador (M03-endpoints)//

import author from '../../models/Author'
import passport from 'passport'

// funcion controlador para  manejo de solicitud GET (autores activos e inactivos)//
const controllerAdmins = async (req, res) => {
    try {
        // obteniendo informacion del usuario auutenticando  con (passport)//
        const { _id, name, email, } = req.user;

        // Paso 2: Buscar autores activos e inactivos en la base de datos
        const activeAuthors = await User.find({ role: 'author', active: true });
        const inactiveAuthors = await User.find({ role: 'author', active: false });

        // Paso 3: Responder con los autores activos e inactivos.
        res.status(200).json({
            user: { _id, name, email }, // Información del usuario autenticado
            activeAuthors, // Autores activos
            inactiveAuthors, // Autores inactivos
        });

    }
    catch (error) {

        return res.status(500).json({ message: 'Error al obtener autores' });
    }
}
export default controllerAdmins
