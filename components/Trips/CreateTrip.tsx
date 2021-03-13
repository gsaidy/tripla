import { FC } from 'react';
import { useSession } from 'next-auth/client';

import SignInBanner from '../SignIn/molecules/SignInBanner';
import EntityType from 'enums/entityType';
import TripForm from './organisms/TripForm';
import FormActions from '../FormActions/FormActions';
import SubmitButton from '../FormActions/atoms/SubmitButton';

const CreateTrip: FC = () => {
  const [session, loading] = useSession();

  return (
    <div className="min-h-tripla bg-gray-50">
      {!session && !loading && <SignInBanner entity={EntityType.Trip} />}
      <TripForm>
        <FormActions>
          <SubmitButton label="Create Trip" loading={false} />
        </FormActions>
      </TripForm>
    </div>
  );
};

export default CreateTrip;
