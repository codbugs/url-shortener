import { Analytics } from '../../../services/Analytics.js';
import { AnalyticsModelBuilder } from '../../../services/AnalyticsModelBuilder.js';
import { Model } from '../../../services/Model.js';
import Shortened from '../../../services/Shortened.js';


export default (req, res) => {
  
  // TODO: change input parameters to be set in a builder service
  let service = new Shortened({
    domain: 'localhost',
    model: Model,
    protocol: 'http',
    port: 3000
  });

  const id = req.query.shortenId;
  const item = service.get(id);
  
  const analyticsItem = AnalyticsModelBuilder.create({
    headers: req.headers,
    short: id,
    target: null === item ? '' : item.source
  });
  Analytics.create(analyticsItem);

  if(null === item) {
      res.status(404).json({ error: 'not found' });
  } else {
      service.update(id);
      res.redirect(307, item.source);
  }
}
  