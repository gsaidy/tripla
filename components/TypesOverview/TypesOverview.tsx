import { FC } from 'react';
import { Card, DatePicker, Divider, Form, Input, Select, TimePicker } from 'antd';
const { Option } = Select;
const { RangePicker: DateRangePicker } = DatePicker;
const { RangePicker: TimeRangePicker } = TimePicker;
const { TextArea } = Input;

const TypesOverview: FC = () => (
  <div className="min-h-tripla bg-gray-50">
    <div className="mx-auto py-6 sm:w-11/12 md:w-3/4 lg:w-3/5">
      <Card className="text-center" type="inner" title="Edit Types">
        <Form labelCol={{ span: 6 }}>
          <Form.Item className="mt-3" label="Input">
            <Input />
          </Form.Item>
          <Divider />
          <Form.Item className="mt-3" label="Select">
            <Select showSearch>
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
              <Option value="option3">Option 3</Option>
            </Select>
          </Form.Item>
          <Divider />
          <Form.Item className="mt-3" label="Date Picker">
            <DatePicker />
          </Form.Item>
          <Divider />
          <Form.Item className="mt-3" label="Date Range Picker">
            <DateRangePicker />
          </Form.Item>
          <Divider />
          <Form.Item className="mt-3" label="Time Picker">
            <TimePicker use12Hours />
          </Form.Item>
          <Divider />
          <Form.Item className="mt-3" label="Time Range Picker">
            <TimeRangePicker use12Hours />
          </Form.Item>
          <Divider />
          <Form.Item className="mt-3 mb-2" label="Text Area">
            <TextArea />
          </Form.Item>
        </Form>
      </Card>
    </div>
  </div>
);

export default TypesOverview;
