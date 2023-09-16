// middlewares/has_permission.js

import Author from '../models/Author.js';

const has_permission = async (req, res, next) => {
  if (req.user && (req.user.role === 1 || req.user.role === 2)) {
    try {
      const author = await Author.findOne({ user_id: req.user._id });
      if (author) {
        req.author = author;
        next();
      } else {
        res.status(403).json({ error: 'You do not have permission to access this route.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error.' });
    }
  } else {
    res.status(403).json({ error: 'You do not have permission to access this route.' });
  }
};

export default has_permission;
