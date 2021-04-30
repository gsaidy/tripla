import { FC } from 'react';
import { Form, TimePicker } from 'antd';

import { TIME_FORMAT, MINUTE_STEP } from 'constants/dateTimeFormats';

const TimePickerType: FC = () => (
  <Form.Item label="Time Picker">
    <TimePicker use12Hours format={TIME_FORMAT} minuteStep={MINUTE_STEP} />
  </Form.Item>
);

export default TimePickerType;
