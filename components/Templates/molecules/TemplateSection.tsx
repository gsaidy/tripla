import { FC } from 'react';
import { Form, Input } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

import FormSection from '../atoms/FormSection';
import SectionAttributes from '../../SectionAttributes/SectionAttributes';

const TemplateSection: FC<{ section: string; removeSection: (section: string) => void }> = ({
  section,
  removeSection,
}) => (
  <FormSection
    header={
      <span className="flex items-center">
        <h3>{section}</h3>
        <MinusCircleOutlined className="ml-2 cursor-pointer text-red-500" onClick={removeSection} />
      </span>
    }
  >
    <div className="pb-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 sm:col-span-3 lg:col-span-2">
          <Form.Item
            label="Name"
            name="sectionName"
            rules={[{ required: true, message: 'Please input your section name.' }]}
          >
            <Input />
          </Form.Item>
        </div>
      </div>
      <SectionAttributes />
    </div>
  </FormSection>
);

export default TemplateSection;
