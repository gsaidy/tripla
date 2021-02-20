import { FC } from 'react';
import { Result } from 'antd';

const ErrorResult: FC = () => (
  <div className="min-h-tripla flex flex-col justify-center">
    <Result status="500" title="ERROR" subTitle="Sorry, something went wrong." />
  </div>
);

export default ErrorResult;
