import { FC } from 'react';
import { useSession } from 'next-auth/client';

import PageLoader from '../PageLoader/PageLoader';
import MyTripList from './organisms/TripList';
import CreatorFilter from 'enums/creatorFilter';
import NotFound from '../NotFound/NotFound';

const MyTrips: FC = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <PageLoader />;
  }
  if (session) {
    return (
      <div className="min-h-tripla">
        <MyTripList createdBy={CreatorFilter.Me} title="My Trips" />
      </div>
    );
  }
  return <NotFound />;
};

export default MyTrips;
