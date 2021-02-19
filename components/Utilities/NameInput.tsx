import { FC, useContext } from 'react';
import { Form, Input } from 'antd';

import { capitalize } from 'utils/helpers';
import { TemplateFormContext } from '../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const NameInput: FC<{ name: string | (string | number)[]; entity: string }> = ({
  name,
  entity,
}) => {
  const formMode = useContext(TemplateFormContext);

  return (
    <Form.Item
      label="Name"
      name={name}
      rules={[
        { required: true, message: `Please input your ${entity} name.` },
        { max: 50, message: `${capitalize(entity)} name can not exceed 50 characters.` },
      ]}
    >
      <Input bordered={formMode !== FormMode.View} disabled={formMode === FormMode.View} />
    </Form.Item>
  );
};

export default NameInput;
