import { FC } from 'react';
import Link from 'next/link';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const AlreadySignedIn: FC = () => (
  <Result
    className="min-h-screen flex flex-col justify-center -mt-16"
    icon={<SmileOutlined />}
    title="You are already signed in!"
    extra={
      <Link href="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export default AlreadySignedIn;
