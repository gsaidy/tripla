import { gql } from '@apollo/client';

const DELETE_TRIP = gql`
  mutation DeleteTrip($id: Int!) {
    delete_trips_by_pk(id: $id) {
      id
    }
  }
`;

export default DELETE_TRIP;
