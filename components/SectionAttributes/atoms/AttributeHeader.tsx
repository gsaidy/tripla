import { FC } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';

const AttributeHeader: FC<{ title: string; removeAttribute: () => void }> = ({
  title,
  removeAttribute,
}) => (
  <div className="flex items-center border-b pb-1">
    <h3 className="font-bold text-gray-900">{title}</h3>
    <MinusCircleOutlined className="ml-1 cursor-pointer text-red-500" onClick={removeAttribute} />
  </div>
);

export default AttributeHeader;
