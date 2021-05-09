import { gql } from '@apollo/client';

import TEMPLATE_SECTIONS from './templateSections';

const TRIP_DETAILS = gql`
  fragment TripDetails on trips {
    id
    name
    destination
    template {
      id
      name
      ...TemplateSections
      user {
        id
        name
      }
    }
    user {
      id
      name
    }
    data
    createdAt
  }
  ${TEMPLATE_SECTIONS}
`;

export default TRIP_DETAILS;
