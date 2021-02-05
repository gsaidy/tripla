import { FC } from 'react';
import { useSession } from 'next-auth/client';
import Head from 'next/head';

import SignInSpinner from '../components/SignIn/SignInSpinner';
import AlreadySignedIn from '../components/SignIn/AlreadySignedIn';
import SignIn from '../components/SignIn/SignIn';

const SignInPage: FC = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Sign in to manage your trips - Tripla</title>
      </Head>
      {loading ? <SignInSpinner /> : session ? <AlreadySignedIn /> : <SignIn />}
    </>
  );
};

export default SignInPage;
