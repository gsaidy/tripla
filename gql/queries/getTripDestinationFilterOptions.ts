import { gql } from '@apollo/client';

const GET_TRIP_DESTINATION_FILTER_OPTIONS = gql`
  query GetTripDestinationFilterOptions($where: trips_bool_exp) {
    trips(where: $where, order_by: { destination: asc }) {
      destination
    }
  }
`;

export default GET_TRIP_DESTINATION_FILTER_OPTIONS;
