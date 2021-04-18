import { FC } from 'react';
import { Button } from 'antd';

const CancelButton: FC<{ onCancel: () => void }> = ({ onCancel }) => (
  <Button onClick={onCancel}>Cancel</Button>
);

export default CancelButton;
