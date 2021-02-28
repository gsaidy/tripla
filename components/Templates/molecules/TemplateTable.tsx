import { FC } from 'react';
import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';

import templateTableColumns from 'constants/templateTableColumns';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableHeader from '../atoms/TemplateTableHeader';
import CreatorFilter from 'enums/creatorFilter';
import TemplateTableViewButton from '../atoms/TemplateTableViewButton';

const TemplateTable: FC<{
  createdBy: CreatorFilter;
  title: string;
  data: TemplateOverview[];
  pagination: TablePaginationConfig | Record<string, never>;
  loading: boolean;
  onChange: (pagination: TablePaginationConfig) => void;
}> = ({ createdBy, title, data, pagination, loading, onChange }) => {
  const action = {
    title: 'Action',
    key: 'action',
    width: '9%',
    fixed: 'right',
    render(_: unknown, { id }: TemplateOverview) {
      return <TemplateTableViewButton id={id} />;
    },
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
      <TemplateTableHeader title={title} showCreateButton={createdBy !== CreatorFilter.Other} />
      <Table
        rowKey="id"
        columns={[...templateTableColumns, action] as ColumnsType<TemplateOverview>}
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
