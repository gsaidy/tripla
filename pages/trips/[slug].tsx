import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import TripDetails from 'components/Trips/TripDetails';
import PageLoader from 'components/PageLoader/PageLoader';

const TripDetailsPage: FC = () => {
  const {
    query: { slug },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Trip Details - Tripla</title>
      </Head>
      {slug ? <TripDetails id={slug} /> : <PageLoader />}
    </>
  );
};

export default TripDetailsPage;
