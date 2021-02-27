import { FC } from 'react';
import { useSession } from 'next-auth/client';
import Head from 'next/head';

import PageLoader from 'components/PageLoader/PageLoader';
import AlreadySignedIn from 'components/SignIn/AlreadySignedIn';
import SignIn from 'components/SignIn/SignIn';

const SignInPage: FC = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Sign in to manage your trips - Tripla</title>
      </Head>
      {loading ? <PageLoader /> : session ? <AlreadySignedIn /> : <SignIn />}
    </>
  );
};

export default SignInPage;
