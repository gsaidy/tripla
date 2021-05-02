import { FC } from 'react';
import { Form, TimePicker } from 'antd';
const { RangePicker: TimeRangePicker } = TimePicker;

import { TIME_FORMAT, MINUTE_STEP } from 'constants/dateTimeFormats';

const TimeRangePickerType: FC = () => (
  <Form.Item label="Time Range Picker">
    <TimeRangePicker use12Hours format={TIME_FORMAT} minuteStep={MINUTE_STEP} order={false} />
  </Form.Item>
);

export default TimeRangePickerType;
