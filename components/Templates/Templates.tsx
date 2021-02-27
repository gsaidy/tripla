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
  return (
    <div className="min-h-tripla">
      {session ? (
        <>
          <MyTemplateList />
          <OtherUsersTemplateList />
        </>
      ) : (
        <TemplateList />
      )}
    </div>
  );
};

export default Templates;
