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
    <div className="min-h-tripla">
      {session ? (
        <>
          <MyTemplateList createdBy={CreatorFilter.Me} title="My Templates" className="pt-6" />
          <OtherUsersTemplateList
            createdBy={CreatorFilter.Other}
            title="Other Users Templates"
            className="-mt-6"
          />
        </>
      ) : (
        <AllTemplateList createdBy={CreatorFilter.All} title="Templates" className="pt-6" />
      )}
    </div>
  );
};

export default Templates;
