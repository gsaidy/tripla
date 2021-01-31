import { FC } from 'react';

import FormSection from '../atoms/FormSection';
import SectionHeader from '../atoms/SectionHeader';
import SectionName from '../atoms/SectionName';
import SectionAttributes from '../../SectionAttributes/SectionAttributes';

const TemplateSection: FC<{ index: number; name: number; removeSection: () => void }> = ({
  index,
  name,
  removeSection,
}) => (
  <FormSection
    header={<SectionHeader title={`Section ${index + 1}`} removeSection={removeSection} />}
  >
    <div className="pb-6">
      <div className="grid grid-cols-4 gap-6">
        <SectionName />
      </div>
      <SectionAttributes parentName={name} />
    </div>
  </FormSection>
);

export default TemplateSection;
