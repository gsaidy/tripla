import { FC } from 'react';

import FormSection from '../atoms/FormSection';
import TemplateHeader from '../atoms/TemplateHeader';
import TemplateName from '../atoms/TemplateName';
import SectionAttributes from '../../SectionAttributes/SectionAttributes';

const TemplateSection: FC<{ index: number; name: number; removeSection: () => void }> = ({
  index,
  name,
  removeSection,
}) => (
  <FormSection
    header={<TemplateHeader title={`Section ${index + 1}`} removeSection={removeSection} />}
  >
    <div className="pb-6">
      <div className="grid grid-cols-4 gap-6">
        <TemplateName />
      </div>
      <SectionAttributes parentName={name} />
    </div>
  </FormSection>
);

export default TemplateSection;
