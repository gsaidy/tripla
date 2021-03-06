import { FC, useContext } from 'react';
import { Form, Input } from 'antd';
import { NamePath } from 'antd/lib/form/interface';

import { capitalize } from 'utils/helpers';
import { TemplateFormContext } from '../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const NameInput: FC<{
  name: NamePath;
  labelCol?: { span: number };
  entity: string;
}> = ({ name, labelCol, entity }) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <Form.Item
      label="Name"
      name={name}
      rules={[
        { required: true, message: `Please input your ${entity} name.` },
        { max: 50, message: `${capitalize(entity)} name can not exceed 50 characters.` },
      ]}
      labelCol={labelCol}
    >
      <Input bordered={formMode !== FormMode.View} />
    </Form.Item>
  );
};

export default NameInput;
