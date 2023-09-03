import chapters from "../../routes/chapters.js"

export default function (req, res) {
  try {
      return res.status(200).json({
              success: true,
              response: 'ok',
              message : '/chapters'
      });
  } catch (error) {

  }
}