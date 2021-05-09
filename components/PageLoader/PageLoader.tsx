import { FC } from 'react';
import { Spin } from 'antd';

const PageLoader: FC = () => (
  <div className="min-h-tripla flex justify-center items-center">
    <Spin size="large" />
  </div>
);

export default PageLoader;
