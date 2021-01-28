import { FC } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

import FormSection from '../atoms/FormSection';

const BasicInfo: FC = () => (
  <FormSection title="Basic Info">
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-4 sm:col-span-3 lg:col-span-2">
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
      </div>
    </div>
  </FormSection>
);

export default BasicInfo;
