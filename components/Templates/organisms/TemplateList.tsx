import { FC, useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/client';
import { TablePaginationConfig } from 'antd/lib/table';
import { FilterValue } from 'antd/lib/table/interface';

import EntityTable from '../../EntityTable/EntityTable';
import GET_TEMPLATES from 'gql/queries/getTemplates';
import PageLoader from '../../PageLoader/PageLoader';
import ErrorResult from '../../ErrorResult/ErrorResult';
import CreatorFilter from 'enums/creatorFilter';
import User from 'interfaces/user';
import { showErrorMessage } from 'utils/feedback';
import SortOrder from 'enums/sortOrder';
import { getTemplateFilters } from 'utils/filters';
import EntityType from 'enums/entityType';
import templateTableColumns from 'constants/templateTableColumns';

const PAGE_SIZE = 5;
const DEFAULT_SORT = { updatedAt: SortOrder.DESC };

export const TemplateListContext = createContext<{
  createdBy: CreatorFilter;
}>({
  createdBy: CreatorFilter.All,
});

const TemplateList: FC<{ createdBy: CreatorFilter; title: string; className?: string }> = ({
  createdBy,
  title,
  className,
}) => {
  const [session] = useSession();
  const user = session?.user as User;

  const [templates, setTemplates] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const orderBy: { [field: string]: SortOrder } = DEFAULT_SORT;
  const { loading: getTemplatesLoading, error, data, fetchMore, refetch } = useQuery(
    GET_TEMPLATES,
    {
      variables: {
        offset: 0,
        limit: PAGE_SIZE,
        where: getTemplateFilters(createdBy, user),
        orderBy,
      },
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    }
  );

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

  if (getTemplatesLoading && !data) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorResult />;
  }

  const onPaginationChange = async (pagination: TablePaginationConfig) => {
    setLoading(true);
    const currentPage = pagination?.current || 1;
    const offset = (currentPage - 1) * PAGE_SIZE;
    const { data, error } = await fetchMore({
      variables: {
        offset,
        limit: PAGE_SIZE,
      },
    });
    setLoading(false);
    if (data) {
      setTemplates(data.templates);
      setPagination(pagination);
    } else if (error) {
      showErrorMessage('An error occurred. Please try again.');
    }
  };

  const onFiltersChange = async (filters: Record<string, FilterValue | null>) => {
    setLoading(true);
    const where = getTemplateFilters(createdBy, user, filters.name?.[0] as string | undefined);
    const { data, error } = await refetch({
      offset: 0,
      limit: PAGE_SIZE,
      where,
    });
    setLoading(false);
    if (data) {
      setTemplates(data.templates);
    } else if (error) {
      showErrorMessage('An error occurred. Please try again.');
    }
  };

  const onSortChange = async (field: string, order?: SortOrder) => {
    setLoading(true);
    const orderBy = order ? { [field]: order } : DEFAULT_SORT;
    const { data, error } = await refetch({
      offset: 0,
      limit: PAGE_SIZE,
      orderBy,
    });
    setLoading(false);
    if (data) {
      setTemplates(data.templates);
    } else if (error) {
      showErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <TemplateListContext.Provider value={{ createdBy }}>
      <div className={`${className} ${templates.length === 0 ? 'pb-7' : ''}`}>
        <EntityTable
          entity={EntityType.Template}
          createdBy={createdBy}
          title={title}
          createHref="/templates/create"
          columns={templateTableColumns}
          data={templates}
          pagination={pagination}
          loading={loading}
          onPaginationChange={onPaginationChange}
          onFiltersChange={onFiltersChange}
          onSortChange={onSortChange}
        />
      </div>
    </TemplateListContext.Provider>
  );
};

export default TemplateList;
