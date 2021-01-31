import { FC } from 'react';
import { Collapse, Tooltip } from 'antd';
const { Panel } = Collapse;
import { InfoCircleOutlined } from '@ant-design/icons';

import AttributeOption from './molecules/AttributeOption';

const AttributeOptions: FC = () => (
  <Collapse className="mb-7" defaultActiveKey="1">
    <Panel
      key="1"
      header="Options"
      extra={
        <Tooltip placement="topRight" title="An Select/Tag attribute must have at least one option">
          <InfoCircleOutlined className="text-left" />
        </Tooltip>
      }
    >
      <AttributeOption />
    </Panel>
  </Collapse>
);

export default AttributeOptions;
