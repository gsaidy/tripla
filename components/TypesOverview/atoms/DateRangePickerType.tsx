import { FC } from 'react';
import { DatePicker, Form } from 'antd';
const { RangePicker: DateRangePicker } = DatePicker;

const DateRangePickerType: FC = () => (
  <Form.Item label="Date Range Picker">
    <DateRangePicker />
  </Form.Item>
);

export default DateRangePickerType;
