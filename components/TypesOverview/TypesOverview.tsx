import { FC } from 'react';

import EditTypes from './molecules/EditTypes';
import ViewTypes from './molecules/ViewTypes';

const TypesOverview: FC = () => (
  <div className="min-h-tripla bg-gray-50">
    <div className="mx-auto py-6 sm:w-11/12 md:w-3/4 lg:w-3/5">
      <EditTypes />
      <ViewTypes />
    </div>
  </div>
);

export default TypesOverview;
