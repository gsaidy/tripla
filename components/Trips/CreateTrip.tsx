import { FC, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import SignInBanner from '../SignIn/molecules/SignInBanner';
import EntityType from 'enums/entityType';
import TripForm from './organisms/TripForm';
import FormActions from '../FormActions/FormActions';
import SubmitButton from '../FormActions/atoms/SubmitButton';
import CREATE_TRIP from 'gql/mutations/createTrip';
import Trip from 'interfaces/trip';
import { mapUser } from 'utils/mappers';
import User from 'interfaces/user';
import { showLoadingMessage, showErrorMessage, showSuccessMessage } from 'utils/feedback';
import FormMode from 'enums/formMode';

const CreateTrip: FC = () => {
  const [session, loading] = useSession();
  const [
    createTripMutation,
    { loading: createLoading, error: createError, data: createData },
  ] = useMutation(CREATE_TRIP);
  const router = useRouter();

  useEffect(() => {
    if (createLoading) {
      showLoadingMessage('Creating trip...');
    } else if (createError) {
      showErrorMessage('An error occurred. Please try again.');
    } else if (createData) {
      showSuccessMessage('Trip successfully created.');
      const {
        insert_trips_one: { id: createdTripId },
      } = createData;
      router.push(`/trips/${createdTripId}`);
    }
  }, [createLoading, createError, createData, router]);

  const createTrip = (trip: Trip) => {
    createTripMutation({
      variables: {
        input: { ...trip, ...mapUser(session?.user as User | undefined) },
      },
    });
  };

  return (
    <div
      className={`min-h-tripla bg-gray-50 ${createLoading ? 'opacity-50 pointer-events-none' : ''}`}
    >
      {!session && !loading && <SignInBanner entity={EntityType.Trip} />}
      <TripForm formMode={FormMode.Create} onSubmit={createTrip}>
        <FormActions fullWidth={true}>
          <SubmitButton
            label={createLoading ? 'Creating Trip' : 'Create Trip'}
            loading={createLoading}
          />
        </FormActions>
      </TripForm>
    </div>
  );
};

export default CreateTrip;
