import { FC } from 'react';
import { useSession } from 'next-auth/client';
import { useQuery } from '@apollo/client';

import TemplateTable from '../molecules/TemplateTable';
import GET_TEMPLATES from 'gql/queries/getTemplates';
import PageLoader from '../../PageLoader/PageLoader';
import ErrorResult from '../../ErrorResult/ErrorResult';
import User from 'interfaces/user';

const MyTemplateList: FC = () => {
  const [session] = useSession();
  const user = session?.user as User;
  const { loading, error, data } = useQuery(GET_TEMPLATES, {
    variables: { offset: 0, limit: 10, where: { userId: { _eq: user.id } } },
  });

  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }
  const { templates } = data;
  return <TemplateTable data={templates} />;
};

export default MyTemplateList;
