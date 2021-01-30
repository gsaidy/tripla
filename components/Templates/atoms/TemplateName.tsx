import { FC } from 'react';
import { Form, Input } from 'antd';

const TemplateName: FC = () => (
  <div className="col-span-4 sm:col-span-3 lg:col-span-2">
    <Form.Item
      label="Name"
      rules={[{ required: true, message: 'Please input your section name.' }]}
    >
      <Input />
    </Form.Item>
  </div>
);

export default TemplateName;
