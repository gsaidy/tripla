import { FC, useContext } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';

import { TemplateFormContext } from '../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const EntityHeader: FC<{ className?: string; title: string; remove: () => void }> = ({
  className,
  title,
  remove,
}) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <div className={`flex items-center ${className}`}>
      <h3>{title}</h3>
      {formMode !== FormMode.View && (
        <MinusCircleOutlined className="ml-1 cursor-pointer text-red-500" onClick={remove} />
      )}
    </div>
  );
};

export default EntityHeader;
