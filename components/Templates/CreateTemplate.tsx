import { FC } from 'react';
import { useSession } from 'next-auth/client';

import SignInBanner from '../SignIn/molecules/SignInBanner';
import TemplateForm from './organisms/TemplateForm';

const CreateTemplate: FC = () => {
  const [session, loading] = useSession();

  return (
    <div className="min-h-tripla bg-gray-50">
      {!session && !loading && <SignInBanner />}
      <TemplateForm />
    </div>
  );
};

export default CreateTemplate;
