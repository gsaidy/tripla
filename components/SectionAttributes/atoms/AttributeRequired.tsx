import { FC } from 'react';
import { Checkbox } from 'antd';

const AttributeRequired: FC = () => (
  <div className="col-span-6 xs:col-start-2 sm:col-start-5 sm:col-span-2 lg:col-span-3 -mt-2 xs:mt-0 sm:mt-1 mb-2 xs:mb-6 sm:mb-0 xs:-ml-4 sm:ml-8 lg:ml-12">
    <Checkbox>Required</Checkbox>
  </div>
);

export default AttributeRequired;
