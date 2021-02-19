import { FC, useContext } from 'react';
import { Form, Input, InputNumber } from 'antd';

import { TemplateFormContext } from '../organisms/TemplateForm';
import FormMode from 'enums/formMode';

const SectionOrder: FC<{ parentName: number }> = ({ parentName }) => {
  const formMode = useContext(TemplateFormContext);

  return (
    <div className="col-span-6 sm:col-span-2 lg:col-span-3 lg:-ml-8 -mt-9 xs:-mt-6 sm:mt-0">
      <Form.Item label="Order" name={[parentName, 'order']}>
        {formMode === FormMode.View ? (
          <Input bordered={formMode !== FormMode.View} disabled={formMode === FormMode.View} />
        ) : (
          <InputNumber min={1} />
        )}
      </Form.Item>
    </div>
  );
};

export default SectionOrder;
