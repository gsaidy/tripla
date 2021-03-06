import { FC } from 'react';
import { Form, TimePicker } from 'antd';
const { RangePicker: TimeRangePicker } = TimePicker;

const TimeRangePickerType: FC = () => (
  <Form.Item label="Time Range Picker">
    <TimeRangePicker use12Hours />
  </Form.Item>
);

export default TimeRangePickerType;
