import { ColumnsType } from 'antd/lib/table';
import moment from 'moment';

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
    render: (createdAt) => moment(createdAt).fromNow(),
  },
  {
    title: 'Last Updated',
    dataIndex: 'updatedAt',
    align: 'center',
    render: (updatedAt) => moment(updatedAt).fromNow(),
  },
];

export default templateTableColumns;
