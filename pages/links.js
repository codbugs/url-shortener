import ShortenedItemsList from '../components/ShortenedItemsList.js';
import Title from '../components/Title.js';
import MasterLayout from '../components/core/MasterLayout.js';

import { ApiClientBuilder } from '../services/ApiClientBuilder.js';


export default function Links({ items }) {
  return <MasterLayout>
    <Title />
    <ShortenedItemsList allItems={true} items={items} />
  </MasterLayout>;
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