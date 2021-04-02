import { FC } from 'react';
import Head from 'next/head';

import Trips from 'components/Trips/Trips';

const TripsPage: FC = () => (
  <>
    <Head>
      <title>Trips - Tripla</title>
    </Head>
    <Trips />
  </>
);

export default TripsPage;
