import { FC } from 'react';
import { CopyrightOutlined } from '@ant-design/icons';
import moment from 'moment';

const CopyrightSection: FC = () => (
  <div className="mx-auto flex justify-center items-center sm:text-lg">
    <CopyrightOutlined className="mr-1" />
    <span>
      {moment().format('YYYY')} <span className="font-medium">Tripla.</span> All rights reserved.
    </span>
  </div>
);

export default CopyrightSection;
