import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/client';

import TemplateTable from '../molecules/TemplateTable';
import GET_TEMPLATES from 'gql/queries/getTemplates';
import PageLoader from '../../PageLoader/PageLoader';
import ErrorResult from '../../ErrorResult/ErrorResult';
import CreatorFilter from 'enums/creatorFilter';
import User from 'interfaces/user';

const PAGE_SIZE = 5;

const TemplateList: FC<{ createdBy: CreatorFilter; title: string; className?: string }> = ({
  createdBy,
  title,
  className,
}) => {
  const [session] = useSession();
  const user = session?.user as User;

  const getUserFilter = () => {
    if (createdBy === CreatorFilter.Me) {
      return { userId: { _eq: `${user.id}` } };
    }
    if (createdBy === CreatorFilter.Other) {
      return { _or: [{ userId: { _neq: `${user.id}` } }, { userId: { _is_null: true } }] };
    }
    return;
  };

  const { loading, error, data } = useQuery(GET_TEMPLATES, {
    variables: { offset: 0, limit: PAGE_SIZE, where: getUserFilter() },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  const { templates } = data;
  const {
    templates_aggregate: {
      aggregate: { count: total },
    },
  } = data;
  const pagination = {
    current: 1,
    pageSize: PAGE_SIZE,
    total,
    showTotal: (total: number, range: number[]) => `${range[0]}-${range[1]} of ${total} templates`,
  };
  return (
    <div className={`${className} ${templates.length === 0 ? 'pb-7' : ''}`}>
      <TemplateTable createdBy={createdBy} title={title} data={templates} pagination={pagination} />
    </div>
  );
};

export default TemplateList;
