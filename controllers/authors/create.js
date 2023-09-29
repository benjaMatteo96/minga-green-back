import Author from "../../models/Author.js";
import express from 'express';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getStorage } from 'firebase/storage';

const createOneAuthor = async (req, res, next) => {
  console.log(req.file)
  try {
/*     const storage = getStorage(); // No es necesario pasar firebaseApp si ya lo has inicializado en otro lugar

    if (req.file) {
      const storageRef = ref(storage, `images/${req.file.originalname}`); // Usar req.file.originalname para obtener el nombre del archivo

      try {
        // Sube la imagen a Firebase Storage
        await uploadBytesResumable(storageRef, req.file.buffer);

        // Obtiene la URL de descarga de la imagen
        const downloadURL = await getDownloadURL(storageRef);

        // Asigna la URL de descarga al campo 'photo' en req.body
        req.body.photo = downloadURL;
        console.log('URL de descarga de la imagen:', downloadURL);
      } catch (error) {
        console.error('Error al cargar la imagen en Firebase Storage:', error);
      }
    }
 */
    // Crea un nuevo autor y establece el campo user_id con la información del usuario
    const newAuthor = new Author({
      name: req.body.name,
      last_name: req.body.last_name,
      city: req.body.city,
      country: req.body.country,
      date: req.body.date,
      photo: req.body.photo, // Utiliza la URL de descarga que configuraste
      user_id: req.user._id, // Usa el ID del usuario encontrado en el middleware
      active: req.body.active || false, // Se establece a false por defecto
    });

    await newAuthor.save();

    return res.status(201).json({
      success: true,
      response: newAuthor,
      message: 'Author created successfully'
    });
  } catch (error) { 
    console.error(error); 
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message
    });
  }
};

export default createOneAuthor;
