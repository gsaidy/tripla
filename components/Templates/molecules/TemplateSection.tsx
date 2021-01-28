import { FC } from 'react';
import { Form, Input } from 'antd';

import FormSection from '../atoms/FormSection';
import SectionAttributes from '../../SectionAttributes/SectionAttributes';

const TemplateSection: FC<{ title: string }> = ({ title }) => (
  <FormSection title={title}>
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
