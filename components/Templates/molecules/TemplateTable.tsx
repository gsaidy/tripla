import { FC } from 'react';
import { Table } from 'antd';

import templateTableColumns from 'constants/templateTableColumns';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableHeader from '../atoms/TemplateTableHeader';
import CreatorFilter from 'enums/creatorFilter';

const TemplateTable: FC<{ createdBy: CreatorFilter; title: string; data: TemplateOverview[] }> = ({
  createdBy,
  title,
  data,
}) => (
  <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
    <TemplateTableHeader title={title} showCreateButton={createdBy !== CreatorFilter.Other} />
    <Table
      columns={templateTableColumns}
      dataSource={data}
      rowKey="id"
      locale={{ emptyText: 'No Templates' }}
      scroll={{ x: 1000 }}
    />
  </div>
);

export default TemplateTable;
