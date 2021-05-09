import { FC } from 'react';

import AddEntityButton from '../../Utilities/AddEntityButton';

const AddAttributeButton: FC<{ addAttribute: () => void }> = ({ addAttribute }) => (
  <AddEntityButton entity="Attribute" add={addAttribute} />
);

export default AddAttributeButton;
