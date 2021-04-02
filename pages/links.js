import { Fragment } from 'react';
import Head from 'next/head';
import ShortenedItemsList from '../components/ShortenedItemsList.js';
import Title from '../components/Title.js';
import MasterLayout from '../components/core/MasterLayout.js';

import { ApiClientBuilder } from '../services/ApiClientBuilder.js';


export default function Links({ items }) {
  return <Fragment>
    <Head>
      <title>My Personal Url Shortener</title>
    </Head>
    <MasterLayout>
      <Title />
      <ShortenedItemsList allItems={true} items={items} />
    </MasterLayout>
  </Fragment>;
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