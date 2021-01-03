import { FC } from 'react';
import Link from 'next/link';

const items = [
  { href: '/itineraries', text: 'Itineraries' },
  { href: '/templates', text: 'Templates' },
];

const NavbarItems: FC = () => (
  <nav className="hidden md:flex space-x-10">
    {items.map(({ href, text }) => (
      <Link key={text} href={href}>
        <a className="text-gray-700 inline-flex items-center text-base font-semibold hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
          {text}
        </a>
      </Link>
    ))}
  </nav>
);

export default NavbarItems;
