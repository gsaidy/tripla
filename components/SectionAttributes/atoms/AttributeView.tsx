import { FC } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';

const AttributeView: FC<{ setValue: (value: string) => void }> = ({ setValue }) => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3 lg:mr-5">
    <Form.Item
      label="View"
      tooltip={{
        placement: 'topLeft',
        title: 'Specify how this attribute will be displayed when viewing a trip',
        icon: <InfoCircleOutlined />,
      }}
    >
      <Select showSearch defaultValue="label" onChange={setValue}>
        <Option value="label">Label</Option>
        <Option value="tag">Tag</Option>
      </Select>
    </Form.Item>
  </div>
);

export default AttributeView;
