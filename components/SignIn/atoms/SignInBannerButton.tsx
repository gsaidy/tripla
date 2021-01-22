import { FC } from 'react';
import { LoginOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/client';

const SignInBannerButton: FC = () => (
  <button
    className="flex justify-center items-center text-white text-xl p-3 rounded-lg bg-blue-500 hover:bg-blue-800 focus:outline-none"
    onClick={() => signIn()}
  >
    <span className="sr-only">Sign In</span>
    <LoginOutlined />
  </button>
);

export default SignInBannerButton;
