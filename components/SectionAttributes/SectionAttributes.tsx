import { FC } from 'react';
import { Collapse, Form } from 'antd';
const { Panel } = Collapse;

import EntityInfoTooltip from '../Utilities/EntityInfoTooltip';
import SectionAttribute from './molecules/SectionAttribute';
import AddAttributeButton from './molecules/AddAttributeButton';

const SectionAttributes: FC<{ parentName: number }> = ({ parentName }) => (
  <Collapse defaultActiveKey="1">
    <Panel
      key="1"
      header="Attributes"
      extra={<EntityInfoTooltip title="A section must have at least one attribute" />}
    >
      <Form.List name={[parentName, 'attributes']}>
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <SectionAttribute
                key={field.key}
                index={index}
                name={field.name}
                removeAttribute={() => remove(field.name)}
              />
            ))}
            <AddAttributeButton
              addAttribute={() => add({ attributeEdit: 'input', attributeView: 'label' })}
            />
          </>
        )}
      </Form.List>
    </Panel>
  </Collapse>
);

export default SectionAttributes;
