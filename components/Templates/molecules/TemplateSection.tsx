import { FC } from 'react';

import FormSection from '../../Utilities/FormSection';
import SectionHeader from '../atoms/SectionHeader';
import SectionName from '../atoms/SectionName';
import SectionOrder from '../atoms/SectionOrder';
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
      <div className="grid grid-cols-6 gap-6">
        <SectionName parentName={name} />
        <SectionOrder parentName={name} />
      </div>
      <SectionAttributes parentName={name} />
    </div>
  </FormSection>
);

export default TemplateSection;
