import { FC } from 'react';
import { Form, Input } from 'antd';

const AttributeName: FC = () => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3">
    <Form.Item
      label="Name"
      rules={[{ required: true, message: 'Please input your attribute name.' }]}
    >
      <Input />
    </Form.Item>
  </div>
);

export default AttributeName;
