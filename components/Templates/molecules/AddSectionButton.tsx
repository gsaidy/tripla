import { FC } from 'react';

import AddEntityButton from '../../utilities/AddEntityButton';

const AddSectionButton: FC<{ addSection: () => void }> = ({ addSection }) => (
  <div className="max-w-7xl mx-auto py-4 sm:px-4 lg:px-6">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-5">
        <AddEntityButton entity="Section" add={addSection} />
      </div>
    </div>
  </div>
);

export default AddSectionButton;
