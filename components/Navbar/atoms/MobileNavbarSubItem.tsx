import { FC } from 'react';
import Link from 'next/link';

const MobileNavbarSubItem: FC<{ text: string; href: string; closeNavbar: () => void }> = ({
  text,
  href,
  closeNavbar,
}) => (
  <Link href={href}>
    <button
      className="block ml-3 text-lg font-medium text-gray-700 focus:outline-none"
      onClick={closeNavbar}
    >
      {text}
    </button>
  </Link>
);

export default MobileNavbarSubItem;
