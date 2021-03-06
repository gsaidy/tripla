import { FC } from 'react';
import Head from 'next/head';

import CreateTrip from 'components/Trips/CreateTrip';

const CreateTripPage: FC = () => (
  <>
    <Head>
      <title>Create Trip - Tripla</title>
    </Head>
    <CreateTrip />
  </>
);

export default CreateTripPage;
