import { gql } from '@apollo/client';

const GET_TEMPLATES = gql`
  query GetTemplates(
    $offset: Int!
    $limit: Int!
    $where: templates_bool_exp
    $order_by: [templates_order_by!]
  ) {
    templates(offset: $offset, limit: $limit, where: $where, order_by: $order_by) {
      id
      name
      description
      user {
        name
      }
      createdAt
      updatedAt
    }
    templates_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export default GET_TEMPLATES;
