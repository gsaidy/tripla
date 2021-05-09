import { FC } from 'react';

import AddEntityButton from '../../Utilities/AddEntityButton';

const AddOptionButton: FC<{ addOption: () => void }> = ({ addOption }) => (
  <AddEntityButton entity="Option" add={addOption} />
);

export default AddOptionButton;
