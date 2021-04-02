import Analytics from '../../../services/Analytics.js';
import AnalyticsRepostory from '../../../repositories/Analytics.js';
import ShortenedLinksRepository from '../../../repositories/ShortenedLinks.js';
import Shortened from '../../../services/Shortened.js';


export default async (req, res) => {
  
  // TODO: change input parameters to be set in a builder service
  let service = new Shortened({
    model: new ShortenedLinksRepository()
  });

  let analyticsService = new Analytics({
    model: new AnalyticsRepostory()
  });

  const id = req.query.shortenId;
  const item = await service.get(id);
  
  try {
    analyticsService.create({
      req,
      resourceId: id,
      item
    });
  } catch(err) {
    console.log('>>> ERROR when adding analytics item', err);
  }

  if(null === item) {
      res.status(404).json({ error: 'not found' });
  } else {
      await service.update(id);
      res.redirect(307, item.source);
  }
}
  