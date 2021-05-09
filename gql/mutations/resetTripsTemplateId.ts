import { gql } from '@apollo/client';

const RESET_TRIPS_TEMPLATE_ID = gql`
  mutation CreateTrip($tripIds: [Int!]!, $templateId: Int!) {
    update_trips(where: { id: { _in: $tripIds } }, _set: { templateId: $templateId }) {
      returning {
        id
      }
    }
  }
`;

export default RESET_TRIPS_TEMPLATE_ID;
