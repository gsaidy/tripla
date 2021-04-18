import { FC } from 'react';
import { Input, Select, DatePicker, TimePicker } from 'antd';
const { Option: SelectOption } = Select;
const { RangePicker: DateRangePicker } = DatePicker;
const { RangePicker: TimeRangePicker } = TimePicker;
const { TextArea } = Input;

import EditType from 'enums/editType';
import Option from 'interfaces/option';

const CustomField: FC<{ type: EditType; options: Option[] }> = ({ type, options }) => {
  if (type === EditType.Input) {
    return <Input />;
  }
  if (type === EditType.Select) {
    console.log(options);
    return (
      <Select showSearch>
        {options.map(({ name }) => (
          <SelectOption key={name} value={name}>
            {name}
          </SelectOption>
        ))}
      </Select>
    );
  }
  if (type === EditType.DatePicker) {
    return <DatePicker />;
  }
  if (type === EditType.DateRangePicker) {
    return <DateRangePicker />;
  }
  if (type === EditType.TimePicker) {
    return <TimePicker use12Hours />;
  }
  if (type === EditType.TimeRangePicker) {
    return <TimeRangePicker use12Hours />;
  }
  return <TextArea rows={3} />;
};

export default CustomField;
