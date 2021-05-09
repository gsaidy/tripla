import { FC } from 'react';
import { useSession } from 'next-auth/client';

import PageLoader from '../PageLoader/PageLoader';
import MyTripList from './organisms/TripList';
import OtherUsersTripList from './organisms/TripList';
import AllTripList from './organisms/TripList';
import CreatorFilter from 'enums/creatorFilter';

const Trips: FC = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div className="min-h-tripla max-w-7xl mx-auto py-6 px-4 lg:px-6">
      {session ? (
        <>
          <MyTripList createdBy={CreatorFilter.Me} title="My Trips" />
          <OtherUsersTripList createdBy={CreatorFilter.Other} title="Other Users Trips" />
        </>
      ) : (
        <AllTripList createdBy={CreatorFilter.All} title="Trips" />
      )}
    </div>
  );
};

export default Trips;
