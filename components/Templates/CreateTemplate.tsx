import { FC, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useMutation } from '@apollo/client';
import { message } from 'antd';
import { useRouter } from 'next/router';

import SignInBanner from '../SignIn/molecules/SignInBanner';
import TemplateForm from './organisms/TemplateForm';
import CreateTemplateButton from './molecules/CreateTemplateButton';
import Template from 'interfaces/template';
import CREATE_TEMPLATE from 'gql/mutations/createTemplate';
import { mapTemplate } from 'utils/mapper';
import User from 'interfaces/user';

const CreateTemplate: FC = () => {
  const [session, loading] = useSession();
  const [
    createTemplateMutation,
    { loading: createLoading, error: createError, data: createData },
  ] = useMutation(CREATE_TEMPLATE);
  const router = useRouter();

  useEffect(() => {
    if (createLoading) {
      message.loading({ content: 'Saving template...', key: 'loading' });
    } else if (createError) {
      message.destroy('loading');
      message.error({ content: 'An error occurred. Please try again.', key: 'error', duration: 3 });
    } else if (createData) {
      message.destroy('loading');
      message.success({ content: 'Template successfully created.', key: 'success', duration: 3 });
      const {
        insert_templates_one: { id: createdTemplateId },
      } = createData;
      router.push(`/templates/${createdTemplateId}`);
    }
  }, [createLoading, createError, createData, router]);

  const createTemplate = (template: Template) => {
    createTemplateMutation({
      variables: {
        input: { ...mapTemplate(template), ...mapUser() },
      },
    });
  };

  const mapUser = () => {
    if (session?.user) {
      const user = session?.user as User;
      return {
        user: {
          id: user.id,
          name: user.name,
        },
      };
    }
    return;
  };

  return (
    <div
      className={`min-h-tripla bg-gray-50 ${createLoading ? 'opacity-50 pointer-events-none' : ''}`}
    >
      {!session && !loading && <SignInBanner />}
      <TemplateForm onSubmit={createTemplate}>
        <CreateTemplateButton loading={createLoading} />
      </TemplateForm>
    </div>
  );
};

export default CreateTemplate;
