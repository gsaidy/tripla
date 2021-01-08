import { FC } from 'react';
import { CopyrightOutlined } from '@ant-design/icons';

const CopyrightSection: FC = () => (
  <div className="mx-auto flex justify-center items-center md:text-lg">
    <CopyrightOutlined className="mr-1" />
    <span>
      2021 <span className="font-medium">Tripla.</span> All rights reserved.
    </span>
  </div>
);

export default CopyrightSection;
