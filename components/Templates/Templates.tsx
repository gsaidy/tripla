import { FC } from 'react';
import { useSession } from 'next-auth/client';

import PageLoader from '../PageLoader/PageLoader';
import MyTemplateList from './organisms/MyTemplateList';
import OtherUsersTemplateList from './organisms/OtherUsersTemplateList';
import TemplateList from './organisms/TemplateList';

const Templates: FC = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <PageLoader />;
  }
  if (session) {
    return (
      <>
        <MyTemplateList />
        <OtherUsersTemplateList />
      </>
    );
  }
  return <TemplateList />;
};

export default Templates;
