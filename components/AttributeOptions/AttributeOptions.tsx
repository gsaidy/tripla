import { FC } from 'react';
import { Collapse, Form } from 'antd';
const { Panel } = Collapse;

import EntityInfoTooltip from '../utilities/EntityInfoTooltip';
import AttributeOption from './molecules/AttributeOption';
import AddOptionButton from './molecules/AddOptionButton';

const AttributeOptions: FC<{ parentName: number }> = ({ parentName }) => (
  <Collapse className="mb-7 sm:mb-6" defaultActiveKey="1">
    <Panel
      key="1"
      header="Options"
      extra={<EntityInfoTooltip title="A Select/Tag attribute must have at least one option" />}
    >
      <Form.List name={[parentName, 'options']}>
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <AttributeOption
                key={field.key}
                index={index}
                removeOption={() => remove(field.name)}
              />
            ))}
            <AddOptionButton addOption={add} />
          </>
        )}
      </Form.List>
    </Panel>
  </Collapse>
);

export default AttributeOptions;
