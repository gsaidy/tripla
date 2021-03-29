import { gql } from '@apollo/client';

const CREATE_TRIP = gql`
  mutation CreateTrip($input: trips_insert_input!) {
    insert_trips_one(object: $input) {
      id
    }
  }
`;

export default CREATE_TRIP;
