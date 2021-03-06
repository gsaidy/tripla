import { gql } from '@apollo/client';

const TEMPLATE_SECTIONS = gql`
  fragment TemplateSections on templates {
    sections(order_by: { order: asc }) {
      id
      name
      order
      attributes {
        id
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
  }
`;

export default TEMPLATE_SECTIONS;
