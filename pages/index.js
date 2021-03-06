import ShortenSection from '../components/ShortenSection.js';

import ApiManager from '../services/ApiManager.js';


export default function Home() {

  let service = new ApiManager();

  return <ShortenSection service={service}/>;
}