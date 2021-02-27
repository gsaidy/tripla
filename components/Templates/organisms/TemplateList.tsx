import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/client';

import TemplateTable from '../molecules/TemplateTable';
import GET_TEMPLATES from 'gql/queries/getTemplates';
import PageLoader from '../../PageLoader/PageLoader';
import ErrorResult from '../../ErrorResult/ErrorResult';
import CreatorFilter from 'enums/creatorFilter';
import User from 'interfaces/user';

const TemplateList: FC<{ createdBy: CreatorFilter; title: string; className: string }> = ({
  createdBy,
  title,
  className,
}) => {
  const [session] = useSession();
  const user = session?.user as User;

  const getUserFilter = () => {
    if (createdBy === CreatorFilter.Me) {
      return { userId: { _eq: user.id } };
    }
    if (createdBy === CreatorFilter.Other) {
      return { userId: { _neq: user.id } };
    }
    return;
  };

  const { loading, error, data } = useQuery(GET_TEMPLATES, {
    variables: { offset: 0, limit: 10, where: getUserFilter() },
  });

  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  const { templates } = data;
  return (
    <div className={className}>
      <TemplateTable title={title} data={templates} />
    </div>
  );
};

export default TemplateList;
