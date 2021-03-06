import { FC, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import SignInBanner from '../SignIn/molecules/SignInBanner';
import TemplateForm from './organisms/TemplateForm';
import TemplateActions from './molecules/TemplateActions';
import Template from 'interfaces/template';
import CREATE_TEMPLATE from 'gql/mutations/createTemplate';
import { mapTemplate, mapUser } from 'utils/mappers';
import FormMode from 'enums/formMode';
import { showLoadingMessage, showErrorMessage, showSuccessMessage } from 'utils/feedback';
import CreateTemplateButton from './atoms/CreateTemplateButton';
import User from 'interfaces/user';
import EntityType from 'enums/entityType';

const CreateTemplate: FC = () => {
  const [session, loading] = useSession();
  const [
    createTemplateMutation,
    { loading: createLoading, error: createError, data: createData },
  ] = useMutation(CREATE_TEMPLATE);
  const router = useRouter();

  useEffect(() => {
    if (createLoading) {
      showLoadingMessage('Creating template...');
    } else if (createError) {
      showErrorMessage('An error occurred. Please try again.');
    } else if (createData) {
      showSuccessMessage('Template successfully created.');
      const {
        insert_templates_one: { id: createdTemplateId },
      } = createData;
      router.push(`/templates/${createdTemplateId}`);
    }
  }, [createLoading, createError, createData, router]);

  const createTemplate = (template: Template) => {
    createTemplateMutation({
      variables: {
        input: { ...mapTemplate(template), ...mapUser(session?.user as User | undefined) },
      },
    });
  };

  return (
    <div
      className={`min-h-tripla bg-gray-50 ${createLoading ? 'opacity-50 pointer-events-none' : ''}`}
    >
      {!session && !loading && <SignInBanner entity={EntityType.Template} />}
      <TemplateForm formMode={FormMode.Create} onSubmit={createTemplate}>
        <TemplateActions>
          <CreateTemplateButton
            label={createLoading ? 'Creating Template' : 'Create Template'}
            loading={createLoading}
          />
        </TemplateActions>
      </TemplateForm>
    </div>
  );
};

export default CreateTemplate;
