import { FC, useContext } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import FormMode from 'enums/formMode';
import { TemplateFormContext } from '../Templates/organisms/TemplateForm';

const AddEntityButton: FC<{ entity: string; add: () => void }> = ({ entity, add }) => {
  const { formMode } = useContext(TemplateFormContext);

  if (formMode === FormMode.View) {
    return null;
  }

  return (
    <Button
      className="flex justify-center items-center"
      type="dashed"
      size="large"
      block
      icon={<PlusOutlined />}
      onClick={add}
    >
      Add {entity}
    </Button>
  );
};

export default AddEntityButton;
