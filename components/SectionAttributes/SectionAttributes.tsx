import { FC, useState } from 'react';
import { Collapse, Tooltip } from 'antd';
const { Panel } = Collapse;
import { InfoCircleOutlined } from '@ant-design/icons';

import SectionAttribute from './molecules/SectionAttribute';
import AddAttributeButton from './molecules/AddAttributeButton';

const SectionAttributes: FC = () => {
  const [attributes, setAttributes] = useState([]);

  const addAttribute = () => {
    setAttributes([...attributes, `Attribute ${attributes.length + 1}`]);
  };

  return (
    <Collapse defaultActiveKey="1">
      <Panel
        key="1"
        header="Attributes"
        extra={
          <Tooltip placement="topRight" title="A section must at least have one attribute">
            <InfoCircleOutlined className="text-left" />
          </Tooltip>
        }
      >
        {attributes.map((attribute) => (
          <SectionAttribute key={attribute} />
        ))}
        <AddAttributeButton addAttribute={addAttribute} />
      </Panel>
    </Collapse>
  );
};

export default SectionAttributes;
