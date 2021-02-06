import { FC } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';

import EditType from '../enums/EditType';

const AttributeEdit: FC<{ parentName: number; setValue: (value: string) => void }> = ({
  parentName,
  setValue,
}) => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3">
    <Form.Item
      className="mb-3 xs:mb-6"
      label="Edit"
      name={[parentName, 'attributeEdit']}
      tooltip={{
        placement: 'topLeft',
        title: (
          <span>
            Specify how{' '}
            <a
              className="italic underline text-blue-400 hover:text-blue-500"
              href="/types-overview#edit"
              target="_blank"
            >
              the attribute will be displayed
            </a>{' '}
            when creating or updating a trip
          </span>
        ),
        icon: <InfoCircleOutlined />,
      }}
    >
      <Select showSearch onChange={setValue}>
        <Option value={EditType.Input}>Input</Option>
        <Option value={EditType.Select}>Select</Option>
        <Option value={EditType.DatePicker}>Date Picker</Option>
        <Option value={EditType.DateRangePicker}>Date Range Picker</Option>
        <Option value={EditType.TimePicker}>Time Picker</Option>
        <Option value={EditType.TimeRangePicker}>Time Range Picker</Option>
        <Option value={EditType.TextArea}>Text Area</Option>
      </Select>
    </Form.Item>
  </div>
);

export default AttributeEdit;
