import { FC } from 'react';
import { DatePicker, Form } from 'antd';

const DatePickerType: FC = () => (
  <Form.Item label="Date Picker">
    <DatePicker />
  </Form.Item>
);

export default DatePickerType;
