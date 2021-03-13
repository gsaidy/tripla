import { FC, useContext } from 'react';
import { Button } from 'antd';

import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';

const CancelButton: FC<{ onClick: () => void }> = ({ onClick: setFormModeToView }) => {
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

export default CancelButton;
