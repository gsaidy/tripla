import { gql } from '@apollo/client';

/*
  As of 24/02/2021, Hasura does not support updating relationships.
  A RFC for it already exists though https://github.com/hasura/graphql-engine/pull/3852
  For the time being we have to delete the template and insert it again while passing the same ID.
*/
const UPDATE_TEMPLATE = gql`
  mutation UpdateTemplate($id: Int!, $input: templates_insert_input!) {
    delete_templates_by_pk(id: $id) {
      id
    }
    insert_templates_one(object: $input) {
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

export default UPDATE_TEMPLATE;
