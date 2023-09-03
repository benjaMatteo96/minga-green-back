import authors from "../../routes/authors.js"

export default function (req, res) {
  try {
      return res.status(200).json({
              success: true,
              response: 'ok',
              message : '/authors'
      });
  } catch (error) {

  }
}