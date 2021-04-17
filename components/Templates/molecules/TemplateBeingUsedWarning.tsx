import { FC, useState } from 'react';
import { Alert } from 'antd';

import TemplateBeingUsedWarningTitle from '../atoms/TemplateBeingUsedWarningTitle';
import TemplateBeingUsedWarningAction from '../atoms/TemplateBeingUsedWarningAction';
import TemplateBeingUsedWarningDetails from '../atoms/TemplateBeingUsedWarningDetails';

const TemplateBeingUsedWarning: FC<{ trips: { id: number; name: string }[] }> = ({ trips }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-7xl mx-auto pb-4 sm:px-4 lg:px-6">
      <div className="md:grid md:grid-cols-6">
        <div className="md:col-start-2 md:col-span-5">
          <Alert
            message={
              <>
                <TemplateBeingUsedWarningTitle count={trips.length} />{' '}
                <TemplateBeingUsedWarningAction
                  label={showDetails ? 'less' : 'more'}
                  onClick={() => setShowDetails(!showDetails)}
                />
                {showDetails && <TemplateBeingUsedWarningDetails trips={trips} />}
              </>
            }
            type="warning"
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateBeingUsedWarning;
