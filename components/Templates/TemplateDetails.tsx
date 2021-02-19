import { FC } from 'react';
import { useQuery } from '@apollo/client';

import GET_TEMPLATE_DETAILS from 'gql/queries/getTemplateDetails';
import PageLoader from '../PageLoader/PageLoader';
import ErrorResult from '../ErrorResult/ErrorResult';
import NotFound from '../NotFound/NotFound';
import TemplateForm from './organisms/TemplateForm';
import Template from 'interfaces/template';

const TemplateDetails: FC<{ id: string | string[] }> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_TEMPLATE_DETAILS, { variables: { id } });
  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  const {
    templates: [template],
  } = data;
  if (!template) {
    return (
      <NotFound
        title="Template Not Found"
        subTitle="Sorry, the requested template does not exist."
        href="/templates"
        buttonText="Back to Template List"
      />
    );
  }

  const updateTemplate = (template: Template) => {
    console.log(template);
  };

  return <TemplateForm templateInitialData={template} onSubmit={updateTemplate} />;
};

export default TemplateDetails;
