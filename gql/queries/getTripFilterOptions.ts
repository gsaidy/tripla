import { gql } from '@apollo/client';

const GET_TRIP_FILTER_OPTIONS = gql`
  query GetTripFilterOptions($where: trips_bool_exp) {
    trips(where: $where, order_by: { name: asc }) {
      name
    }
  }
`;

export default GET_TRIP_FILTER_OPTIONS;
