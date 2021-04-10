import { FC } from 'react';
import { useSession } from 'next-auth/client';

import PageLoader from '../PageLoader/PageLoader';
import MyTemplateList from './organisms/TemplateList';
import OtherUsersTemplateList from './organisms/TemplateList';
import AllTemplateList from './organisms/TemplateList';
import CreatorFilter from 'enums/creatorFilter';

const Templates: FC = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div className="min-h-tripla max-w-7xl mx-auto py-6 px-4 lg:px-6">
      {session ? (
        <>
          <MyTemplateList createdBy={CreatorFilter.Me} title="My Templates" />
          <OtherUsersTemplateList createdBy={CreatorFilter.Other} title="Other Users Templates" />
        </>
      ) : (
        <AllTemplateList createdBy={CreatorFilter.All} title="Templates" />
      )}
    </div>
  );
};

export default Templates;
