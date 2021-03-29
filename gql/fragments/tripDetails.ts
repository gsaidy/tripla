import { gql } from '@apollo/client';

const TRIP_DETAILS = gql`
  fragment TripDetails on trips {
    id
    name
    destination
    template {
      id
      name
      user {
        id
        name
      }
    }
    user {
      id
      name
    }
    createdAt
  }
`;

export default TRIP_DETAILS;
