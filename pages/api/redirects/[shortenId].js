import { Analytics } from '../../../services/Analytics.js';
import { AnalyticsModelBuilder } from '../../../services/AnalyticsModelBuilder.js';
import ShortenedLinksRepository from '../../../repositories/ShortenedLinks.js';
import Shortened from '../../../services/Shortened.js';


export default async (req, res) => {
  
  // TODO: change input parameters to be set in a builder service
  let service = new Shortened({
    domain: 'localhost',
    model: new ShortenedLinksRepository(),
    protocol: 'http',
    port: 3000
  });

  const id = req.query.shortenId;
  const item = await service.get(id);
  
  // const analyticsItem = AnalyticsModelBuilder.create({
  //   headers: req.headers,
  //   short: id,
  //   target: null === item ? '' : item.source
  // });
  // Analytics.create(analyticsItem);

  if(null === item) {
      res.status(404).json({ error: 'not found' });
  } else {
      await service.update(id);
      res.redirect(307, item.source);
  }
}
  