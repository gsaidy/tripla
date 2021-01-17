import { FC } from 'react';
import { useSession } from 'next-auth/client';
import Head from 'next/head';

import SignIn from '../components/SignIn/SignIn';
import AlreadySignedIn from '../components/SignIn/AlreadySignedIn';

const SignInPage: FC = () => {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Sign in to manage your trips - Tripla</title>
      </Head>
      {session ? <AlreadySignedIn /> : <SignIn />}
    </>
  );
};

export default SignInPage;
