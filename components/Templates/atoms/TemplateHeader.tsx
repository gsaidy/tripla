import { FC } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';

const TemplateHeader: FC<{ title: string; removeSection: () => void }> = ({
  title,
  removeSection,
}) => (
  <div className="flex items-center">
    <h3>{title}</h3>
    <MinusCircleOutlined className="ml-1 cursor-pointer text-red-500" onClick={removeSection} />
  </div>
);

export default TemplateHeader;
