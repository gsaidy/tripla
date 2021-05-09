import { gql } from '@apollo/client';

const GET_TRIP_TEMPLATE_OPTIONS = gql`
  query GetTripTemplateOptions {
    templates(order_by: { name: asc }) {
      id
      name
      user {
        name
      }
    }
  }
`;

export default GET_TRIP_TEMPLATE_OPTIONS;
