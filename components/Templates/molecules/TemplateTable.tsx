import { FC } from 'react';
import { Table } from 'antd';

import templateTableColumns from 'constants/templateTableColumns';

const data = [
  {
    key: '1',
    name: 'Basic Template',
    description: 'Template with attractions',
    createdBy: 'Georges Saidy',
    created: '3 months ago',
    updated: '2 months ago',
  },
  {
    key: '2',
    name: 'Dummy Template',
    description: 'Dummy Description',
    createdBy: 'Anonymous',
    created: '1 month ago',
    updated: '28 days ago',
  },
];

const TemplateTable: FC = () => (
  <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
    <Table columns={templateTableColumns} dataSource={data} scroll={{ x: 1000 }} />
  </div>
);

export default TemplateTable;
