import { FC } from 'react';
import { Button } from 'antd';
import { signOut } from 'next-auth/client';
import { useSession } from 'next-auth/client';

const MobileNavbarProfile: FC = () => {
  const [session] = useSession();
  const image = session?.user?.image || '/profile.png';
  const name = session?.user?.name || '';

  return (
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5 mb-4">
        <img className="h-10 w-10 rounded-full" src={image} alt="user-icon" />
        <div className="ml-3">
          <div className="text-base font-medium text-gray-500">{name}</div>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <Button
          className="rounded"
          type="primary"
          size="large"
          block
          onClick={() => signOut({ callbackUrl: window.location.pathname })}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default MobileNavbarProfile;
