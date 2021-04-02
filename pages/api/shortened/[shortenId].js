// services
import ShortenedLinksRepository from '../../../repositories/ShortenedLinks.js';
import Shortened from '../../../services/Shortened.js';


// api middleware functions
import trustedDomainBlocker from '../../../middleware/trustedDomainBlocker.js';


async function handler(req, res) {
 
  let service = new Shortened({
      model: new ShortenedLinksRepository()
  });

  const id = req.query.shortenId;

  const item = await service.get(id);

  if(null === item) {
      res.status(404).json({ error: 'id not found' });
  } else {
      res.status(200).json(item);
  }
};


export default async function(req, res) {
    await trustedDomainBlocker(handler)(req, res);
}