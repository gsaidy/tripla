import { FC, useContext } from 'react';

import FormSection from '../../Utilities/FormSection';
import TemplateName from '../atoms/TemplateName';
import TemplateDescription from '../atoms/TemplateDescription';
import { TemplateFormContext } from '../organisms/TemplateForm';
import FormMode from 'enums/formMode';
import EntityCreatedBy from '../../Utilities/EntityCreatedBy';
import User from 'interfaces/user';

const BasicInfo: FC<{ user?: User }> = ({ user }) => {
  const { formMode } = useContext(TemplateFormContext);

  return (
    <FormSection header="Basic Info">
      <div className="relative">
        <div className="grid grid-cols-4 gap-6">
          <div
            className={`col-span-4 ${
              formMode !== FormMode.View ? 'sm:col-span-3 lg:col-span-2' : ''
            }`}
          >
            <TemplateName />
            <TemplateDescription />
          </div>
          {formMode === FormMode.View && <EntityCreatedBy user={user} />}
        </div>
      </div>
    </FormSection>
  );
};

export default BasicInfo;
