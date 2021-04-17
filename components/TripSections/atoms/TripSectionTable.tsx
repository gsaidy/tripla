import { FC } from 'react';
import { Table } from 'antd';

import Attribute from 'interfaces/attribute';

const TripSectionTable: FC<{ name: string; attributes?: Attribute[] }> = ({
  name,
  attributes = [],
}) => {
  const columns = attributes.map(({ name }: Attribute) => ({
    title: name,
    dataIndex: name,
    ellipsis: true,
    align: 'center' as 'center' | 'left' | 'right',
  }));

  return <Table columns={columns} locale={{ emptyText: `No ${name} added yet.` }} />;
};

export default TripSectionTable;
