import ShortenSection from '../components/ShortenSection.js';

import Shortened from '../services/Shortened.js';

export default function Home() {

  let service = new Shortened({
    domain: 'localhost',
    protocol: 'http',
    port: 3000
  });

  return <ShortenSection shortenedService={service}/>;
}