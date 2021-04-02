import { FC, useContext } from 'react';

import FormSection from '../../Utilities/FormSection';
import TripName from '../atoms/TripName';
import TripTemplate from '../atoms/TripTemplate';
import TripDestination from '../atoms/TripDestination';
import { TripFormContext } from '../organisms/TripForm';
import FormMode from 'enums/formMode';
import EntityCreatedBy from '../../Utilities/EntityCreatedBy';
import User from 'interfaces/user';

const BasicInfo: FC<{ user?: User; onTemplateSelect: (id: number) => void }> = ({
  user,
  onTemplateSelect,
}) => {
  const { formMode } = useContext(TripFormContext);

  return (
    <FormSection header="Basic Info">
      <div className="relative">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-4 sm:col-span-3 lg:col-span-2">
            <TripName />
            <TripDestination />
            <TripTemplate onSelect={onTemplateSelect} />
          </div>
          {formMode === FormMode.View && <EntityCreatedBy user={user} />}
        </div>
      </div>
    </FormSection>
  );
};

export default BasicInfo;
