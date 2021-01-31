import { FC } from 'react';

import FormSection from '../atoms/FormSection';
import TemplateName from '../atoms/TemplateName';
import TemplateDescription from '../atoms/TemplateDescription';

const BasicInfo: FC = () => (
  <FormSection header={<h3>Basic Info</h3>}>
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-4 sm:col-span-3 lg:col-span-2">
        <TemplateName />
        <TemplateDescription />
      </div>
    </div>
  </FormSection>
);

export default BasicInfo;
