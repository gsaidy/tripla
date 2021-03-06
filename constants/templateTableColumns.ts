import React, { ReactNode } from 'react';
import moment from 'moment';
import { ColumnsType } from 'antd/lib/table';
import { FilterDropdownProps } from 'antd/lib/table/interface';

import User from 'interfaces/user';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableViewButton from 'components/Templates/atoms/TemplateTableViewButton';
import TemplateTableFilter from 'components/Templates/atoms/TemplateTableFilter';
import TemplateTableFilterIcon from 'components/Templates/atoms/TemplateTableFilterIcon';

const templateTableColumns: ColumnsType<TemplateOverview> = [
  {
    title: 'Name',
    dataIndex: 'name',
    ellipsis: true,
    align: 'center',
    sorter: true,
    filterDropdown({
      selectedKeys,
      setSelectedKeys,
      confirm,
      clearFilters,
    }: FilterDropdownProps): ReactNode {
      return React.createElement(
        TemplateTableFilter,
        { selectedKeys, setSelectedKeys, confirm, clearFilters },
        null
      );
    },
    filterIcon(filtered: boolean): ReactNode {
      return React.createElement(TemplateTableFilterIcon, { filtered }, null);
    },
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
    sorter: true,
    render: (createdAt: string) => moment(createdAt).fromNow(),
  },
  {
    title: 'Last Updated',
    dataIndex: 'updatedAt',
    align: 'center',
    sorter: true,
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
