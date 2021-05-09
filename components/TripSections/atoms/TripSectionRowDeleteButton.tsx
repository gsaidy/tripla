import { FC } from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TripSectionRowDeleteButton: FC<{ onConfirm: () => void }> = ({ onConfirm }) => (
  <Popconfirm
    title="Are you sure you want to delete this row?"
    placement="topRight"
    okText="Yes"
    cancelText="No"
    onConfirm={onConfirm}
  >
    <Button danger icon={<DeleteOutlined />} />
  </Popconfirm>
);

export default TripSectionRowDeleteButton;
