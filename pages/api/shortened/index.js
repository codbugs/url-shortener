import ShortenedLinksRepository from '../../../repositories/ShortenedLinks.js';
import Shortened from '../../../services/Shortened.js';


export default async (req, res) => {
    
    let service = new Shortened({
        domain: 'localhost',
        model: new ShortenedLinksRepository(),
        protocol: 'http',
        port: 3000
    });

    const method = req.method;
    
    // GET -> get all items
    if('GET' === method) {
        // NOTE: You must use async/await notation to avoid warning message about stalled requests
        const items = await service.find();
        res.status(200).json(items);
    }

    // POST -> create item
    if('POST' === method) {
        const source = req.body.source;
        const item = await service.create(source);
        res.status(200).json(item);
    }
}