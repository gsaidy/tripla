import { FC } from 'react';
import Head from 'next/head';

import Hero from 'components/Hero/Hero';
import Features from 'components/Features/Features';

const Home: FC = () => (
  <>
    <Head>
      <title>Manage your trip in a simple and customizable way - Tripla</title>
    </Head>
    <div className="min-h-tripla">
      <Hero />
      <Features />
    </div>
  </>
);

export default Home;
