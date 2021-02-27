import moment from 'moment';

import User from 'interfaces/user';

const templateTableColumns = [
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
    render: (user: User): string => user?.name ?? 'Anonymous',
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    align: 'center',
    render: (createdAt: string): string => moment(createdAt).fromNow(),
  },
  {
    title: 'Last Updated',
    dataIndex: 'updatedAt',
    align: 'center',
    render: (updatedAt: string): string => moment(updatedAt).fromNow(),
  },
];

export default templateTableColumns;
