import ShortenSection from '../components/ShortenSection.js';

import { ApiClientBuilder } from '../services/ApiClientBuilder.js';


export default function Home({ items }) {

  let service = ApiClientBuilder.build();

  return <ShortenSection service={service} items={items} />;
}

export async function getServerSideProps() {

  let service = ApiClientBuilder.build();

  return service.find().then(collection => {
    return {
      props: {
        items: collection
      }
    };
  });
}