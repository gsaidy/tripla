import { FC } from 'react';
import Head from 'next/head';

import Templates from 'components/Templates/Templates';

const TemplatesPage: FC = () => (
  <>
    <Head>
      <title>Templates - Tripla</title>
    </Head>
    <Templates />
  </>
);

export default TemplatesPage;
