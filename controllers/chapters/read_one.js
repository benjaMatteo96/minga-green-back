import chapters from "../../routes/chapters.js"

export default function (req, res) { /* Cambiar por una funcion nombrada dentro de una variable
como hice en read de users */
  try {
      return res.status(200).json({
              success: true,
              response: 'ok',
              message : '/chapters'
      });
  } catch (error) {

  }
}