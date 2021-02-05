import { FC } from 'react';

import NameInput from '../../Utilities/NameInput';

const AttributeName: FC = () => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3">
    <NameInput entity="attribute" />
  </div>
);

export default AttributeName;
