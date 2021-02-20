import { FC, useContext } from 'react';
import { Collapse, Form } from 'antd';
const { Panel } = Collapse;

import EntityInfoTooltip from '../Utilities/EntityInfoTooltip';
import SectionAttribute from './molecules/SectionAttribute';
import AddAttributeButton from './molecules/AddAttributeButton';
import EditType from 'enums/editType';
import ViewType from 'enums/viewType';
import { TemplateFormContext } from '../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const SectionAttributes: FC<{ parentName: number }> = ({ parentName }) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <Collapse defaultActiveKey={formMode === FormMode.Create ? '1' : '0'}>
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
                addAttribute={() => add({ edit: EditType.Input, view: ViewType.Label })}
              />
            </>
          )}
        </Form.List>
      </Panel>
    </Collapse>
  );
};

export default SectionAttributes;
