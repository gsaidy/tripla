import { FC } from 'react';

import EntityHeader from '../../Utilities/EntityHeader';

const OptionHeader: FC<{ title: string; removeOption: () => void }> = ({ title, removeOption }) => (
  <EntityHeader className="border-b pb-1" title={title} remove={removeOption} />
);

export default OptionHeader;
