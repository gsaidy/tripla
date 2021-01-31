import { FC } from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

import EntityInfoTooltip from '../utilities/EntityInfoTooltip';
import AttributeOption from './molecules/AttributeOption';

const AttributeOptions: FC = () => (
  <Collapse className="mb-7 sm:mb-6" defaultActiveKey="1">
    <Panel
      key="1"
      header="Options"
      extra={<EntityInfoTooltip title="A Select/Tag attribute must have at least one option" />}
    >
      <AttributeOption />
    </Panel>
  </Collapse>
);

export default AttributeOptions;
