import { FC } from 'react';

import OptionHeader from '../atoms/OptionHeader';
import OptionName from '../atoms/OptionName';
import OptionTagColor from '../atoms/OptionTagColor';

const AttributeOption: FC<{ index: number; showTagColor: boolean; removeOption: () => void }> = ({
  index,
  showTagColor,
  removeOption,
}) => (
  <>
    <OptionHeader title={`Option ${index + 1}`} removeOption={removeOption} />
    <div className="grid grid-cols-6 gap-x-2 mt-2 xs:mt-6 mb-1">
      <OptionName />
      {showTagColor && <OptionTagColor />}
    </div>
  </>
);

export default AttributeOption;
