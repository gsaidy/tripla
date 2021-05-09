import { FC } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

const TextAreaType: FC = () => (
  <Form.Item label="Text Area">
    <TextArea />
  </Form.Item>
);

export default TextAreaType;
