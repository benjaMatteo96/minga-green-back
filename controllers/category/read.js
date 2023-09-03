import Category from "../../models/Category.js"

async function  getCategories (req,res,next){ 
  let categories = await Category.find()
  res.status(200).json(categories)
}

export default getCategories