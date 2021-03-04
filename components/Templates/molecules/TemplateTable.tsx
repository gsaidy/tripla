import { FC } from 'react';
import { Table } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { TableCurrentDataSource, SorterResult } from 'antd/lib/table/interface';

import templateTableColumns from 'constants/templateTableColumns';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableHeader from '../atoms/TemplateTableHeader';
import CreatorFilter from 'enums/creatorFilter';
import TableAction from 'enums/tableAction';
import SortOrder from 'enums/sortOrder';

const TemplateTable: FC<{
  createdBy: CreatorFilter;
  title: string;
  data: TemplateOverview[];
  pagination: TablePaginationConfig | Record<string, never>;
  loading: boolean;
  onPaginationChange: (pagination: TablePaginationConfig) => void;
  onSortChange: (field: string, order?: SortOrder) => void;
}> = ({ createdBy, title, data, pagination, loading, onPaginationChange, onSortChange }) => {
  const onChange = (
    pagination: TablePaginationConfig,
    filters: unknown,
    sorter: SorterResult<TemplateOverview> | SorterResult<TemplateOverview>[],
    { action }: TableCurrentDataSource<TemplateOverview>
  ) => {
    if (action === TableAction.Paginate) {
      onPaginationChange(pagination);
    } else if (action === TableAction.Sort) {
      const { field, order } = sorter as { field: string; order?: 'ascend' | 'descend' };
      onSortChange(field, order ? (order.slice(0, -3) as SortOrder) : order);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
      <TemplateTableHeader title={title} showCreateButton={createdBy !== CreatorFilter.Other} />
      <Table
        rowKey="id"
        columns={templateTableColumns}
        dataSource={data}
        pagination={{
          ...pagination,
          showTotal: (total: number, range: number[]) =>
            `${range[0]}-${range[1]} of ${total} templates`,
        }}
        locale={{ emptyText: 'No Templates' }}
        scroll={{ x: 1000 }}
        loading={loading}
        onChange={onChange}
      />
    </div>
  );
};

export default TemplateTable;
