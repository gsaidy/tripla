import { gql } from '@apollo/client';

import TRIP_DETAILS from '../fragments/tripDetails';

/*
  As of 29/03/2021, Hasura does not support updating relationships.
  A RFC for it already exists though https://github.com/hasura/graphql-engine/pull/3852
  For the time being we have to delete the trip and insert it again while passing the same ID.
*/
const UPDATE_TRIP = gql`
  mutation UpdateTrip($id: Int!, $input: trips_insert_input!) {
    delete_trips_by_pk(id: $id) {
      id
    }
    insert_trips_one(object: $input) {
      ...TripDetails
    }
  }
  ${TRIP_DETAILS}
`;

export default UPDATE_TRIP;
