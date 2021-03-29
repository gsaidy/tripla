import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/client';

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

const TripDetails: FC<{ id: string | string[] }> = ({ id }) => {
  const [session] = useSession();
  const [formMode, setFormMode] = useState(FormMode.View);
  const { loading, error, data } = useQuery(GET_TRIP_DETAILS, { variables: { id } });

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

  const updateTrip = (trip: Trip) => {
    console.log(trip);
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
            {formMode === FormMode.View && (
              <>
                <EditButton entity={EntityType.Trip} onClick={() => setFormMode(FormMode.Edit)} />
                <DeleteButton entity={EntityType.Trip} onConfirm={() => ({})} />
              </>
            )}
          </FormActions>
        )}
      </TripForm>
    </div>
  );
};

export default TripDetails;
