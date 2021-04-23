import { FC } from 'react';
import { Form, TimePicker } from 'antd';
const { RangePicker: TimeRangePicker } = TimePicker;

import { TIME_FORMAT } from 'constants/dateTimeFormats';

const TimeRangePickerType: FC = () => (
  <Form.Item label="Time Range Picker">
    <TimeRangePicker use12Hours format={TIME_FORMAT} />
  </Form.Item>
);

export default TimeRangePickerType;
