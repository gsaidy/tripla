import { FC, useState, useEffect } from 'react';
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

  const [templates, setTemplates] = useState([]);
  const [pagination, setPagination] = useState({});

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
    variables: {
      offset: 0,
      limit: PAGE_SIZE,
      order_by: { updatedAt: 'desc' },
      where: getUserFilter(),
    },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data) {
      const { templates } = data;
      setTemplates(templates);
      const {
        templates_aggregate: {
          aggregate: { count: total },
        },
      } = data;
      setPagination({
        current: 1,
        pageSize: PAGE_SIZE,
        total,
      });
    }
  }, [data]);

  if (loading && !data) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }

  return (
    <div className={`${className} ${templates.length === 0 ? 'pb-7' : ''}`}>
      <TemplateTable createdBy={createdBy} title={title} data={templates} pagination={pagination} />
    </div>
  );
};

export default TemplateList;
