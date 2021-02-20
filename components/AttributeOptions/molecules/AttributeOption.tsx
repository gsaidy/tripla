import { FC } from 'react';

import OptionHeader from '../atoms/OptionHeader';
import OptionName from '../atoms/OptionName';
import OptionTagColor from '../atoms/OptionTagColor';

const AttributeOption: FC<{
  index: number;
  name: number;
  chainedName: (string | number)[];
  showTagColor: boolean;
  removeOption: () => void;
}> = ({ index, name, chainedName, showTagColor, removeOption }) => (
  <>
    <OptionHeader title={`Option ${index + 1}`} removeOption={removeOption} />
    <div className="grid grid-cols-6 gap-x-2 mt-2 xs:mt-6 mb-1 lg:mb-0">
      <OptionName parentName={name} />
      {showTagColor && <OptionTagColor parentName={name} chainedName={chainedName} />}
    </div>
  </>
);

export default AttributeOption;
