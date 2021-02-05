import { FC } from 'react';
import { Tag } from 'antd';

const TagType: FC = () => (
  <div className="mt-3 mb-1.5 space-x-2">
    <label htmlFor="tag">Tag:</label>
    <Tag color="#34D399">High</Tag>
    <Tag color="#FCD34D">Medium</Tag>
    <Tag color="#EF4444">Low</Tag>
  </div>
);

export default TagType;
