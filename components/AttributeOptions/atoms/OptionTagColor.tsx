import { FC, useContext } from 'react';

import ColorPicker from '../../Utilities/ColorPicker';
import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';

const OptionTagColor: FC<{ parentName: number; chainedName: (string | number)[] }> = ({
  parentName,
  chainedName,
}) => {
  const { getFieldValue } = useContext(TemplateFormContext);
  const defaultValue = getFieldValue([
    ...chainedName,
    ...['options', parentName, 'color'],
  ]) as string;

  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-3 -mt-4 -mb-2 xs:-mt-1 lg:my-0">
      <ColorPicker label="Tag Color" name={[parentName, 'color']} defaultValue={defaultValue} />
    </div>
  );
};

export default OptionTagColor;
