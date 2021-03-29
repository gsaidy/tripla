import { FC, useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import GET_TRIP_DETAILS from 'gql/queries/getTripDetails';
import PageLoader from '../PageLoader/PageLoader';
import ErrorResult from '../ErrorResult/ErrorResult';
import NotFound from '../NotFound/NotFound';
import FormMode from 'enums/formMode';
import Trip from 'interfaces/trip';
import TripForm from './organisms/TripForm';
import User from 'interfaces/user';
import { sameUser } from 'utils/user';
import FormActions from '../FormActions/FormActions';
import EditButton from '../FormActions/atoms/EditButton';
import EntityType from 'enums/entityType';
import DeleteButton from '../FormActions/atoms/DeleteButton';
import DELETE_TRIP from 'gql/mutations/deleteTrip';
import { showLoadingMessage, showErrorMessage, showSuccessMessage } from 'utils/feedback';
import SubmitButton from '../FormActions/atoms/SubmitButton';
import UPDATE_TRIP from 'gql/mutations/updateTrip';
import { mapUser } from 'utils/mappers';

const TripDetails: FC<{ id: string | string[] }> = ({ id }) => {
  const [session] = useSession();
  const [formMode, setFormMode] = useState(FormMode.View);
  const { loading, error, data } = useQuery(GET_TRIP_DETAILS, { variables: { id } });
  const [
    deleteTripMutation,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_TRIP);
  const [
    updateTripMutation,
    { loading: updateLoading, error: updateError, data: updateData },
  ] = useMutation(UPDATE_TRIP);
  const router = useRouter();

  useEffect(() => {
    if (deleteLoading) {
      showLoadingMessage('Deleting trip...');
    } else if (deleteError) {
      showErrorMessage('An error occurred. Please try again.');
    } else if (deleteData) {
      showSuccessMessage('Trip successfully deleted.');
      router.push('/trips');
    }
  }, [deleteLoading, deleteError, deleteData, router]);

  useEffect(() => {
    if (updateLoading) {
      showLoadingMessage('Updating trip...');
    } else if (updateError) {
      showErrorMessage('An error occurred. Please try again.');
    } else if (updateData) {
      showSuccessMessage('Trip successfully updated.');
      setFormMode(FormMode.View);
    }
  }, [updateLoading, updateError, updateData]);

  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  const { trips_by_pk: trip } = data;
  if (!trip) {
    return (
      <NotFound
        title="Trip Not Found"
        subTitle="Sorry, the requested trip does not exist."
        href="/trips"
        buttonText="Back to Trip List"
      />
    );
  }

  const userHasPermissionToEditOrDelete = () => {
    const loggedInUser = session?.user as User;
    const { user: tripCreatedByUser } = trip;
    return sameUser(loggedInUser, tripCreatedByUser);
  };

  const deleteTrip = () => {
    deleteTripMutation({
      variables: {
        id,
      },
    });
  };

  const updateTrip = (updatedTrip: Trip) => {
    updateTripMutation({
      variables: {
        id,
        input: {
          id,
          createdAt: trip.createdAt,
          ...updatedTrip,
          ...mapUser(trip.user),
        },
      },
    });
  };

  return (
    <div className="min-h-tripla bg-gray-50">
      <TripForm
        formMode={formMode}
        tripInitialData={{ ...trip, templateId: trip.template.id }}
        onSubmit={updateTrip}
      >
        {userHasPermissionToEditOrDelete() && (
          <FormActions className={formMode === FormMode.View ? '-mt-3' : ''}>
            {formMode === FormMode.View ? (
              <>
                <EditButton entity={EntityType.Trip} onClick={() => setFormMode(FormMode.Edit)} />
                <DeleteButton entity={EntityType.Trip} onConfirm={deleteTrip} />
              </>
            ) : (
              <>
                <SubmitButton label={updateLoading ? 'Saving' : 'Save'} loading={updateLoading} />
              </>
            )}
          </FormActions>
        )}
      </TripForm>
    </div>
  );
};

export default TripDetails;
