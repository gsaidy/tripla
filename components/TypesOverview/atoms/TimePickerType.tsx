import { FC } from 'react';
import { Form, TimePicker } from 'antd';

const TimePickerType: FC = () => (
  <Form.Item label="Time Picker">
    <TimePicker use12Hours />
  </Form.Item>
);

export default TimePickerType;
