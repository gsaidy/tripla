import { FC } from 'react';
import Head from 'next/head';

import TypesOverview from '../components/TypesOverview/TypesOverview';

const TypesOverviewPage: FC = () => (
  <>
    <Head>
      <title>Types Overview - Tripla</title>
    </Head>
    <TypesOverview />
  </>
);

export default TypesOverviewPage;
