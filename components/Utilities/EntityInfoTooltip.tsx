import { FC } from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const EntityInfoTooltip: FC<{ title: string }> = ({ title }) => (
  <Tooltip placement="topRight" title={title}>
    <InfoCircleOutlined />
  </Tooltip>
);

export default EntityInfoTooltip;
