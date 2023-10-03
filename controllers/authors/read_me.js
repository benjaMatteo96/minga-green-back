import Author from "../../models/Author.js";

/* const id = "64f3a96ad04f0f5ab5f37a6a" */
export default async function readAuthors(req, res) {
    try {
        const author = await Author.findById(req.params.user_id)
        .populate("user_id")
        .select("name last_name country city photo -_id")
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/authors',
                author: author
        });
    } catch (error) {
        console.log(error)
    }
  }