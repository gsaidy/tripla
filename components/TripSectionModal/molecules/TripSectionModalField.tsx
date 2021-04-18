import { FC } from 'react';
import { Form, Input } from 'antd';

const TripSectionModalField: FC<{ name: string; required?: boolean }> = ({ name, required }) => (
  <Form.Item name={name} label={name} rules={[{ required, message: `Please select a ${name}.` }]}>
    <Input />
  </Form.Item>
);

export default TripSectionModalField;
