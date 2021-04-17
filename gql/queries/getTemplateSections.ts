import { gql } from '@apollo/client';

import TEMPLATE_SECTIONS from '../fragments/templateSections';

const GET_TEMPLATE_SECTIONS = gql`
  query GetTemplateSections($id: Int!) {
    templates_by_pk(id: $id) {
      id
      ...TemplateSections
    }
  }
  ${TEMPLATE_SECTIONS}
`;

export default GET_TEMPLATE_SECTIONS;
