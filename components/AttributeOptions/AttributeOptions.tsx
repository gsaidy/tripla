import { FC } from 'react';
import { Collapse, Form } from 'antd';
const { Panel } = Collapse;

import EntityInfoTooltip from '../Utilities/EntityInfoTooltip';
import AttributeOption from './molecules/AttributeOption';
import AddOptionButton from './molecules/AddOptionButton';
import colors from 'constants/colors';

const AttributeOptions: FC<{ parentName: number; showTagColor: boolean }> = ({
  parentName,
  showTagColor,
}) => (
  <Collapse className="mb-7 sm:mb-6" defaultActiveKey="1">
    <Panel
      key="1"
      header="Options"
      extra={<EntityInfoTooltip title="A Select/Tag attribute must have at least one option" />}
    >
      <Form.List name={[parentName, 'attributeOptions']}>
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <AttributeOption
                key={field.key}
                index={index}
                name={field.name}
                showTagColor={showTagColor}
                removeOption={() => remove(field.name)}
              />
            ))}
            <AddOptionButton addOption={() => add({ optionTagColor: colors.GREEN })} />
          </>
        )}
      </Form.List>
    </Panel>
  </Collapse>
);

export default AttributeOptions;
