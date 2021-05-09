import { FC, useContext } from 'react';
import { Form, Input, Switch } from 'antd';

import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const AttributeRequired: FC<{ parentName: number }> = ({ parentName }) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-3 -mt-3 -mb-6 xs:my-0">
      <Form.Item
        label="Required"
        name={[parentName, 'required']}
        valuePropName={formMode === FormMode.View ? 'value' : 'checked'}
      >
        {formMode === FormMode.View ? (
          <Input className="capitalize mb-3 xs:mb-0" bordered={false} />
        ) : (
          <Switch className="-mt-5 xs:mt-0" />
        )}
      </Form.Item>
    </div>
  );
};

export default AttributeRequired;
