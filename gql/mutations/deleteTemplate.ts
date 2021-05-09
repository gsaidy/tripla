import { gql } from '@apollo/client';

const DELETE_TEMPLATE = gql`
  mutation DeleteTemplate($id: Int!) {
    delete_templates_by_pk(id: $id) {
      id
    }
  }
`;

export default DELETE_TEMPLATE;
