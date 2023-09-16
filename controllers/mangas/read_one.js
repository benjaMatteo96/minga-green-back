import Manga from '../../models/Manga.js'

/* async function getOneId (req, res, next) {
    try {
        let {id} = req.params
        let doc = await Manga.findById(id)
        return res.status(200).json(doc)
    } catch (error) {
        console.log(error.message)
    }
} */
async function readOne(req, res, next) {
    try {        
    
        let one = await Manga.findById(req.params.id) 
        .populate("category_id", "name -_id")
        if(!one){
            return res.status(404).json({ message: 'Not found' })
        }
        return res.status(200).json(one) /* si la condición de arriba se cumple esta linea no se lee */
    } catch (error) {
console.log(error)
return res.status(500).json({message:'internal error'})
    }
    
}
export default readOne