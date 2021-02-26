import { ColumnsType } from 'antd/lib/table';

import TemplateTableColumns from 'interfaces/templateTableColumns';

const templateTableColumns: ColumnsType<TemplateTableColumns> = [
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

export default templateTableColumns;
