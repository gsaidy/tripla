import { FC } from 'react';
import { DatePicker, Form } from 'antd';
const { RangePicker: DateRangePicker } = DatePicker;

const DateRangePickerType: FC = () => (
  <Form.Item className="mt-3" label="Date Range Picker">
    <DateRangePicker />
  </Form.Item>
);

export default DateRangePickerType;
