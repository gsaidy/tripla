import { gql } from '@apollo/client';

import TEMPLATE_DETAILS from '../fragments/templateDetails';

const GET_TEMPLATE_DETAILS = gql`
  query GetTemplateDetails($id: Int!) {
    templates_by_pk(id: $id) {
      ...TemplateDetails
    }
  }
  ${TEMPLATE_DETAILS}
`;

export default GET_TEMPLATE_DETAILS;
