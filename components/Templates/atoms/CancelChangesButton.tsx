import { FC, useContext } from 'react';
import { Button } from 'antd';

import { TemplateFormContext } from '../organisms/TemplateForm';

const CancelChangesButton: FC<{ onClick: () => void }> = ({ onClick: setFormModeToView }) => {
  const { resetFields } = useContext(TemplateFormContext);

  const onClick = () => {
    resetFields();
    setFormModeToView();
  };

  return (
    <Button className="rounded" size="large" onClick={onClick}>
      Cancel
    </Button>
  );
};

export default CancelChangesButton;
