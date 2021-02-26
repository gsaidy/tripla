import { FC } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface TemplateTableColumns {
  name: string;
  description: string;
  createdBy: string;
  created: string;
  updated: string;
}

const columns: ColumnsType<TemplateTableColumns> = [
  {
    title: 'Name',
    dataIndex: 'name',
    ellipsis: true,
    align: 'center',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    ellipsis: true,
    align: 'center',
  },
  {
    title: 'Created By',
    dataIndex: 'createdBy',
    align: 'center',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    align: 'center',
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    align: 'center',
  },
];

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
    <Table columns={columns} dataSource={data} bordered scroll={{ x: 1000 }} />
  </div>
);

export default TemplateTable;
