import { FC } from 'react';
import { useQuery } from '@apollo/client';

import GET_TEMPLATE_DETAILS from 'gql/queries/getTemplateDetails';

const TemplateDetails: FC<{ id: string | string[] }> = ({ id }) => {
  useQuery(GET_TEMPLATE_DETAILS, { variables: { id } });
  return null;
};

export default TemplateDetails;
