import React, { ReactNode } from 'react';
import moment from 'moment';
import { ColumnsType } from 'antd/lib/table';
import { FilterDropdownProps } from 'antd/lib/table/interface';

import User from 'interfaces/user';
import TemplateOverview from 'interfaces/templateOverview';
import EntityTableFilter from 'components/EntityTable/atoms/EntityTableFilter';
import EntityTableFilterIcon from 'components/EntityTable/atoms/EntityTableFilterIcon';
import EntityTableViewButton from 'components/EntityTable/atoms/EntityTableViewButton';
import { TemplateListContext } from 'components/Templates/organisms/TemplateList';
import GET_TEMPLATE_FILTER_OPTIONS from 'gql/queries/getTemplateFilterOptions';

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
        EntityTableFilter,
        {
          context: TemplateListContext,
          query: GET_TEMPLATE_FILTER_OPTIONS,
          field: 'name',
          selectedKeys,
          setSelectedKeys,
          confirm,
          clearFilters,
        },
        null
      );
    },
    filterIcon(filtered: boolean): ReactNode {
      return React.createElement(EntityTableFilterIcon, { filtered }, null);
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
    render(_: unknown, { id }: { id: number }): ReactNode {
      return React.createElement(EntityTableViewButton, { href: `/templates/${id}` }, null);
    },
  },
];

export default templateTableColumns;
