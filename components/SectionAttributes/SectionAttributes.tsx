import { FC, useState } from 'react';
import { Collapse, Tooltip } from 'antd';
const { Panel } = Collapse;
import { InfoCircleOutlined } from '@ant-design/icons';

import SectionAttribute from './molecules/SectionAttribute';
import AddAttributeButton from './molecules/AddAttributeButton';
import { generateRandomString } from '../../utils/string';

const SectionAttributes: FC = () => {
  const [attributes, setAttributes] = useState<string[]>([]);

  const addAttribute = () => {
    setAttributes([...attributes, generateRandomString()]);
  };

  const removeAttribute = (attributeToRemove: string) => {
    setAttributes(attributes.filter((attribute) => attribute !== attributeToRemove));
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
        {attributes.map((attributeId, index) => (
          <SectionAttribute
            key={attributeId}
            index={index}
            removeAttribute={() => removeAttribute(attributeId)}
          />
        ))}
        <AddAttributeButton addAttribute={addAttribute} />
      </Panel>
    </Collapse>
  );
};

export default SectionAttributes;
