import { FC } from 'react';
import { useSession } from 'next-auth/client';

import SignInBanner from '../SignIn/molecules/SignInBanner';

const CreateTemplate: FC = () => {
  const [session, loading] = useSession();

  if (!session && !loading) {
    return <SignInBanner />;
  }
  return null;
};

export default CreateTemplate;
