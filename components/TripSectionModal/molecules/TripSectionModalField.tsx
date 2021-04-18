import { FC } from 'react';
import { Form } from 'antd';

import CustomField from '../atoms/CustomField';
import EditType from 'enums/editType';
import Option from 'interfaces/option';

const TripSectionModalField: FC<{
  name: string;
  required?: boolean;
  type: EditType;
  options?: Option[];
}> = ({ name, required, type, options = [] }) => (
  <Form.Item name={name} label={name} rules={[{ required, message: `Please select a ${name}.` }]}>
    <CustomField type={type} options={options} />
  </Form.Item>
);

export default TripSectionModalField;
