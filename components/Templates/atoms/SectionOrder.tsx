import { FC } from 'react';
import { Form, InputNumber } from 'antd';

const SectionOrder: FC<{ parentName: number }> = ({ parentName }) => (
  <div className="col-span-6 sm:col-span-2 lg:col-span-3 lg:-ml-8 -mt-9 xs:-mt-6 sm:mt-0">
    <Form.Item label="Order" name={[parentName, 'order']}>
      <InputNumber min={1} />
    </Form.Item>
  </div>
);

export default SectionOrder;
