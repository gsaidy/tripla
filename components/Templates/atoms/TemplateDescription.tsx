import { FC } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

const TemplateName: FC = () => (
  <Form.Item label="Description" name="description">
    <TextArea rows={3} />
  </Form.Item>
);

export default TemplateName;
