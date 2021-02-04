import { FC } from 'react';
import { Card, Divider, Form } from 'antd';

import InputType from '../atoms/InputType';
import SelectType from '../atoms/SelectType';
import DatePickerType from '../atoms/DatePickerType';
import DateRangePickerType from '../atoms/DateRangePickerType';
import TimePickerType from '../atoms/TimePickerType';
import TimeRangePickerType from '../atoms/TimeRangePickerType';
import TextAreaType from '../atoms/TextAreaType';

const EditTypes: FC = () => (
  <Card className="text-center" type="inner" title="Edit Types">
    <Form labelCol={{ span: 6 }}>
      <InputType />
      <Divider />
      <SelectType />
      <Divider />
      <DatePickerType />
      <Divider />
      <DateRangePickerType />
      <Divider />
      <TimePickerType />
      <Divider />
      <TimeRangePickerType />
      <Divider />
      <TextAreaType />
    </Form>
  </Card>
);

export default EditTypes;
