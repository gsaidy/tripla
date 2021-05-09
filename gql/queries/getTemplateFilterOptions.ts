import { gql } from '@apollo/client';

const GET_TEMPLATE_FILTER_OPTIONS = gql`
  query GetTemplateFilterOptions($where: templates_bool_exp) {
    templates(where: $where, order_by: { name: asc }) {
      name
    }
  }
`;

export default GET_TEMPLATE_FILTER_OPTIONS;
