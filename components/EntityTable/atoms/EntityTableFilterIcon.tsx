import { FC } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const EntityTableFilterIcon: FC<{ filtered: boolean }> = ({ filtered }) => (
  <SearchOutlined className={filtered ? 'text-blue-400' : ''} />
);

export default EntityTableFilterIcon;
