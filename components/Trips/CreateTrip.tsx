import { FC } from 'react';
import { useSession } from 'next-auth/client';

import SignInBanner from '../SignIn/molecules/SignInBanner';
import EntityType from 'enums/entityType';

const CreateTrip: FC = () => {
  const [session, loading] = useSession();

  return (
    <div className="min-h-tripla bg-gray-50">
      {!session && !loading && <SignInBanner entity={EntityType.Trip} />}
    </div>
  );
};

export default CreateTrip;
