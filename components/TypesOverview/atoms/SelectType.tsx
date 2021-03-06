import { FC } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;

const SelectType: FC = () => (
  <Form.Item label="Select">
    <Select showSearch>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  </Form.Item>
);

export default SelectType;
