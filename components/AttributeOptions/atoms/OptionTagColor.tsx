import { FC } from 'react';

import ColorPicker from '../../Utilities/ColorPicker';

const OptionTagColor: FC<{ parentName: number }> = ({ parentName }) => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3 -mt-4 -mb-2 xs:-mt-1 lg:my-0">
    <ColorPicker label="Tag Color" name={[parentName, 'color']} />
  </div>
);

export default OptionTagColor;
