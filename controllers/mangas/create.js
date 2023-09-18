import Manga from '../../models/Manga.js';

export default async (req, res, next) => {
    try {
        let createManga = await Manga.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'created',
            response: createManga
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
