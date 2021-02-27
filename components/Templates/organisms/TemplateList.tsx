import { FC } from 'react';
import { useQuery } from '@apollo/client';

import TemplateTable from '../molecules/TemplateTable';
import GET_TEMPLATES from 'gql/queries/getTemplates';
import PageLoader from '../../PageLoader/PageLoader';
import ErrorResult from '../../ErrorResult/ErrorResult';

const TemplateList: FC = () => {
  const { loading, error, data } = useQuery(GET_TEMPLATES, {
    variables: { offset: 0, limit: 10 },
  });

  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  const { templates } = data;
  return (
    <div className="pt-4">
      <TemplateTable title="Templates" data={templates} />
    </div>
  );
};

export default TemplateList;
