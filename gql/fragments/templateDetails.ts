import { gql } from '@apollo/client';

import TEMPLATE_SECTIONS from './templateSections';

const TEMPLATE_DETAILS = gql`
  fragment TemplateDetails on templates {
    id
    name
    description
    ...TemplateSections
    user {
      id
      name
    }
    createdAt
  }
  ${TEMPLATE_SECTIONS}
`;

export default TEMPLATE_DETAILS;
