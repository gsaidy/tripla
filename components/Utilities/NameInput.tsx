import { FC } from 'react';
import { Form, Input } from 'antd';
import { NamePath } from 'antd/lib/form/interface';

import { capitalize } from 'utils/helpers';

const NameInput: FC<{
  name: NamePath;
  labelCol?: { span: number };
  entity: string;
  bordered: boolean;
}> = ({ name, labelCol, entity, bordered }) => (
  <Form.Item
    label="Name"
    name={name}
    rules={[
      { required: true, message: `Please input your ${entity} name.` },
      { max: 50, message: `${capitalize(entity)} name can not exceed 50 characters.` },
    ]}
    labelCol={labelCol}
  >
    <Input bordered={bordered} />
  </Form.Item>
);

export default NameInput;
