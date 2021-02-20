import { FC, useContext } from 'react';

import FormSection from '../atoms/FormSection';
import TemplateName from '../atoms/TemplateName';
import TemplateDescription from '../atoms/TemplateDescription';
import { TemplateFormContext } from '../organisms/TemplateForm';
import FormMode from 'enums/formMode';
import TemplateCreatedBy from '../atoms/TemplateCreatedBy';
import User from 'interfaces/user';

const BasicInfo: FC<{ user?: User }> = ({ user }) => {
  const formMode = useContext(TemplateFormContext);

  return (
    <FormSection header={<h3>Basic Info</h3>}>
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
          {formMode === FormMode.View && <TemplateCreatedBy user={user} />}
        </div>
      </div>
    </FormSection>
  );
};

export default BasicInfo;
