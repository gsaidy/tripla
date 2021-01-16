import { FC } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

const MobileNavbarSignInButton: FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="py-6 px-5 space-y-6">
    <Link href="/signin">
      <Button type="primary" size="large" block onClick={onClose}>
        Sign In
      </Button>
    </Link>
  </div>
);

export default MobileNavbarSignInButton;
