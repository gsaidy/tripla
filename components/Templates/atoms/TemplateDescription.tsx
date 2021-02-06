import { FC } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

const TemplateName: FC = () => (
  <Form.Item
    className="-mt-3 xs:mt-0"
    label="Description"
    name="description"
    rules={[{ max: 250, message: 'Template description can not exceed 250 characters.' }]}
  >
    <TextArea rows={3} />
  </Form.Item>
);

export default TemplateName;
