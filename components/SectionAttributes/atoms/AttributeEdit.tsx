import { FC, useContext } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';

import EditType from 'enums/editType';
import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const AttributeEdit: FC<{ parentName: number; setValue: (value: string) => void }> = ({
  parentName,
  setValue,
}) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-3">
      <Form.Item
        className="mb-3 xs:mb-6"
        label="Edit"
        name={[parentName, 'edit']}
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
        <Select
          showSearch
          bordered={formMode !== FormMode.View}
          showArrow={formMode !== FormMode.View}
          disabled={formMode === FormMode.View}
          onChange={setValue}
        >
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
};

export default AttributeEdit;
