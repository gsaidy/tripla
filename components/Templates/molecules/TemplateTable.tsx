import { FC } from 'react';
import { Table } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { TableCurrentDataSource } from 'antd/lib/table/interface';

import templateTableColumns from 'constants/templateTableColumns';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableHeader from '../atoms/TemplateTableHeader';
import CreatorFilter from 'enums/creatorFilter';
import TableAction from 'enums/tableAction';

const TemplateTable: FC<{
  createdBy: CreatorFilter;
  title: string;
  data: TemplateOverview[];
  pagination: TablePaginationConfig | Record<string, never>;
  loading: boolean;
  onPaginationChange: (pagination: TablePaginationConfig) => void;
}> = ({ createdBy, title, data, pagination, loading, onPaginationChange }) => {
  const onChange = (
    pagination: TablePaginationConfig,
    filters: unknown,
    sorter: unknown,
    { action }: TableCurrentDataSource<TemplateOverview>
  ) => {
    if (action === TableAction.Paginate) {
      onPaginationChange(pagination);
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
