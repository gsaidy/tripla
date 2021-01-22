import { FC } from 'react';
import { LoginOutlined, CloseOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/client';

const SignInBanner: FC = () => (
  <div className="bg-blue-300">
    <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <button
            className="flex justify-center items-center text-white text-xl p-3 rounded-lg bg-blue-500 hover:bg-blue-800 focus:outline-none"
            onClick={() => signIn()}
          >
            <LoginOutlined />
          </button>
          <p className="ml-3 font-medium text-white">
            <span>
              <span className="italic">Recommended: </span>
              <a
                className="underline underline-offset-1 hover:text-blue-800"
                role="button"
                tabIndex={-1}
                onClick={() => signIn()}
                onKeyDown={() => signIn()}
              >
                Sign in
              </a>{' '}
              so you could edit your template later if needed.
            </span>
          </p>
        </div>
        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 text-white text-xl">
          <button
            type="button"
            className="-mr-1 flex p-2 rounded-md hover:bg-blue-800 focus:outline-none sm:-mr-2"
          >
            <span className="sr-only">Dismiss</span>
            <CloseOutlined />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SignInBanner;
