import { FC } from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const SectionAttributes: FC = () => (
  <Collapse>
    <Panel header="Attributes" />
  </Collapse>
);

export default SectionAttributes;
