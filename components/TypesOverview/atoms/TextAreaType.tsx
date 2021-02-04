import { FC } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

const TextAreaType: FC = () => (
  <Form.Item className="mt-3 mb-2" label="Text Area">
    <TextArea />
  </Form.Item>
);

export default TextAreaType;
