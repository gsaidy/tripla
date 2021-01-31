import { FC } from 'react';
import { Form, Input } from 'antd';

const NameInput: FC<{ className?: string; name?: string; entity: string }> = ({
  className,
  name,
  entity,
}) => (
  <Form.Item
    className={className}
    label="Name"
    name={name}
    rules={[{ required: true, message: `Please input your ${entity} name.` }]}
  >
    <Input />
  </Form.Item>
);

export default NameInput;
