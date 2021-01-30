import { FC } from 'react';
import { Collapse, Form, Tooltip } from 'antd';
const { Panel } = Collapse;
import { InfoCircleOutlined } from '@ant-design/icons';

import SectionAttribute from './molecules/SectionAttribute';
import AddAttributeButton from './molecules/AddAttributeButton';

const SectionAttributes: FC<{ parentName: number }> = ({ parentName }) => (
  <Collapse defaultActiveKey="1">
    <Panel
      key="1"
      header="Attributes"
      extra={
        <Tooltip placement="topRight" title="A section must have at least one attribute">
          <InfoCircleOutlined className="text-left" />
        </Tooltip>
      }
    >
      <Form.List name={[parentName, 'attributes']}>
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <SectionAttribute
                key={field.key}
                index={index}
                removeAttribute={() => remove(field.name)}
              />
            ))}
            <AddAttributeButton addAttribute={add} />
          </>
        )}
      </Form.List>
    </Panel>
  </Collapse>
);

export default SectionAttributes;
