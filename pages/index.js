import { Fragment } from 'react';
import Head from 'next/head';
import MasterLayout from '../components/core/MasterLayout.js';
import ShortenSection from '../components/ShortenSection.js';
import Title from '../components/Title.js';

import { ApiClientBuilder } from '../services/ApiClientBuilder.js';
import Logger from '../services/Logger.js';


export default function Home({ items }) {

  Logger.info('Home', 'Home', 'init');
  let service = ApiClientBuilder.build();

  Logger.info('Home', 'Home', 'ApiClientBuilder instantiated');

  return <Fragment>
    <Head>
      <title>My Personal Url Shortener</title>
      <meta name="description" content="A personal shorten url application that allows to manage your own links and spread them across social media networks and evaluate the impact of the use of each of them." />
    </Head>
    <MasterLayout>
      <Title />
      <ShortenSection service={service} items={items} />
    </MasterLayout>
  </Fragment>;
}

export async function getServerSideProps() {

  Logger.info('Home', 'getServerSideProps', 'init');
  let service = ApiClientBuilder.build();

  Logger.info('Home', 'getServerSideProps', 'ApiClientBuilder instantiated');

  return service.find({limit: 5}).then(collection => {
    return {
      props: {
        items: collection
      }
    };
  });
}