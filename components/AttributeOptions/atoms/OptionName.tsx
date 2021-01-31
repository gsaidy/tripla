import { FC } from 'react';

import NameInput from '../../utilities/NameInput';

const OptionName: FC = () => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3">
    <NameInput entity="option" />
  </div>
);

export default OptionName;
