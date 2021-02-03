import { FC } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';

const EntityHeader: FC<{ className?: string; title: string; remove: () => void }> = ({
  className,
  title,
  remove,
}) => (
  <div className={`flex items-center ${className}`}>
    <h3>{title}</h3>
    <MinusCircleOutlined className="ml-1 cursor-pointer text-red-500" onClick={remove} />
  </div>
);

export default EntityHeader;
