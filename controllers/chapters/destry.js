// controllers/chapters/destroy.js

import Chapter from '../../models/Chapter.js';

const destroyChapter = async (req, res) => {
  try {
   // const { id } = req.params;
    const deletedChapter = await Chapter.findOneAndDelete({_id: req.params.id});

    if (!deletedChapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }else{
      res.status(200).json({ message: 'Successfully deleted chapter', deletedChapter })
    }
    
  } catch (error) {
    console.error('Error deleting chapter:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default destroyChapter;
