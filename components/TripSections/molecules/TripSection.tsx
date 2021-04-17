import { FC } from 'react';
import { Table } from 'antd';

import Section from 'interfaces/section';
import TripSectionHeader from '../atoms/TripSectionHeader';
import Attribute from 'interfaces/attribute';

const TripSection: FC<{ section: Section }> = ({ section }) => {
  const columns = section.attributes.map(({ name }: Attribute) => ({
    title: name,
    dataIndex: name,
    ellipsis: true,
    align: 'center' as 'center' | 'left' | 'right',
  }));

  return (
    <div>
      <TripSectionHeader name={section.name} />
      <Table columns={columns} locale={{ emptyText: `No ${section.name} added yet.` }} />
    </div>
  );
};

export default TripSection;
