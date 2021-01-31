import { FC } from 'react';

import OptionHeader from '../atoms/OptionHeader';
import OptionName from '../atoms/OptionName';

const AttributeOption: FC = () => (
  <>
    <OptionHeader />
    <div className="grid grid-cols-6 gap-x-2 mt-2 xs:mt-6 mb-1">
      <OptionName />
    </div>
  </>
);

export default AttributeOption;
