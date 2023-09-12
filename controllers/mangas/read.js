import mangas from "../../routes/mangas.js"

export default function (req, res) {
  try {
      return res.status(200).json({
              success: true,
              response: 'ok',
              message : '/mangas'
      });
  } catch (error) {

  }
}