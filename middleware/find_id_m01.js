import Author from '../models/Author.js'

async function finds_id(req, res, next) {
   const author = await Author.findOne({user_id:req.user._id})
   if (!author){
    return res.status(400).json({
        message: "not found"
    })
   }
   req.body.author_id = author._id
   next()
}
export default finds_id;