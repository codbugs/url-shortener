import { Fragment } from 'react';
import Head from 'next/head';
import ShortenedItemsList from '../components/ShortenedItemsList.js';
import Title from '../components/Title.js';
import MasterLayout from '../components/core/MasterLayout.js';

import { ApiClientBuilder } from '../services/ApiClientBuilder.js';


export default function Links({ items }) {
  return <Fragment>
    <Head>
      <title>My Personal Url Shortener - All links</title>
      <meta name="description" content="A personal shorten url application that allows to manage your own links and spread them across social media networks and evaluate the impact of the use of each of them." />
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