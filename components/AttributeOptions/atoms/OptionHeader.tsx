import { FC } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';

const OptionHeader: FC = () => (
  <div className="flex items-center border-b pb-1">
    <h3 className="font-bold text-gray-900">Option 1</h3>
    <MinusCircleOutlined className="ml-1 cursor-pointer text-red-500" />
  </div>
);

export default OptionHeader;
