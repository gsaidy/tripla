import { FC } from 'react';
import Link from 'next/link';

const items = [
  { text: 'Create Trip', href: '/trips/create' },
  { text: 'View Trips', href: '/trips' },
  { text: 'Create Template', href: '/templates/create' },
  { text: 'View Templates', href: '/templates' },
];

const MobileNavbarItems: FC = () => (
  <div className="mt-6">
    <nav className="grid gap-y-8">
      {items.map(({ text, href }) => (
        <Link key={text} href={href}>
          <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
            <span className="ml-3 text-base font-medium text-gray-900">{text}</span>
          </a>
        </Link>
      ))}
    </nav>
  </div>
);

export default MobileNavbarItems;
