import { Model } from '../../../services/Model.js';
import Shortened from '../../../services/Shortened.js';


export default (req, res) => {
    
    let service = new Shortened({
        domain: 'localhost',
        model: Model,
        protocol: 'http',
        port: 3000
    });

    const method = req.method;
    
    // GET -> get all items
    if('GET' === method) {
        const items = service.find();
        res.status(200).json([...items]);
    }

    // POST -> create item
    if('POST' === method) {
        const source = req.body.source;
        const item = service.create(source);
        res.status(200).json(item);
    }
}