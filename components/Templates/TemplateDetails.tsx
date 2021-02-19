import { FC } from 'react';
import { useQuery } from '@apollo/client';

import GET_TEMPLATE_DETAILS from 'gql/queries/getTemplateDetails';
import PageLoader from '../PageLoader/PageLoader';
import ErrorResult from '../ErrorResult/ErrorResult';

const TemplateDetails: FC<{ id: string | string[] }> = ({ id }) => {
  const { loading, error } = useQuery(GET_TEMPLATE_DETAILS, { variables: { id } });
  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  return null;
};

export default TemplateDetails;
