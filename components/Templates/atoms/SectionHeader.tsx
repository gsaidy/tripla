import { FC } from 'react';

import EntityHeader from '../../Utilities/EntityHeader';

const SectionHeader: FC<{ title: string; removeSection: () => void }> = ({
  title,
  removeSection,
}) => <EntityHeader title={title} remove={removeSection} />;

export default SectionHeader;
