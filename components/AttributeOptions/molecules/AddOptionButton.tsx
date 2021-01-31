import { FC } from 'react';

import AddEntityButton from '../../utilities/AddEntityButton';

const AddOptionButton: FC<{ addOption: () => void }> = ({ addOption }) => (
  <AddEntityButton entity="Option" add={addOption} />
);

export default AddOptionButton;
