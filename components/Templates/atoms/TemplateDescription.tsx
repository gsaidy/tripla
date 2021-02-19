import { FC, useContext } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

import { TemplateFormContext } from '../organisms/TemplateForm';
import FormMode from 'enums/formMode';

const TemplateName: FC = () => {
  const formMode = useContext(TemplateFormContext);

  return (
    <Form.Item
      className="-mt-3 xs:mt-0"
      label="Description"
      name="description"
      rules={[{ max: 250, message: 'Template description can not exceed 250 characters.' }]}
    >
      <TextArea
        rows={3}
        bordered={formMode !== FormMode.View}
        disabled={formMode === FormMode.View}
      />
    </Form.Item>
  );
};

export default TemplateName;
