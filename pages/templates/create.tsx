import { FC } from 'react';
import Head from 'next/head';

import CreateTemplate from 'components/Templates/CreateTemplate';

const CreateTemplatePage: FC = () => (
  <>
    <Head>
      <title>Create Template - Tripla</title>
    </Head>
    <CreateTemplate />
  </>
);

export default CreateTemplatePage;
