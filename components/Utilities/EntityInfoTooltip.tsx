import { FC, useContext } from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import { TemplateFormContext } from '../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const EntityInfoTooltip: FC<{ title: string }> = ({ title }) => {
  const formMode = useContext(TemplateFormContext);

  if (formMode !== FormMode.View) {
    return (
      <Tooltip placement="topRight" title={title}>
        <InfoCircleOutlined />
      </Tooltip>
    );
  }
  return null;
};

export default EntityInfoTooltip;
