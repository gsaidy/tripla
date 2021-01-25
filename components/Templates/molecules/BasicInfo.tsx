import { FC } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

import FormSection from '../atoms/FormSection';

const BasicInfo: FC = () => (
  <FormSection title="Basic Info">
    <Form.Item
      label="Name"
      name="templateName"
      rules={[{ required: true, message: 'Please input your template name.' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Description" name="description">
      <TextArea rows={3} />
    </Form.Item>
  </FormSection>
);

export default BasicInfo;
