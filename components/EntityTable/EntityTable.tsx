import { ReactElement } from 'react';
import { Table } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { TableCurrentDataSource, SorterResult, FilterValue } from 'antd/lib/table/interface';

import EntityTableHeader from './atoms/EntityTableHeader';
import CreatorFilter from 'enums/creatorFilter';
import TableAction from 'enums/tableAction';
import SortOrder from 'enums/sortOrder';
import EntityType from 'enums/entityType';
import { capitalize } from 'utils/helpers';

interface EntityTableProps<T> {
  entity: EntityType;
  createdBy: CreatorFilter;
  title: string;
  createHref: string;
  columns: T[];
  data: ReadonlyArray<Record<string, unknown>>;
  pagination: TablePaginationConfig | Record<string, never>;
  loading: boolean;
  onPaginationChange: (pagination: TablePaginationConfig) => void;
  onFiltersChange: (filters: Record<string, FilterValue | null>) => void;
  onSortChange: (field: string, order?: SortOrder) => void;
}

function EntityTable<T>({
  entity,
  createdBy,
  title,
  createHref,
  columns,
  data,
  pagination,
  loading,
  onPaginationChange,
  onFiltersChange,
  onSortChange,
}: EntityTableProps<T>): ReactElement {
  function onChange<T>(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
    { action }: TableCurrentDataSource<T>
  ) {
    if (action === TableAction.Paginate) {
      onPaginationChange(pagination);
    } else if (action === TableAction.Filter) {
      onFiltersChange(filters);
    } else if (action === TableAction.Sort) {
      const { field, order } = sorter as { field: string; order?: 'ascend' | 'descend' };
      onSortChange(field, order ? (order.slice(0, -3) as SortOrder) : order);
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
      <EntityTableHeader
        title={title}
        createHref={createHref}
        showCreateButton={createdBy !== CreatorFilter.Other}
      />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={{
          ...pagination,
          showTotal: (total: number, range: number[]) =>
            `${range[0]}-${range[1]} of ${total} ${entity}s`,
        }}
        locale={{ emptyText: `No ${capitalize(entity)}s` }}
        scroll={{ x: 1000 }}
        loading={loading}
        onChange={onChange}
      />
    </div>
  );
}

export default EntityTable;
