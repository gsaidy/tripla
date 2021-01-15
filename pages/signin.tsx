import { FC } from 'react';
import { Button } from 'antd';
import { GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';

const Signin: FC = () => (
  <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Tripla" />
        <h2 className="border-b-2 border-gray-100 pb-3 mt-4 text-center text-3xl font-extrabold text-gray-700">
          Sign in to your account
        </h2>
      </div>
      <div className="space-y-2 flex items-center flex-col">
        <Button
          className="flex items-center justify-center w-56"
          size="large"
          icon={<GoogleOutlined className="text-yellow-400" />}
        >
          Sign in with Google
        </Button>
        <Button
          className="flex items-center justify-center w-56"
          size="large"
          icon={<FacebookOutlined className="text-blue-500" />}
        >
          Sign in with Facebook
        </Button>
        <Button
          className="flex items-center justify-center w-56"
          size="large"
          icon={<GithubOutlined />}
        >
          Sign in with Github
        </Button>
      </div>
    </div>
  </div>
);

export default Signin;
