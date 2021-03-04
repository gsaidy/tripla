import React, { ReactNode } from 'react';
import moment from 'moment';
import { ColumnsType } from 'antd/lib/table';

import User from 'interfaces/user';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableViewButton from 'components/Templates/atoms/TemplateTableViewButton';

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
    render: (user: User) => user?.name ?? 'Anonymous',
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    align: 'center',
    render: (createdAt: string) => moment(createdAt).fromNow(),
  },
  {
    title: 'Last Updated',
    dataIndex: 'updatedAt',
    align: 'center',
    render: (updatedAt: string) => moment(updatedAt).fromNow(),
  },
  {
    title: 'Action',
    key: 'action',
    width: '9%',
    fixed: 'right',
    render(_: unknown, { id }: TemplateOverview): ReactNode {
      return React.createElement(TemplateTableViewButton, { id }, null);
    },
  },
];

export default templateTableColumns;
