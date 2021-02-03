import { FC } from 'react';

import NameInput from '../../utilities/NameInput';

const SectionName: FC = () => (
  <div className="col-span-4 sm:col-span-3 lg:col-span-2">
    <NameInput entity="section" />
  </div>
);

export default SectionName;
