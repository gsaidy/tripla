import { FC } from 'react';
import { Form, Input } from 'antd';

const TemplateName: FC = () => (
  <Form.Item
    className="mb-3 xs:mb-6"
    label="Name"
    name="templateName"
    rules={[{ required: true, message: 'Please input your template name.' }]}
  >
    <Input />
  </Form.Item>
);

export default TemplateName;
