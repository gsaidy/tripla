import { FC } from 'react';
import { Form, InputNumber } from 'antd';

const SectionOrder: FC<{ defaultValue: number }> = ({ defaultValue }) => (
  <div className="col-span-6 sm:col-span-2 lg:col-span-3 lg:-ml-8 -mt-9 xs:-mt-6 sm:mt-0">
    <Form.Item label="Order">
      <InputNumber min={1} defaultValue={defaultValue} />
    </Form.Item>
  </div>
);

export default SectionOrder;
