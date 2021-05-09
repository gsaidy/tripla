import { gql } from '@apollo/client';

const GET_TRIPS = gql`
  query GetTrips($offset: Int!, $limit: Int!, $where: trips_bool_exp, $orderBy: [trips_order_by!]) {
    trips(offset: $offset, limit: $limit, where: $where, order_by: $orderBy) {
      id
      name
      destination
      template {
        id
        name
      }
      user {
        id
        name
      }
      createdAt
      updatedAt
    }
    trips_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export default GET_TRIPS;
