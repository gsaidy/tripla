import { FC } from 'react';
import Head from 'next/head';

import NotFound from 'components/NotFound/NotFound';

const NotFoundPage: FC = () => (
  <>
    <Head>
      <title>Page not found - Tripla</title>
    </Head>
    <NotFound />
  </>
);

export default NotFoundPage;
