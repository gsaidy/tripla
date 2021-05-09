import { FC } from 'react';
import { Alert } from 'antd';

const NoSectionsAlert: FC = () => (
  <div className="max-w-7xl mx-auto sm:px-4 lg:px-6">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-span-6">
        <Alert className="text-base" message="The selected template has no sections" type="info" />
      </div>
    </div>
  </div>
);

export default NoSectionsAlert;
