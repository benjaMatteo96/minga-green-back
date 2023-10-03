// controllers Administrador (M03-endpoints)//

import Author from '../../models/Author.js'


// funcion controlador para  manejo de solicitud GET (autores activos e inactivos)//
const controllerAdmins = async (req, res) => {
    try {

        // Verificar si el usuario autenticado tiene permisos de administrador
        if (!req.user || req.user.role !== 3) {
            return res.status(403).json({ message: 'Acceso denegado. Se requieren permisos de administrador.' });
        }

        // Paso 2: Buscar autores activos e inactivos en la base de datos

        const activeAuthors = await Author.find({ active: true });
        const inactiveAuthors = await Author.find({ active: false });

        // Paso 3: Responder con los autores activos e inactivos.
        res.status(200).json({
            user: {
                _id: req.user._id,
                name: req.user.name,
                email: req.user.email,
            },
            activeAuthors,
            inactiveAuthors,
        });

    }
    catch (error) {

        return res.status(500).json({ message: 'Error al obtener autores' });
    }
}
export default controllerAdmins
