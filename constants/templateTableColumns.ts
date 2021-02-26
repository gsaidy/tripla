import { ColumnsType } from 'antd/lib/table';

import TemplateOverview from 'interfaces/templateOverview';

const templateTableColumns: ColumnsType<TemplateOverview> = [
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
    dataIndex: 'user',
    align: 'center',
    render: (user) => user?.name ?? 'Anonymous',
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    align: 'center',
  },
  {
    title: 'Updated',
    dataIndex: 'updatedAt',
    align: 'center',
  },
];

export default templateTableColumns;
