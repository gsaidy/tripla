import { FC } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import templateTableColumns from 'constants/templateTableColumns';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableHeader from '../atoms/TemplateTableHeader';
import CreatorFilter from 'enums/creatorFilter';
import TemplateTableViewButton from '../atoms/TemplateTableViewButton';

const TemplateTable: FC<{ createdBy: CreatorFilter; title: string; data: TemplateOverview[] }> = ({
  createdBy,
  title,
  data,
}) => {
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
        columns={[...templateTableColumns, action] as ColumnsType<TemplateOverview>}
        dataSource={data}
        rowKey="id"
        locale={{ emptyText: 'No Templates' }}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default TemplateTable;
