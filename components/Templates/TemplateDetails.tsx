import { FC } from 'react';
import { useQuery } from '@apollo/client';

import GET_TEMPLATE_DETAILS from 'gql/queries/getTemplateDetails';
import PageLoader from '../PageLoader/PageLoader';

const TemplateDetails: FC<{ id: string | string[] }> = ({ id }) => {
  const { loading } = useQuery(GET_TEMPLATE_DETAILS, { variables: { id } });
  if (loading) {
    return <PageLoader />;
  }
  return null;
};

export default TemplateDetails;
