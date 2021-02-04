import { FC } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';

const AttributeEdit: FC<{ setValue: (value: string) => void }> = ({ setValue }) => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3">
    <Form.Item
      className="mb-3 xs:mb-6"
      label="Edit"
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
      <Select showSearch defaultValue="input" onChange={setValue}>
        <Option value="input">Input</Option>
        <Option value="select">Select</Option>
        <Option value="datePicker">Date Picker</Option>
        <Option value="dateRangePicker">Date Range Picker</Option>
        <Option value="timePicker">Time Picker</Option>
        <Option value="timeRangePicker">Time Range Picker</Option>
        <Option value="textArea">Text Area</Option>
      </Select>
    </Form.Item>
  </div>
);

export default AttributeEdit;
