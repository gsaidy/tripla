import { FC } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const TripSectionRowEditButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button type="primary" ghost icon={<EditOutlined />} onClick={onClick} />
);

export default TripSectionRowEditButton;
