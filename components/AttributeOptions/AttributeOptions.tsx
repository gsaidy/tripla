import { FC, useContext } from 'react';
import { Collapse, Form } from 'antd';
const { Panel } = Collapse;

import EntityInfoTooltip from '../Utilities/EntityInfoTooltip';
import AttributeOption from './molecules/AttributeOption';
import AddOptionButton from './molecules/AddOptionButton';
import colors from 'constants/colors';
import { TemplateFormContext } from '../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const AttributeOptions: FC<{
  parentName: number;
  chainedName: (string | number)[];
  showTagColor: boolean;
}> = ({ parentName, chainedName, showTagColor }) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <Collapse
      className={formMode === FormMode.View ? 'mb-2' : 'mb-5 sm:mb-4'}
      defaultActiveKey={formMode === FormMode.Create ? '1' : '0'}
    >
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
                  name={field.name}
                  chainedName={chainedName}
                  showTagColor={showTagColor}
                  removeOption={() => remove(field.name)}
                />
              ))}
              <AddOptionButton addOption={() => add({ color: colors.GREEN })} />
            </>
          )}
        </Form.List>
      </Panel>
    </Collapse>
  );
};

export default AttributeOptions;
