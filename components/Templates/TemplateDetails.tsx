import { FC, useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import GET_TEMPLATE_DETAILS from 'gql/queries/getTemplateDetails';
import PageLoader from '../PageLoader/PageLoader';
import ErrorResult from '../ErrorResult/ErrorResult';
import NotFound from '../NotFound/NotFound';
import TemplateForm from './organisms/TemplateForm';
import Template from 'interfaces/template';
import FormMode from 'enums/formMode';
import FormActions from '../FormActions/FormActions';
import DELETE_TEMPLATE from 'gql/mutations/deleteTemplate';
import { showLoadingMessage, showErrorMessage, showSuccessMessage } from 'utils/feedback';
import User from 'interfaces/user';
import EditButton from '../FormActions/atoms/EditButton';
import DeleteButton from '../FormActions/atoms/DeleteButton';
import SubmitButton from '../FormActions/atoms/SubmitButton';
import CancelChangesButton from '../FormActions/atoms/CancelButton';
import UPDATE_TEMPLATE from 'gql/mutations/updateTemplate';
import { mapTemplate, mapUser } from 'utils/mappers';
import EntityType from 'enums/entityType';
import { sameUser } from 'utils/user';
import GET_TRIPS_USING_TEMPLATE from 'gql/queries/getTripsUsingTemplate';
import TemplateBeingUsedWarning from './molecules/TemplateBeingUsedWarning';
import RESET_TRIPS_TEMPLATE_ID from 'gql/mutations/resetTripsTemplateId';

const TemplateDetails: FC<{ id: string | string[] }> = ({ id }) => {
  const [session] = useSession();
  const [formMode, setFormMode] = useState(FormMode.View);
  const { loading, error, data } = useQuery(GET_TEMPLATE_DETAILS, { variables: { id } });
  const { data: tripsUsingTemplate } = useQuery(GET_TRIPS_USING_TEMPLATE, { variables: { id } });
  const [
    deleteTemplateMutation,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_TEMPLATE);
  const [
    updateTemplateMutation,
    { loading: updateLoading, error: updateError, data: updateData },
  ] = useMutation(UPDATE_TEMPLATE);
  const [resetTripsTemplateId] = useMutation(RESET_TRIPS_TEMPLATE_ID);
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

  useEffect(() => {
    if (updateLoading) {
      showLoadingMessage('Updating template...');
    } else if (updateError) {
      showErrorMessage('An error occurred. Please try again.');
    } else if (updateData) {
      showSuccessMessage('Template successfully updated.');
      setFormMode(FormMode.View);
    }
  }, [updateLoading, updateError, updateData]);

  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  const { templates_by_pk: template } = data;
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

  const userHasPermissionToEditOrDelete = () => {
    const loggedInUser = session?.user as User;
    const { user: templateCreatedByUser } = template;
    return sameUser(loggedInUser, templateCreatedByUser);
  };

  const deleteTemplate = () => {
    deleteTemplateMutation({
      variables: {
        id,
      },
    });
  };

  const updateTemplate = async (updatedTemplate: Template) => {
    await updateTemplateMutation({
      variables: {
        id,
        input: {
          id,
          createdAt: template.createdAt,
          ...mapTemplate({ ...template, ...updatedTemplate }),
          ...mapUser(template.user),
        },
      },
    });
    if (tripsUsingTemplate?.trips.length > 0) {
      resetTripsTemplateId({
        variables: {
          tripIds: tripsUsingTemplate.trips.map(({ id }: { id: number }) => id),
          templateId: id,
        },
      });
    }
  };

  return (
    <div
      className={`min-h-tripla bg-gray-50 ${
        deleteLoading || updateLoading ? 'opacity-50 pointer-events-none' : ''
      }`}
    >
      <TemplateForm formMode={formMode} templateInitialData={template} onSubmit={updateTemplate}>
        {userHasPermissionToEditOrDelete() && (
          <>
            <FormActions className={formMode === FormMode.View ? '-mt-3' : ''}>
              {formMode === FormMode.View ? (
                <>
                  <EditButton
                    entity={EntityType.Template}
                    onClick={() => setFormMode(FormMode.Edit)}
                  />
                  <DeleteButton
                    entity={EntityType.Template}
                    additionalWarning={
                      tripsUsingTemplate?.trips.length > 0 && (
                        <div>
                          <span className="font-bold">Note: </span>
                          {tripsUsingTemplate.trips.length} trip(s) are using this template and will
                          be affected by deleting it.
                        </div>
                      )
                    }
                    onConfirm={deleteTemplate}
                  />
                </>
              ) : (
                <>
                  <SubmitButton label={updateLoading ? 'Saving' : 'Save'} loading={updateLoading} />
                  <CancelChangesButton
                    entity={EntityType.Template}
                    onClick={() => setFormMode(FormMode.View)}
                  />
                </>
              )}
            </FormActions>
            {formMode === FormMode.Edit && tripsUsingTemplate?.trips.length > 0 && (
              <TemplateBeingUsedWarning trips={tripsUsingTemplate.trips} />
            )}
          </>
        )}
      </TemplateForm>
    </div>
  );
};

export default TemplateDetails;
