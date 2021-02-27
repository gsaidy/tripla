import { FC } from 'react';
import { useSession } from 'next-auth/client';

import PageLoader from '../PageLoader/PageLoader';
import MyTemplateList from './organisms/TemplateList';
import CreatorFilter from 'enums/creatorFilter';
import NotFound from '../NotFound/NotFound';

const MyTemplates: FC = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <PageLoader />;
  }
  if (session) {
    return (
      <div className="min-h-tripla">
        <MyTemplateList createdBy={CreatorFilter.Me} title="My Templates" />
      </div>
    );
  }
  return <NotFound />;
};

export default MyTemplates;
