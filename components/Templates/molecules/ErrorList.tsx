import { FC } from 'react';
import { Alert } from 'antd';
import { FrownOutlined } from '@ant-design/icons';

const ErrorList: FC<{ errors: string[]; onClose: () => void }> = ({ errors, onClose }) => (
  <div className="max-w-7xl mx-auto pb-4 sm:px-4 lg:px-6">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-5">
        <Alert
          message={
            <div className="flex items-center">
              Action Failed <FrownOutlined className="ml-1" />
            </div>
          }
          description={errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
          type="error"
          closable
          onClose={onClose}
        />
      </div>
    </div>
  </div>
);

export default ErrorList;
