import { gql } from '@apollo/client';

import TRIP_DETAILS from '../fragments/tripDetails';

const GET_TRIP_DETAILS = gql`
  query GetTripDetails($id: Int!) {
    trips_by_pk(id: $id) {
      ...TripDetails
    }
  }
  ${TRIP_DETAILS}
`;

export default GET_TRIP_DETAILS;
