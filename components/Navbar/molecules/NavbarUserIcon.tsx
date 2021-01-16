import { FC } from 'react';
import { useSession } from 'next-auth/client';

const NavbarUserIcon: FC = () => {
  const [session] = useSession();
  const image = session?.user?.image || '/profile.png';

  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <img className="h-10 w-10 rounded-full border-2" src={image} alt="user-icon" />
    </div>
  );
};

export default NavbarUserIcon;
