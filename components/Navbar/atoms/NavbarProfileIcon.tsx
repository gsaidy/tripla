import { FC } from 'react';
import { useSession } from 'next-auth/client';

const NavbarProfileIcon: FC<{ onClick: () => void; onBlur: () => void }> = ({
  onClick,
  onBlur,
}) => {
  const [session] = useSession();
  const image = session?.user?.image || '/profile.png';

  return (
    <button className="focus:outline-none" onClick={onClick} onBlur={onBlur}>
      <img className="h-10 w-10 rounded-full border-2" src={image} alt="user-icon" />
    </button>
  );
};

export default NavbarProfileIcon;
