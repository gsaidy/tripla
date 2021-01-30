import { FC } from 'react';
import { Collapse, Tooltip } from 'antd';
const { Panel } = Collapse;
import { InfoCircleOutlined } from '@ant-design/icons';

const AttributeOptions: FC = () => (
  <Collapse className="mb-6" defaultActiveKey="1">
    <Panel
      key="1"
      header="Options"
      extra={
        <Tooltip placement="topRight" title="An Select/Tag attribute must have at least one option">
          <InfoCircleOutlined className="text-left" />
        </Tooltip>
      }
    />
  </Collapse>
);

export default AttributeOptions;
