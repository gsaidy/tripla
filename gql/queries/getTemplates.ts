import { gql } from '@apollo/client';

const GET_TEMPLATES = gql`
  query GetTemplates(
    $offset: Int!
    $limit: Int!
    $where: templates_bool_exp
    $orderBy: [templates_order_by!]
  ) {
    templates(offset: $offset, limit: $limit, where: $where, order_by: $orderBy) {
      id
      name
      description
      user {
        id
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
