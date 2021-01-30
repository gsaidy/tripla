import { FC } from 'react';
import { Checkbox, Form, Input, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const SectionAttribute: FC<{ index: number; removeAttribute: () => void }> = ({
  index,
  removeAttribute,
}) => (
  <>
    <div className="flex items-center border-b pb-1">
      <h3 className="font-bold text-gray-900">{`Attribute ${index + 1}`}</h3>
      <MinusCircleOutlined className="ml-1 cursor-pointer text-red-500" onClick={removeAttribute} />
    </div>
    <div className="grid grid-cols-6 gap-x-2 mt-2 xs:mt-6 mb-1">
      <div className="col-span-6 sm:col-span-4 lg:col-span-3">
        <Form.Item
          label="Name"
          name="attributeName"
          rules={[{ required: true, message: 'Please input your attribute name.' }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className="col-span-6 xs:col-start-2 sm:col-start-5 sm:col-span-2 lg:col-span-3 -mt-2 xs:mt-0 sm:mt-1 mb-2 xs:mb-6 sm:mb-0 xs:-ml-4 sm:ml-8 lg:ml-12">
        <Checkbox name="required">Required</Checkbox>
      </div>
      <div className="col-span-6 sm:col-span-4 lg:col-span-3">
        <Form.Item
          className="mb-3 xs:mb-6"
          label="Edit"
          name="editType"
          tooltip={{
            placement: 'topLeft',
            title: 'Specify how this attribute will be displayed when creating or updating a trip',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Select showSearch defaultValue="input">
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
      <div className="col-span-6 sm:col-span-4 lg:col-span-3 lg:mr-5">
        <Form.Item
          label="View"
          name="viewType"
          tooltip={{
            placement: 'topLeft',
            title: 'Specify how this attribute will be displayed when viewing a trip',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Select showSearch defaultValue="label">
            <Option value="label">Label</Option>
            <Option value="tag">Tag</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  </>
);

export default SectionAttribute;
