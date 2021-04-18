import { FC } from 'react';
import { Button } from 'antd';

const SubmitButton: FC<{ label: string; onSubmit: () => void }> = ({ label, onSubmit }) => (
  <Button type="primary" onClick={onSubmit}>
    {label}
  </Button>
);

export default SubmitButton;
