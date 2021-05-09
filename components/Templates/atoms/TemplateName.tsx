import { FC, useContext } from 'react';

import NameInput from '../../Utilities/NameInput';
import { TemplateFormContext } from '../organisms/TemplateForm';
import FormMode from 'enums/formMode';

const TemplateName: FC = () => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <NameInput
      name="name"
      entity="template"
      labelCol={{ span: formMode === FormMode.View ? 4 : 6 }}
      bordered={formMode !== FormMode.View}
    />
  );
};

export default TemplateName;
