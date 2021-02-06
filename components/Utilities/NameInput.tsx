import { FC } from 'react';
import { Form, Input } from 'antd';

import { capitalize } from '../../utils/string';

const NameInput: FC<{ name: string | (string | number)[]; entity: string }> = ({
  name,
  entity,
}) => (
  <Form.Item
    label="Name"
    name={name}
    rules={[
      { required: true, message: `Please input your ${entity} name.` },
      { max: 50, message: `${capitalize(entity)} name can not exceed 50 characters.` },
    ]}
  >
    <Input />
  </Form.Item>
);

export default NameInput;
