import { gql } from '@apollo/client';

const TEMPLATE_DETAILS = gql`
  fragment TemplateDetails on templates {
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
`;

export default TEMPLATE_DETAILS;
