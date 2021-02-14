import { FC } from 'react';
import { useSession } from 'next-auth/client';
import { useMutation } from '@apollo/client';

import SignInBanner from '../SignIn/molecules/SignInBanner';
import TemplateForm from './organisms/TemplateForm';
import Template from 'interfaces/template';
import CREATE_TEMPLATE from 'gql/mutations/createTemplate';
import { mapTemplate } from 'utils/mapper';
import User from 'interfaces/user';

const CreateTemplate: FC = () => {
  const [session, loading] = useSession();
  const [createTemplateMutation] = useMutation(CREATE_TEMPLATE);

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
    <div className="min-h-tripla bg-gray-50">
      {!session && !loading && <SignInBanner />}
      <TemplateForm onSubmit={createTemplate} />
    </div>
  );
};

export default CreateTemplate;
