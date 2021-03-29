import { FC } from 'react';

import FormSection from '../../Utilities/FormSection';
import TripName from '../atoms/TripName';
import TripTemplate from '../atoms/TripTemplate';
import TripDestination from '../atoms/TripDestination';

const BasicInfo: FC = () => (
  <FormSection header="Basic Info">
    <div className="relative">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 sm:col-span-3 lg:col-span-2">
          <TripName />
          <TripDestination />
          <TripTemplate />
        </div>
      </div>
    </div>
  </FormSection>
);

export default BasicInfo;