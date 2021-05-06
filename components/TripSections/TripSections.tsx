import { FC } from 'react';
import { Form, Input } from 'antd';

import Section from 'interfaces/section';
import NoSectionsAlert from './molecules/NoSectionsAlert';
import TripSection from './molecules/TripSection';

const TripSections: FC<{ sections: Section[] }> = ({ sections }) => {
  if (sections.length === 0) {
    return <NoSectionsAlert />;
  }
  return (
    <div className="bg-white sm:bg-transparent max-w-7xl mx-auto px-4 lg:px-6">
      <div className="bg-white py-6 sm:px-4">
        <Form.Item label="Data" name="data" noStyle>
          <Input type="hidden" />
        </Form.Item>
        {sections.map((section) => (
          <TripSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default TripSections;
