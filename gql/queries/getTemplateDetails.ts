import { gql } from '@apollo/client';

const GET_TEMPLATE_DETAILS = gql`
  query GetTemplateDetails($id: Int!) {
    templates(where: { id: { _eq: $id } }) {
      id
      name
      description
      sections(order_by: { order: asc }) {
        name
        order
        attributes {
          name
          required
          edit
          view
          options {
            name
            color
          }
        }
      }
      user
    }
  }
`;

export default GET_TEMPLATE_DETAILS;
