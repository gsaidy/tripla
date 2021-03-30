import { gql } from '@apollo/client';

const GET_TRIPS_USING_TEMPLATE = gql`
  query GetTripsUsingTemplate($id: Int!) {
    trips(where: { templateId: { _eq: $id } }) {
      id
      name
    }
  }
`;

export default GET_TRIPS_USING_TEMPLATE;
