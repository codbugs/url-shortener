// services
import ShortenedLinksRepository from '../../../repositories/ShortenedLinks.js';
import Shortened from '../../../services/Shortened.js';


// api middleware functions
import trustedDomainBlocker from '../../../middleware/trustedDomainBlocker.js';


function safeParseInt(value) {
    try {
        const parsedValue = parseInt(value);

        if(isNaN(parsedValue)) {
            return 0;
        }

        return parsedValue;
    }
    catch(err) {
        return 0;
    }
}

async function handler(req, res) {
    
    let service = new Shortened({
        domain: 'localhost',
        model: new ShortenedLinksRepository(),
        protocol: 'http',
        port: 3000
    });

    const method = req.method;
    
    // GET -> get all items
    if('GET' === method) {
        const limit = safeParseInt(req.query.limit);
        console.log('>>> API query', req.query.limit);
        console.log('>>> API limit', limit);

        // NOTE: You must use async/await notation to avoid warning message about stalled requests
        const items = await service.find({ limit });
        res.status(200).json(items);
    }

    // POST -> create item
    if('POST' === method) {
        const source = req.body.source;
        const item = await service.create(source);
        res.status(200).json(item);
    }
};

export default async function(req, res) {
    await trustedDomainBlocker(handler)(req, res);
}