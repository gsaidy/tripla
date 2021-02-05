import { FC } from 'react';
import { DatePicker, Form } from 'antd';

const DatePickerType: FC = () => (
  <Form.Item className="mt-3" label="Date Picker">
    <DatePicker />
  </Form.Item>
);

export default DatePickerType;
