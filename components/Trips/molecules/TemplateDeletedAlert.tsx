import { FC } from 'react';
import { Alert } from 'antd';

const TemplateDeletedAlert: FC = () => (
  <div className="max-w-7xl mx-auto sm:px-4 lg:px-6">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-span-6">
        <Alert
          className="text-base"
          message="Seems that the template used previously by this trip is deleted"
          type="info"
        />
      </div>
    </div>
  </div>
);

export default TemplateDeletedAlert;
