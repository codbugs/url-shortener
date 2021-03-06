import { Model } from '../../../services/Model.js';
import Shortened from '../../../services/Shortened.js';


export default (req, res) => {
 
  let service = new Shortened({
      domain: 'localhost',
      model: Model,
      protocol: 'http',
      port: 3000
  });

  const id = req.query.shortenId;

  const item = service.get(id);

  if(null === item) {
      res.status(404).json({ error: 'id not found' });
  } else {
      res.status(200).json(item);
  }
}
  