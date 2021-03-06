import { FC, useContext } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';

import ViewType from 'enums/viewType';
import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const AttributeView: FC<{ parentName: number; setValue: (value: string) => void }> = ({
  parentName,
  setValue,
}) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-3 lg:mr-5">
      <Form.Item
        label="View"
        name={[parentName, 'view']}
        tooltip={{
          placement: 'topLeft',
          title: (
            <span>
              Specify how{' '}
              <a
                className="italic underline text-blue-400 hover:text-blue-500"
                href="/types-overview#view"
                target="_blank"
              >
                the attribute will be displayed
              </a>{' '}
              when viewing a trip
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
          <Option value={ViewType.Label}>Label</Option>
          <Option value={ViewType.Tag}>Tag</Option>
          <Option value={ViewType.Link}>Link</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default AttributeView;
