import { FC } from 'react';
import Head from 'next/head';

import MyTrips from 'components/Trips/MyTrips';

const MyTripsPage: FC = () => (
  <>
    <Head>
      <title>My Trips - Tripla</title>
    </Head>
    <MyTrips />
  </>
);

export default MyTripsPage;
