import { FC } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const TemplateTableFilterIcon: FC<{ filtered: boolean }> = ({ filtered }) => (
  <SearchOutlined className={filtered ? 'text-blue-400' : ''} />
);

export default TemplateTableFilterIcon;
