import { FC } from 'react';
import { Form, Input } from 'antd';

import FormSection from '../atoms/FormSection';

const TemplateSection: FC<{ title: string }> = ({ title }) => (
  <FormSection title={title}>
    <Form.Item
      label="Name"
      name="sectionName"
      rules={[{ required: true, message: 'Please input your section name.' }]}
    >
      <Input />
    </Form.Item>
  </FormSection>
);

export default TemplateSection;
