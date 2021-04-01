import React, { ReactNode } from 'react';
import moment from 'moment';
import { ColumnsType } from 'antd/lib/table';
import { FilterDropdownProps } from 'antd/lib/table/interface';

import User from 'interfaces/user';
import TripOverview from 'interfaces/tripOverview';
import EntityTableViewButton from 'components/EntityTable/atoms/EntityTableViewButton';
import EntityTableFilter from 'components/EntityTable/atoms/EntityTableFilter';
import EntityTableFilterIcon from 'components/EntityTable/atoms/EntityTableFilterIcon';
import { TripListContext } from 'components/Trips/organisms/TripList';
import GET_TRIP_FILTER_OPTIONS from 'gql/queries/getTripFilterOptions';

const tripTableColumns: ColumnsType<TripOverview> = [
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
          context: TripListContext,
          query: GET_TRIP_FILTER_OPTIONS,
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
    title: 'Destination',
    dataIndex: 'destination',
    ellipsis: true,
    align: 'center',
    sorter: true,
  },
  {
    title: 'Template',
    dataIndex: 'template',
    align: 'center',
    sorter: true,
    render: (template: { id: string; name: string }) => template?.name ?? '',
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
      return React.createElement(EntityTableViewButton, { href: `/trips/${id}` }, null);
    },
  },
];

export default tripTableColumns;
