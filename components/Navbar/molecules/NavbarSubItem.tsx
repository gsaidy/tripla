import { FC } from 'react';
import Link from 'next/link';

const NavbarSubItem: FC<{
  text: string;
  href: string;
  description: string;
}> = ({ text, href, description }) => (
  <Link href={href}>
    <a className="-m-3 p-3 flex items-start border-b-2 border-gray-100 last:border-b-0 hover:bg-gray-50">
      <div className="ml-4">
        <p className="text-base font-medium text-gray-900">{text}</p>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </a>
  </Link>
);

export default NavbarSubItem;
