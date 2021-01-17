import { FC } from 'react';
import Head from 'next/head';

import Hero from '../components/Hero/Hero';

const Home: FC = () => (
  <>
    <Head>
      <title>Manage your trip in a simple and customizable way - Tripla</title>
    </Head>
    <Hero />
  </>
);

export default Home;
