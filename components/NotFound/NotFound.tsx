import { FC } from 'react';
import Link from 'next/link';
import { Result, Button } from 'antd';

const NotFound: FC = () => (
  <div className="min-h-tripla flex flex-col justify-center">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </div>
);

export default NotFound;
