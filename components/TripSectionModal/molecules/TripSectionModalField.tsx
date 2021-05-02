import { FC } from 'react';
import { Form, Input, Select, DatePicker, TimePicker } from 'antd';
const { Option: SelectOption } = Select;
const { RangePicker: DateRangePicker } = DatePicker;
const { RangePicker: TimeRangePicker } = TimePicker;
const { TextArea } = Input;

import EditType from 'enums/editType';
import Option from 'interfaces/option';
import { TIME_FORMAT, MINUTE_STEP } from 'constants/dateTimeFormats';

const TripSectionModalField: FC<{
  name: string;
  required?: boolean;
  type: EditType;
  options?: Option[];
}> = ({ name, required, type, options = [] }) => {
  let field;

  if (type === EditType.Input) {
    field = <Input />;
  } else if (type === EditType.Select) {
    field = (
      <Select showSearch>
        {options.map(({ name }) => (
          <SelectOption key={name} value={name}>
            {name}
          </SelectOption>
        ))}
      </Select>
    );
  } else if (type === EditType.DatePicker) {
    field = <DatePicker />;
  } else if (type === EditType.DateRangePicker) {
    field = <DateRangePicker />;
  } else if (type === EditType.TimePicker) {
    field = <TimePicker use12Hours format={TIME_FORMAT} minuteStep={MINUTE_STEP} />;
  } else if (type === EditType.TimeRangePicker) {
    field = (
      <TimeRangePicker use12Hours format={TIME_FORMAT} minuteStep={MINUTE_STEP} order={false} />
    );
  } else {
    field = <TextArea rows={3} />;
  }

  return (
    <Form.Item name={name} label={name} rules={[{ required, message: `Please select a ${name}.` }]}>
      {field}
    </Form.Item>
  );
};

export default TripSectionModalField;
