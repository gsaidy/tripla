import { gql } from '@apollo/client';

const CREATE_TEMPLATE = gql`
  mutation CreateTemplate($input: templates_insert_input!) {
    insert_templates_one(object: $input) {
      id
    }
  }
`;

export default CREATE_TEMPLATE;
