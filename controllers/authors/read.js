import authors from "../../routes/authors.js"
import Author from "../../models/Author.js"

export default async function (req, res) {
  try {
  const author = await Author.find()
      return res.status(200).json({
              success: true,
              response: 'ok',
              message : '/authors',
              authors: author
      });
  } catch (error) {
    console.log(error)
  }
}