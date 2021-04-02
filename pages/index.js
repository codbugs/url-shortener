import { Fragment } from 'react';
import Head from 'next/head';
import MasterLayout from '../components/core/MasterLayout.js';
import ShortenSection from '../components/ShortenSection.js';
import Title from '../components/Title.js';

import { ApiClientBuilder } from '../services/ApiClientBuilder.js';


export default function Home({ items }) {

  let service = ApiClientBuilder.build();

  return <Fragment>
    <Head>
      <title>My Personal Url Shortener</title>
    </Head>
    <MasterLayout>
      <Title />
      <ShortenSection service={service} items={items} />
    </MasterLayout>
  </Fragment>;
}

export async function getServerSideProps() {

  let service = ApiClientBuilder.build();

  return service.find({limit: 5}).then(collection => {
    return {
      props: {
        items: collection
      }
    };
  });
}