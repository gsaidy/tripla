import { FC, useContext } from 'react';

import NameInput from '../../Utilities/NameInput';
import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const OptionName: FC<{ parentName: number }> = ({ parentName }) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-3">
      <NameInput
        name={[parentName, 'name']}
        entity="option"
        bordered={formMode !== FormMode.View}
      />
    </div>
  );
};

export default OptionName;
