import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import TemplateDetails from 'components/Templates/TemplateDetails';

const TemplateDetailsPage: FC = () => {
  const {
    query: { slug },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Template Details - Tripla</title>
      </Head>
      {slug && <TemplateDetails id={slug} />}
    </>
  );
};

export default TemplateDetailsPage;
