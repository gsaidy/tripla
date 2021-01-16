import { FC } from 'react';
import { useSession } from 'next-auth/client';

import SignIn from '../components/SignIn/SignIn';
import AlreadySignedIn from '../components/SignIn/AlreadySignedIn';

const SignInPage: FC = () => {
  const [session] = useSession();

  if (session) return <AlreadySignedIn />;
  return <SignIn />;
};

export default SignInPage;
