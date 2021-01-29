import { FC } from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

import SectionAttribute from './molecules/SectionAttribute';

const SectionAttributes: FC = () => (
  <Collapse defaultActiveKey="1">
    <Panel key="1" header="Attributes">
      <SectionAttribute />
    </Panel>
  </Collapse>
);

export default SectionAttributes;
