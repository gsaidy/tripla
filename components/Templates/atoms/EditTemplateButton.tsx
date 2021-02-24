import { FC } from 'react';
import { Button } from 'antd';

const EditTemplateButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button className="rounded" type="primary" size="large" onClick={onClick}>
    Edit Template
  </Button>
);

export default EditTemplateButton;
