import { FC, useState } from 'react';
import { Table } from 'antd';

import Section from 'interfaces/section';
import TripSectionHeader from '../atoms/TripSectionHeader';
import Attribute from 'interfaces/attribute';
import TripSectionModal from '../atoms/TripSectionModal';

const TripSection: FC<{ section: Section }> = ({ section }) => {
  const [showSectionModal, setShowSectionModal] = useState(false);
  const columns = section.attributes.map(({ name }: Attribute) => ({
    title: name,
    dataIndex: name,
    ellipsis: true,
    align: 'center' as 'center' | 'left' | 'right',
  }));

  return (
    <div>
      <TripSectionHeader name={section.name} onAddClick={() => setShowSectionModal(true)} />
      <Table columns={columns} locale={{ emptyText: `No ${section.name} added yet.` }} />
      <TripSectionModal
        visible={showSectionModal}
        fields={section.attributes}
        hide={() => setShowSectionModal(false)}
      />
    </div>
  );
};

export default TripSection;
