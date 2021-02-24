import { FC } from 'react';
import { Button, Popconfirm } from 'antd';

const DeleteTemplateButton: FC<{ onConfirm: () => void }> = ({ onConfirm }) => (
  <Popconfirm
    title="Are you sure you want to delete this template?"
    okText="Yes"
    cancelText="No"
    onConfirm={onConfirm}
  >
    <Button className="rounded" size="large" danger>
      Delete Template
    </Button>
  </Popconfirm>
);

export default DeleteTemplateButton;
