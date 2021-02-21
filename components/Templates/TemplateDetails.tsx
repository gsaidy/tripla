import { FC, useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Popconfirm } from 'antd';
import { useRouter } from 'next/router';

import GET_TEMPLATE_DETAILS from 'gql/queries/getTemplateDetails';
import PageLoader from '../PageLoader/PageLoader';
import ErrorResult from '../ErrorResult/ErrorResult';
import NotFound from '../NotFound/NotFound';
import TemplateForm from './organisms/TemplateForm';
import Template from 'interfaces/template';
import FormMode from 'enums/formMode';
import TemplateActions from './molecules/TemplateActions';
import DELETE_TEMPLATE from 'gql/mutations/deleteTemplate';
import { showLoadingMessage, showErrorMessage, showSuccessMessage } from 'utils/mutationFeedback';

const TemplateDetails: FC<{ id: string | string[] }> = ({ id }) => {
  const [formMode, setFormMode] = useState(FormMode.View);
  const { loading, error, data } = useQuery(GET_TEMPLATE_DETAILS, { variables: { id } });
  const [
    deleteTemplateMutation,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_TEMPLATE);
  const router = useRouter();

  useEffect(() => {
    if (deleteLoading) {
      showLoadingMessage('Deleting template...');
    } else if (deleteError) {
      showErrorMessage('An error occurred. Please try again.');
    } else if (deleteData) {
      showSuccessMessage('Template successfully deleted.');
      router.push('/templates');
    }
  }, [deleteLoading, deleteError, deleteData, router]);

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

  const deleteTemplate = () => {
    deleteTemplateMutation({
      variables: {
        id,
      },
    });
  };

  const updateTemplate = (template: Template) => {
    console.log(template);
  };

  return (
    <div className="min-h-tripla bg-gray-50">
      <TemplateForm formMode={formMode} templateInitialData={template} onSubmit={updateTemplate}>
        {formMode === FormMode.View && (
          <TemplateActions className="-mt-3">
            <Button
              className="rounded"
              type="primary"
              size="large"
              onClick={() => setFormMode(FormMode.Edit)}
            >
              Edit Template
            </Button>
            <Popconfirm
              title="Are you sure you want to delete this template?"
              okText="Yes"
              cancelText="No"
              onConfirm={deleteTemplate}
            >
              <Button className="rounded" size="large" danger>
                Delete Template
              </Button>
            </Popconfirm>
          </TemplateActions>
        )}
      </TemplateForm>
    </div>
  );
};

export default TemplateDetails;
