import { FC } from 'react';

import NameInput from '../../Utilities/NameInput';

const OptionName: FC<{ parentName: number }> = ({ parentName }) => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3">
    <NameInput name={[parentName, 'optionName']} entity="option" />
  </div>
);

export default OptionName;
