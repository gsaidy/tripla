import { FC } from 'react';
import Head from 'next/head';

import MyTemplates from 'components/Templates/MyTemplates';

const MyTemplatesPage: FC = () => (
  <>
    <Head>
      <title>My Templates - Tripla</title>
    </Head>
    <MyTemplates />
  </>
);

export default MyTemplatesPage;
